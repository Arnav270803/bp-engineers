import { AppLink } from "~/components/ui/AppLink";
import { Icon } from "~/components/ui/Icon";
import { footerCompanyLinks, footerCopyright, footerIntro, footerProductLinks } from "~/content/navigation";
import { site } from "~/content/site";

const columnHeading = "mb-4 font-display text-13 font-semibold tracking-sm text-ink-inverse uppercase";
const columnText = "mb-2.5 block text-13 leading-[1.6] text-ink-muted transition-[color] duration-200";
const columnLink = `${columnText} hover:text-brand`;
const socialLink =
  "flex h-8.5 w-8.5 items-center justify-center bg-[rgba(255,255,255,0.06)] transition-[background] duration-200 hover:bg-brand";
const socialIcon = "h-3.75 w-3.75 fill-ink-inverse-muted";

export function Footer() {
  return (
    <footer className="bg-surface-deep px-gutter pt-12 pb-7">
      <div className="mb-10 grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 border-b border-b-[rgba(255,255,255,0.08)] pb-10 upto-900:grid-cols-[1fr_1fr] upto-600:grid-cols-[1fr]">
        <div>
          <div className="mb-3 font-display text-20 leading-[1.1] font-bold tracking-xs text-ink-inverse">
            {site.name}
          </div>
          <p className="mb-5 max-w-70 text-13 leading-[1.8] text-ink-muted">{footerIntro}</p>
          <div className="flex gap-2.5">
            <a href={site.whatsapp.href} target="_blank" title="WhatsApp" className={socialLink}>
              <Icon name="whatsapp" className={socialIcon} />
            </a>
            <a href={site.email.href} title="Email" className={socialLink}>
              <Icon name="mail" className={socialIcon} />
            </a>
          </div>
        </div>
        <div>
          <h4 className={columnHeading}>Products</h4>
          {footerProductLinks.map((link) => (
            <AppLink key={link.label} to={link.to} className={columnLink}>
              {link.label}
            </AppLink>
          ))}
        </div>
        <div>
          <h4 className={columnHeading}>Company</h4>
          {footerCompanyLinks.map((link) => (
            <AppLink key={link.label} to={link.to} className={columnLink}>
              {link.label}
            </AppLink>
          ))}
        </div>
        <div>
          <h4 className={columnHeading}>Contact</h4>
          <p className={columnText}>
            {site.address.street}
            <br />
            {site.address.region}
          </p>
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href} className={columnLink}>
              {phone.label}
            </a>
          ))}
          <a href={site.email.href} className={columnLink}>
            {site.email.label}
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 upto-600:flex-col upto-600:items-start">
        <div className="text-12 text-ink-muted">{footerCopyright}</div>
        <div className="text-12 tracking-xs text-brand">{site.domain}</div>
      </div>
    </footer>
  );
}
