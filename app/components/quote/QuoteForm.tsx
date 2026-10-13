import { useRef, useState, type ReactNode } from "react";
import { FormField, fieldControl, fieldTextarea } from "~/components/ui/FormField";
import { quoteForm } from "~/content/quote";
import { site } from "~/content/site";
import { cx } from "~/lib/cx";
import { useFieldsRestoredOnReturn } from "~/lib/form-memory";
import { QUOTE_FIELDS, buildQuotePayload, readFields, sendEnquiry } from "~/lib/forms";

const control = fieldControl.light;
const rowOfTwo = "grid grid-cols-[1fr_1fr] gap-4 upto-900:grid-cols-[1fr]";
const rowOfThree = "grid grid-cols-[1fr_1fr_1fr] gap-4 upto-900:grid-cols-[1fr]";

const messageBox = "max-w-80 rounded-[2px] px-4 py-2.5 text-right text-13 leading-[1.6]";
const messageSuccess = "block border border-brand bg-[rgba(240,125,26,0.1)] text-ink-strong";
const messageFailure = "block border border-danger bg-[rgba(255,50,50,0.08)] text-ink-strong";

function FormSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-9 border-b border-b-line pb-9 last:mb-0 last:pb-0 last:[border-bottom:none]">
      <div className="mb-5 flex items-center gap-2.5 font-display text-16 font-bold tracking-xs text-ink-strong uppercase before:h-4.5 before:w-0.75 before:bg-brand before:content-['']">
        {title}
      </div>
      {children}
    </div>
  );
}

function Options({ prompt, values }: { prompt: string; values: string[] }) {
  return (
    <>
      <option value="">{prompt}</option>
      {values.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </>
  );
}

/**
 * The quote form and its submit bar. It behaves exactly as the original does:
 * the button sits outside the form, so pressing Enter in a field does nothing,
 * and after a failed submission the button shows the arrow's character code as
 * raw text (ARCHITECTURE.md, "Kept from the original on purpose").
 */
export function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  useFieldsRestoredOnReturn(formRef, QUOTE_FIELDS);
  const [buttonLabel, setButtonLabel] = useState(quoteForm.submit);
  const [disabled, setDisabled] = useState(false);
  const [outcome, setOutcome] = useState<"success" | "failure" | null>(null);

  function handleSubmit() {
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setButtonLabel(quoteForm.sending);
    setDisabled(true);
    sendEnquiry(buildQuotePayload(readFields(form, QUOTE_FIELDS))).then(
      () => {
        setOutcome("success");
        form.reset();
        setButtonLabel(quoteForm.submitted);
      },
      () => {
        setOutcome("failure");
        setButtonLabel(quoteForm.submitAfterFailure);
        setDisabled(false);
      },
    );
  }

  return (
    <div>
      <div className="border-[0.5px] border-line bg-surface p-12 upto-900:px-5.5 upto-900:py-7">
        <form id="quoteForm" ref={formRef}>
          <FormSection title={quoteForm.sections.details}>
            <div className={rowOfTwo}>
              <FormField tone="light" label="Full Name *">
                <input type="text" name="name" placeholder="Your full name" required className={control} />
              </FormField>
              <FormField tone="light" label="Company / Foundry">
                <input type="text" name="company" placeholder="Company or foundry name" className={control} />
              </FormField>
            </div>
            <div className={rowOfTwo}>
              <FormField tone="light" label="Phone / WhatsApp *">
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className={control} />
              </FormField>
              <FormField tone="light" label="Email">
                <input type="email" name="email" placeholder="your@email.com" className={control} />
              </FormField>
            </div>
            <div className={rowOfTwo}>
              <FormField tone="light" label="City / State">
                <input type="text" name="city" placeholder="e.g. Ludhiana, Punjab" className={control} />
              </FormField>
              <FormField tone="light" label="Country">
                <input
                  type="text"
                  name="country"
                  placeholder="India"
                  defaultValue="India"
                  className={control}
                />
              </FormField>
            </div>
          </FormSection>

          <FormSection title={quoteForm.sections.requirements}>
            <div className={rowOfTwo}>
              <FormField tone="light" label="Product Category *">
                <select name="product_category" required className={control}>
                  <Options prompt={quoteForm.categoryPrompt} values={quoteForm.categories} />
                </select>
              </FormField>
              <FormField tone="light" label="Material">
                <select name="material" className={control}>
                  <Options prompt={quoteForm.materialPrompt} values={quoteForm.materials} />
                </select>
              </FormField>
            </div>
            <div className={rowOfThree}>
              <FormField tone="light" label="Length / L (mm)">
                <input type="text" name="length" placeholder="e.g. 600" className={control} />
              </FormField>
              <FormField tone="light" label="Width / W (mm)">
                <input type="text" name="width" placeholder="e.g. 400" className={control} />
              </FormField>
              <FormField tone="light" label="Height / H (mm)">
                <input type="text" name="height" placeholder="e.g. 150" className={control} />
              </FormField>
            </div>
            <div className={rowOfTwo}>
              <FormField tone="light" label="Quantity Required">
                <input type="text" name="quantity" placeholder="e.g. 10 pieces" className={control} />
              </FormField>
              <FormField tone="light" label="Delivery Timeline">
                <select name="delivery" className={control}>
                  <Options prompt={quoteForm.timelinePrompt} values={quoteForm.timelines} />
                </select>
              </FormField>
            </div>
          </FormSection>

          <FormSection title={quoteForm.sections.additional}>
            <FormField tone="light" label="Specifications & Requirements">
              <textarea
                name="specifications"
                placeholder={quoteForm.specificationsPlaceholder}
                className={cx(control, fieldTextarea.light)}
              ></textarea>
            </FormField>
            <FormField tone="light" label="How Did You Find Us?">
              <select name="source" className={control}>
                <Options prompt={quoteForm.sourcePrompt} values={quoteForm.sources} />
              </select>
            </FormField>
          </FormSection>
        </form>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-5 bg-surface-muted px-12 py-7 upto-900:p-5.5">
        <div className="max-w-80 text-13 leading-[1.6] text-ink-muted">
          <strong className="text-ink-strong">{quoteForm.noteLead}</strong>
          {quoteForm.noteRest}
        </div>
        <div className="flex flex-col items-end gap-2.5">
          <div
            id="quoteMsg"
            className={cx(
              messageBox,
              outcome === null && "hidden",
              outcome === "success" && messageSuccess,
              outcome === "failure" && messageFailure,
            )}
          >
            {outcome === "success" && (
              <>
                {quoteForm.success.mark}
                <strong>{quoteForm.success.heading}</strong>
                <br />
                {quoteForm.success.text}
                <br />
                <small>
                  {quoteForm.success.beforeLink}
                  <a href={site.whatsapp.href} className="text-brand">
                    {quoteForm.success.link}
                  </a>
                  {quoteForm.success.afterLink}
                </small>
              </>
            )}
            {outcome === "failure" && (
              <>
                {quoteForm.failure.beforeWhatsapp}
                <a href={site.whatsapp.href} className="text-brand">
                  {quoteForm.failure.whatsapp}
                </a>
                {quoteForm.failure.beforeEmail}
                <a href={site.email.href} className="text-brand">
                  {site.email.label}
                </a>
                {quoteForm.failure.afterEmail}
              </>
            )}
          </div>
          <button
            type="button"
            id="quoteSubmitBtn"
            disabled={disabled}
            onClick={handleSubmit}
            className="cursor-pointer bg-brand px-12 py-4 font-display text-16 font-bold tracking-md whitespace-nowrap text-ink-inverse uppercase transition-[background] duration-200 [border:none] hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-70"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
