import { AppLink } from "~/components/ui/AppLink";
import { footerCompanyLinks, footerCopyright, footerIntro } from "~/content/navigation";
import { productPageHref, productPageText, productPages, type ProductPage } from "~/content/product-pages";
import { site } from "~/content/site";
import { cx } from "~/lib/cx";
import { EditorialLogo } from "./EditorialLogo";

const heading =
  "mb-4 font-editorial-heavy text-10 leading-[12px] font-normal tracking-caps-wider text-editorial-on-dark-muted uppercase";
const link = "block text-16 leading-[2] text-editorial-on-dark-soft hover:text-editorial-on-dark";
const rule = "border-[rgba(238,236,229,0.15)]";

/** The footer of the product pages: the company's tagline, links to every product page, and contact details. */
export function ProductPageFooter({ current }: { current: ProductPage }) {
  const words = site.tagline.split(" · ");
  const accent = `${words.pop()}.`;
  const lead = `${words.join(" · ")} · `;
  const text = productPageText.footer;

  return (
    <footer className="bg-editorial-dark px-editorial-gutter pt-23 pb-9 text-editorial-on-dark upto-900:px-5 upto-900:pt-16 upto-900:pb-8">
      <p className="text-editorial-sign leading-[1] tracking-display">
        {lead}
        <em className="text-editorial-accent-on-dark">{accent}</em>
      </p>
      <div
        className={`mt-19 grid grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-x-12 border-t pt-10.5 upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-9 ${rule}`}
      >
        <div>
          <AppLink to="/" aria-label={productPageText.homeLink} className="inline-block">
            <EditorialLogo tone="dark" />
          </AppLink>
          <p className="mt-6 max-w-90 text-15 leading-[1.7] text-editorial-on-dark-soft">{footerIntro}</p>
        </div>
        <div>
          <h4 className={heading}>{text.products}</h4>
          {productPages.map((page) => (
            <AppLink
              key={page.slug}
              to={productPageHref(page)}
              className={cx(link, page.slug === current.slug && "text-editorial-accent-on-dark")}
            >
              {page.shortName}
            </AppLink>
          ))}
          <AppLink to="/products" className={link}>
            {`${productPageText.allProducts} →`}
          </AppLink>
        </div>
        <div>
          <h4 className={heading}>{text.company}</h4>
          {footerCompanyLinks.map((item) => (
            <AppLink key={item.label} to={item.to} className={link}>
              {item.label}
            </AppLink>
          ))}
        </div>
        <div>
          <h4 className={heading}>{text.contact}</h4>
          <p className="text-16 leading-[2] text-editorial-on-dark-soft">
            {site.address.street}
            <br />
            {site.address.region}
          </p>
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className={link}>
              {phone.label}
            </a>
          ))}
          <a href={site.email.href} className={link}>
            {site.email.label}
          </a>
        </div>
      </div>
      <div
        className={`mt-16 flex justify-between gap-6 border-t pt-6 font-editorial-sans text-10 leading-[1.5] tracking-caps text-editorial-on-dark-muted uppercase upto-900:flex-col upto-900:gap-2.5 ${rule}`}
      >
        <span>{footerCopyright}</span>
        <span>{`${site.domain}${productPageHref(current)}`}</span>
      </div>
    </footer>
  );
}
