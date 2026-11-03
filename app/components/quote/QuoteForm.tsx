import { useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, pillClasses } from "~/components/site/parts";
import { FormField, fieldControl, fieldTextarea } from "~/components/ui/FormField";
import { quoteForm } from "~/content/quote";
import { site } from "~/content/site";
import { cx } from "~/lib/cx";
import { useFieldsRestoredOnReturn } from "~/lib/form-memory";
import { QUOTE_FIELDS, buildQuotePayload, readFields, sendEnquiry } from "~/lib/forms";

const control = fieldControl.light;
const rowOfTwo = "grid grid-cols-[1fr_1fr] gap-x-4 upto-900:grid-cols-[1fr]";
const rowOfThree = "grid grid-cols-[1fr_1fr_1fr] gap-x-4 upto-900:grid-cols-[1fr]";

const messageBox = "max-w-80 px-4 py-3 text-right font-landing-sans text-13 leading-[1.6]";
const messageSuccess = "block border border-landing-action bg-[rgba(227,153,80,0.12)] text-landing-ink";
const messageFailure = "block border border-danger bg-[rgba(255,85,85,0.08)] text-landing-ink";

function FormSection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <div className="mb-10 border-b border-b-landing-line pb-8 last:mb-0 last:border-b-0 last:pb-0">
      <div className="mb-7 flex items-baseline gap-4">
        <span className="font-landing-sans text-9 leading-[1] text-landing-ink-muted">{number}</span>
        <h2 className="font-landing-serif text-26 leading-[1.15] font-normal tracking-[-0.015em]">{title}</h2>
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
      <div className="bg-landing-surface-light px-12 pt-11 pb-10 upto-900:px-5.5 upto-900:pt-8 upto-900:pb-7">
        <form id="quoteForm" ref={formRef}>
          <FormSection number="01" title={quoteForm.sections.details}>
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

          <FormSection number="02" title={quoteForm.sections.requirements}>
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

          <FormSection number="03" title={quoteForm.sections.additional}>
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

      <div className="flex flex-wrap items-center justify-between gap-5 bg-landing-surface-stone px-12 py-7 upto-900:p-5.5">
        <div className="max-w-80 font-landing-sans text-13 leading-[1.6] text-landing-ink-muted">
          <strong className="text-landing-ink">{quoteForm.noteLead}</strong>
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
                  <a href={site.whatsapp.href} className="text-landing-emphasis-warm">
                    {quoteForm.success.link}
                  </a>
                  {quoteForm.success.afterLink}
                </small>
              </>
            )}
            {outcome === "failure" && (
              <>
                {quoteForm.failure.beforeWhatsapp}
                <a href={site.whatsapp.href} className="text-landing-emphasis-warm">
                  {quoteForm.failure.whatsapp}
                </a>
                {quoteForm.failure.beforeEmail}
                <a href={site.email.href} className="text-landing-emphasis-warm">
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
            className={pillClasses(
              "action",
              "cursor-pointer border-0 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-70",
            )}
          >
            <span>{buttonLabel}</span>
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}
