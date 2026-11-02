import { Fragment, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { productPageText, type ProductPage } from "~/content/product-pages";
import { site } from "~/content/site";
import { cx } from "~/lib/cx";
import { useFieldsRestoredOnReturn } from "~/lib/form-memory";
import { PRODUCT_QUOTE_FIELDS, buildProductQuotePayload, readFields, sendEnquiry } from "~/lib/forms";
import { ChapterTitle, Kicker } from "./Chapter";

const text = productPageText.quote;
const onDarkRule = "border-[rgba(238,236,229,0.15)]";
const label =
  "block font-editorial-sans text-10 leading-[12px] tracking-caps text-editorial-on-dark-muted uppercase";
const input =
  "mt-2.5 block w-full rounded-none border-0 border-b border-b-[rgba(238,236,229,0.3)] bg-transparent p-0 pb-3.25 font-editorial-serif text-19 leading-[1.3] text-editorial-on-dark [outline:none] placeholder:text-[#7f8378] focus:border-b-editorial-accent-on-dark";
const fullRow = "col-span-2 upto-900:col-span-1";
const underlined = "underline decoration-editorial-accent-on-dark underline-offset-4";
const link = "hover:text-editorial-accent-on-dark";

function ContactRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className={`grid grid-cols-[120px_minmax(0,1fr)] border-b pt-4 pb-4.25 ${onDarkRule}`}>
      <dt className="pt-1.25 font-editorial-sans text-10 leading-[12px] tracking-caps text-editorial-on-dark-muted uppercase">
        {term}
      </dt>
      <dd className="text-18 leading-[1.6]">{children}</dd>
    </div>
  );
}

interface FieldProps {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  wide?: boolean;
}

function Field({ name, label: labelText, placeholder, required = false, wide = false }: FieldProps) {
  const id = `product-quote-${name}`;
  return (
    <div className={cx("mb-7.5", wide && fullRow)}>
      <label htmlFor={id} className={label}>
        {labelText}
      </label>
      <input
        id={id}
        type={name === "phone" ? "tel" : "text"}
        name={name}
        placeholder={placeholder}
        required={required}
        className={input}
      />
    </div>
  );
}

/**
 * The quote request at the end of a product page. It sends the same eight
 * fields as the site's other forms, with the product's name filled in.
 */
export function ProductQuote({ page, number }: { page: ProductPage; number: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const names = useMemo(
    () => [...PRODUCT_QUOTE_FIELDS, ...page.quoteFields.map((field) => field.name)],
    [page],
  );
  useFieldsRestoredOnReturn(formRef, names);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    sendEnquiry(buildProductQuotePayload(page.name, page.quoteFields, readFields(form, names))).then(
      () => {
        setStatus("sent");
        form.reset();
      },
      () => setStatus("failed"),
    );
  }

  return (
    <section
      id="quote"
      className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.13fr)] gap-x-[7.3%] bg-editorial-dark px-editorial-gutter pt-26 pb-28 text-editorial-on-dark upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-12 upto-900:px-5 upto-900:pt-16 upto-900:pb-18"
    >
      <div>
        <Kicker number={number} label={productPageText.chapters.quote} />
        <div className="max-w-140">
          <ChapterTitle headline={text.title} dark />
        </div>
        <p className="mt-6.5 max-w-117.5 text-18 leading-[1.65] text-editorial-on-dark-soft">{text.note}</p>
        <dl className={`mt-13 border-t ${onDarkRule}`}>
          <ContactRow term={text.contact.call}>
            {site.phones.map((phone, index) => (
              <Fragment key={phone.href}>
                {index > 0 && <br />}
                <a href={phone.href} className={link}>
                  {phone.label}
                </a>
              </Fragment>
            ))}
          </ContactRow>
          <ContactRow term={text.contact.whatsapp}>
            <a href={site.whatsapp.href} target="_blank" rel="noopener" className={link}>
              {site.whatsapp.label}
            </a>
          </ContactRow>
          <ContactRow term={text.contact.email}>
            <a href={site.email.href} className={link}>
              {site.email.label}
            </a>
          </ContactRow>
        </dl>
      </div>

      <form
        id="productQuoteForm"
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-flow-row-dense grid-cols-[repeat(2,minmax(0,1fr))] gap-x-8 pt-1.5 upto-900:grid-cols-[minmax(0,1fr)]"
      >
        <div className={cx("mb-7.5", fullRow)}>
          <span className={label}>{text.product}</span>
          <div className="mt-2.5 flex items-center justify-between gap-4 border-b border-b-[rgba(238,236,229,0.3)] pb-3.25 text-19 leading-[1.3]">
            {page.name}
            <span className="border border-[rgba(220,106,64,0.6)] px-2.25 pt-1.25 pb-1 font-editorial-sans text-9 leading-[1] tracking-caps text-editorial-accent-on-dark uppercase">
              {text.prefilled}
            </span>
          </div>
        </div>
        <Field name="name" label={text.name.label} placeholder={text.name.placeholder} required />
        <Field name="company" label={text.company.label} placeholder={text.company.placeholder} />
        <Field name="phone" label={text.phone.label} placeholder={text.phone.placeholder} required />
        {page.quoteFields.map((field) => (
          <Field key={field.name} {...field} />
        ))}

        <div className={cx("mb-7.5", fullRow)}>
          <span className={label}>{text.drawing.label}</span>
          <div className="mt-3 flex items-center gap-5 border border-dashed border-[rgba(238,236,229,0.34)] px-6.5 py-6 upto-900:px-4.5 upto-900:py-5">
            <span className="flex size-11.5 flex-none items-center justify-center rounded-[50%] border border-[rgba(238,236,229,0.3)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="stroke-editorial-on-dark"
                strokeWidth={1.3}
                aria-hidden="true"
              >
                <path d="M9 12V2M5 6l4-4 4 4M2 12v4h14v-4" />
              </svg>
            </span>
            <div>
              <div className="text-19 leading-[1.4]">
                {text.drawing.before}
                <a href={site.whatsapp.href} target="_blank" rel="noopener" className={underlined}>
                  {text.drawing.whatsapp}
                </a>
                {text.drawing.middle}
                <a href={site.email.href} className={underlined}>
                  {text.drawing.email}
                </a>
              </div>
              <div className="mt-1.25 font-editorial-sans text-10 leading-[1.5] tracking-caps text-editorial-on-dark-muted uppercase">
                {text.drawing.note}
              </div>
            </div>
          </div>
        </div>

        {status === "sent" && (
          <p
            role="status"
            className={cx(
              fullRow,
              "mb-3 border border-editorial-accent-on-dark bg-[rgba(220,106,64,0.1)] p-3.5 text-15 leading-[1.6]",
            )}
          >
            {text.success.text}
            <br />
            <small>
              {text.success.before}
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener"
                className="text-editorial-accent-on-dark"
              >
                {text.success.link}
              </a>
              {text.success.after}
            </small>
          </p>
        )}
        {status === "failed" && (
          <p
            role="alert"
            className={cx(
              fullRow,
              "mb-3 border border-danger bg-[rgba(255,50,50,0.1)] p-3.5 text-15 leading-[1.6]",
            )}
          >
            {text.failure.before}
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener"
              className="text-editorial-accent-on-dark"
            >
              {text.failure.whatsapp}
            </a>
            {text.failure.middle}
            <a href={site.email.href} className="text-editorial-accent-on-dark">
              {site.email.label}
            </a>
            {text.failure.after}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className={cx(
            fullRow,
            "mt-3 flex w-full cursor-pointer items-center justify-between border-0 bg-editorial-accent px-7 py-5.5 font-editorial-sans text-12 leading-[1] font-bold tracking-caps-wide text-ink-inverse uppercase hover:bg-editorial-accent-strong disabled:cursor-not-allowed disabled:opacity-70",
          )}
        >
          {status === "sending" ? text.sending : status === "sent" ? text.sent : text.submit}
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            className="stroke-current"
            strokeWidth={1.4}
            aria-hidden="true"
          >
            <path d="M1 6H11M6.5 1.5L11 6L6.5 10.5" />
          </svg>
        </button>
        <p
          className={cx(
            fullRow,
            "mt-3.5 font-editorial-sans text-10 leading-[1.5] tracking-caps text-editorial-on-dark-muted uppercase",
          )}
        >
          {text.fine}
        </p>
      </form>
    </section>
  );
}
