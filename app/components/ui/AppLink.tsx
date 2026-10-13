import { Link, useLocation, type LinkProps } from "react-router";
import { staysOnPage } from "~/lib/navigation";

interface AppLinkProps extends Omit<LinkProps, "to" | "reloadDocument"> {
  to: string;
}

/**
 * A link to a page of this site. A link to a `#` position on the page being
 * viewed is left to the browser, as it was in the original.
 */
export function AppLink({ to, ...rest }: AppLinkProps) {
  const { pathname } = useLocation();
  return <Link to={to} reloadDocument={staysOnPage(to, pathname)} {...rest} />;
}
