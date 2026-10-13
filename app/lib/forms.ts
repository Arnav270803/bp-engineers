// The contact and quote forms post to the same Google Apps Script web app, and
// both send the same eight fields. This file builds those fields and sends
// them exactly as the original site does.

export const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbys8XYMuv31aX99Bb7g2WO7PcC5GWirY5EdlJ77tc2WwY4kQvKX1vW3FJBUcSGX0B0J/exec";

/** What the endpoint receives. The order of the fields matches the original. */
export interface EnquiryPayload {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  requirements: string;
  city: string;
  source: string;
}

export const CONTACT_FIELDS = ["name", "company", "phone", "email", "subject", "message"] as const;
export type ContactFields = Record<(typeof CONTACT_FIELDS)[number], string>;

export function buildContactPayload(fields: ContactFields): EnquiryPayload {
  return {
    name: fields.name,
    company: fields.company,
    phone: fields.phone,
    email: fields.email,
    product: fields.subject,
    requirements: fields.message,
    city: "",
    source: "Contact Page",
  };
}

export const QUOTE_FIELDS = [
  "name",
  "company",
  "phone",
  "email",
  "city",
  "country",
  "product_category",
  "material",
  "length",
  "width",
  "height",
  "quantity",
  "delivery",
  "specifications",
  "source",
] as const;
export type QuoteFields = Record<(typeof QUOTE_FIELDS)[number], string>;

export function buildQuotePayload(fields: QuoteFields): EnquiryPayload {
  return {
    name: fields.name,
    company: fields.company,
    phone: fields.phone,
    email: fields.email,
    product: fields.product_category,
    // The specifications come first, then each detail that was filled in.
    requirements: [
      fields.specifications,
      fields.length ? `L:${fields.length}mm` : "",
      fields.width ? `W:${fields.width}mm` : "",
      fields.height ? `H:${fields.height}mm` : "",
      fields.quantity ? `Qty:${fields.quantity}` : "",
      fields.material ? `Material:${fields.material}` : "",
      fields.delivery ? `Timeline:${fields.delivery}` : "",
    ]
      .filter(Boolean)
      .join(" | "),
    city: fields.city + (fields.country ? `, ${fields.country}` : ""),
    source: fields.source || "Quote Page",
  };
}

/** Reads the current value of each named control of a form. */
export function readFields<Name extends string>(
  form: HTMLFormElement,
  names: readonly Name[],
): Record<Name, string> {
  const values = {} as Record<Name, string>;
  for (const name of names) {
    const control = form.elements.namedItem(name);
    values[name] =
      control instanceof HTMLInputElement ||
      control instanceof HTMLSelectElement ||
      control instanceof HTMLTextAreaElement
        ? control.value
        : "";
  }
  return values;
}

/**
 * Sends an enquiry. Resolves when the endpoint answers with `status: "success"`
 * and rejects on any other answer or on a network error.
 *
 * The request carries no headers. The browser then sends it as plain text,
 * which is what lets it reach Google Apps Script without a preliminary
 * permission request. Adding a content type header would break that.
 */
export async function sendEnquiry(payload: EnquiryPayload): Promise<void> {
  const response = await fetch(FORM_ENDPOINT, { method: "POST", body: JSON.stringify(payload) });
  const result: { status?: unknown } = await response.json();
  if (result.status !== "success") throw new Error("error");
}
