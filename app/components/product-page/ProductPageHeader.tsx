import { AppLink } from "~/components/ui/AppLink";
import { productPageText } from "~/content/product-pages";
import { EditorialLogo } from "./EditorialLogo";

/** The product pages have no nav bar: only the logo, which leads to the home page. */
export function ProductPageHeader() {
  return (
    <header className="flex h-21 items-center border-b border-b-editorial-line px-[57px] upto-900:h-16 upto-900:px-5">
      <AppLink to="/" aria-label={productPageText.homeLink}>
        <EditorialLogo />
      </AppLink>
    </header>
  );
}
