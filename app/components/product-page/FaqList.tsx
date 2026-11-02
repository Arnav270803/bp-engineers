import { productPageText, type ProductPage } from "~/content/product-pages";

/** Each question beside its answer. All answers are shown; nothing opens or closes. */
export function FaqList({ faqs }: { faqs: ProductPage["faqs"] }) {
  return (
    <div className="mt-11.5 border-t border-t-editorial-ink">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="grid grid-cols-[64px_minmax(0,1fr)_minmax(0,1fr)] gap-x-7.5 border-b border-b-editorial-line pt-6.5 pb-7.5 upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-2.5"
        >
          <span className="pt-1.75 font-editorial-heavy text-10 leading-[12px] tracking-caps-wide text-editorial-accent">
            {`${productPageText.question}${String(index + 1).padStart(2, "0")}`}
          </span>
          <h3 className="text-23 leading-[1.32] font-normal tracking-snug upto-900:text-21">
            {faq.question}
          </h3>
          <p className="pt-0.75 text-17 leading-[1.65] text-editorial-ink-soft">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
