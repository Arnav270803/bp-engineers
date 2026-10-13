import { useRef, useState, type FormEvent } from "react";
import { FormField, fieldControl, fieldSelect, fieldTextarea } from "~/components/ui/FormField";
import { contactForm } from "~/content/contact";
import { site } from "~/content/site";
import { cx } from "~/lib/cx";
import { useFieldsRestoredOnReturn } from "~/lib/form-memory";
import { CONTACT_FIELDS, buildContactPayload, readFields, sendEnquiry } from "~/lib/forms";

const row = "mb-3.5 grid grid-cols-[1fr_1fr] gap-3.5 upto-860:grid-cols-[1fr]";
const control = fieldControl.dark;

const messageBox = "mb-3 rounded-[2px] p-3 text-14 leading-[1.6]";
const messageSuccess = "block border border-brand bg-[rgba(240,125,26,0.1)] text-ink-inverse";
const messageFailure = "block border border-danger bg-[rgba(255,50,50,0.1)] text-ink-inverse";

/**
 * The enquiry form. It behaves exactly as the original does, including two
 * quirks: after a successful submission the button stays disabled and keeps
 * reading "Sending...", and after a failed one it shows the arrow's character
 * code as raw text. See ARCHITECTURE.md, "Kept from the original on purpose".
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  useFieldsRestoredOnReturn(formRef, CONTACT_FIELDS);
  const [buttonLabel, setButtonLabel] = useState(contactForm.submit);
  const [disabled, setDisabled] = useState(false);
  const [outcome, setOutcome] = useState<"success" | "failure" | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setButtonLabel(contactForm.sending);
    setDisabled(true);
    sendEnquiry(buildContactPayload(readFields(form, CONTACT_FIELDS))).then(
      () => {
        setOutcome("success");
        form.reset();
      },
      () => {
        setOutcome("failure");
        setButtonLabel(contactForm.submitAfterFailure);
        setDisabled(false);
      },
    );
  }

  return (
    <div className="bg-surface-inverse p-11 upto-860:px-5.5 upto-860:py-7">
      <div className="mb-2 font-display text-22 font-bold tracking-xs text-ink-inverse uppercase">
        {contactForm.title}
      </div>
      <div className="mb-7 text-14 text-ink-inverse-muted">{contactForm.sub}</div>
      <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
        <div className={row}>
          <FormField tone="dark" label="Your Name">
            <input type="text" name="name" placeholder="Full name" required className={control} />
          </FormField>
          <FormField tone="dark" label="Company / Foundry">
            <input type="text" name="company" placeholder="Company name" className={control} />
          </FormField>
        </div>
        <div className={row}>
          <FormField tone="dark" label="Phone / WhatsApp">
            <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className={control} />
          </FormField>
          <FormField tone="dark" label="Email">
            <input type="email" name="email" placeholder="your@email.com" className={control} />
          </FormField>
        </div>
        <FormField tone="dark" label="Subject">
          <select name="subject" className={cx(control, fieldSelect.dark)}>
            <option value="">{contactForm.subjectPrompt}</option>
            {contactForm.subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </FormField>
        <FormField tone="dark" label="Message">
          <textarea
            name="message"
            placeholder="How can we help you?"
            className={cx(control, fieldTextarea.dark)}
          ></textarea>
        </FormField>
        <div
          id="contactMsg"
          className={cx(
            messageBox,
            outcome === null && "hidden",
            outcome === "success" && messageSuccess,
            outcome === "failure" && messageFailure,
          )}
        >
          {outcome === "success" && (
            <>
              {contactForm.success.text}
              <br />
              <small>
                {contactForm.success.beforeLink}
                <a href={site.whatsapp.href} className="text-brand">
                  {contactForm.success.link}
                </a>
                {contactForm.success.afterLink}
              </small>
            </>
          )}
          {outcome === "failure" && (
            <>
              {contactForm.failure.beforeWhatsapp}
              <a href={site.whatsapp.href} className="text-brand">
                {contactForm.failure.whatsapp}
              </a>
              {contactForm.failure.beforeEmail}
              <a href={site.email.href} className="text-brand">
                {site.email.label}
              </a>
              {contactForm.failure.afterEmail}
            </>
          )}
        </div>
        <button
          type="submit"
          disabled={disabled}
          className="mt-1 w-full cursor-pointer bg-brand p-3.75 font-display text-15 font-semibold tracking-md text-ink-inverse uppercase transition-[background] duration-200 [border:none] hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-70"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}
