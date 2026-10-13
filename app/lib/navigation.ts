// The original site was eight separate documents. This file makes moving
// between pages of the application behave the way loading a document did.
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavigationType, useLocation, useNavigationType } from "react-router";

const withoutTrailingSlash = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);

export type NavSection = "home" | "about" | "products" | "blog" | "contact";

/** The nav link shown as active for an address, as the original marked it. */
export function navSectionFor(pathname: string): NavSection | null {
  const path = withoutTrailingSlash(pathname);
  if (path === "/") return "home";
  if (path === "/about") return "about";
  if (path === "/products") return "products";
  if (path === "/blog" || path.startsWith("/blog/")) return "blog";
  if (path === "/contact") return "contact";
  return null;
}

/** True when a link target is a `#` position on the page being viewed. */
export function staysOnPage(target: string, currentPathname: string): boolean {
  const hashAt = target.indexOf("#");
  if (hashAt === -1) return false;
  const targetPath = target.slice(0, hashAt);
  return targetPath === "" || withoutTrailingSlash(targetPath) === withoutTrailingSlash(currentPathname);
}

/**
 * Counts document loads. The number changes whenever the original site would
 * have loaded a document: on a move to another page, and on a link to the
 * current page that carries no `#` part. It stays the same when only the `#`
 * part of the address changes. Keying the page by this number gives it a
 * fresh start exactly when a real page load would have.
 */
export function usePageInstance(): number {
  const location = useLocation();
  const navigationType = useNavigationType();
  const path = location.pathname + location.search;
  const [seen, setSeen] = useState({ key: location.key, path, instance: 0 });

  if (seen.key !== location.key) {
    // A change that only touches the `#` part is made by the browser itself
    // (see AppLink), and the router reports those as history moves.
    const loadsDocument =
      path !== seen.path || (location.hash === "" && navigationType !== NavigationType.Pop);
    setSeen({ key: location.key, path, instance: seen.instance + (loadsDocument ? 1 : 0) });
  }
  return seen.instance;
}

/**
 * Puts the page where a document load would have put it.
 *
 * - A new page opened by a link appears at the top.
 * - A page reached with back or forward appears where it was left.
 * - Both happen at once. The site sets `scroll-behavior: smooth`, and an
 *   animated scroll here would be a difference from the original.
 * - When only the `#` part of the address changes, nothing is done: the
 *   browser handles that itself, exactly as it did in the original.
 *
 * The router's own scroll restoration is not used, because it scrolls to the
 * top on `#` changes whose target does not exist, and the original does not.
 */
export function useDocumentScrolling(instance: number) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const leftAt = useRef(new Map<string, number>());
  const currentKey = useRef(location.key);
  const shownInstance = useRef(instance);

  // Remember where each history entry is left.
  useEffect(() => {
    const remember = () => leftAt.current.set(currentKey.current, window.scrollY);
    window.addEventListener("scroll", remember, { passive: true });
    return () => window.removeEventListener("scroll", remember);
  }, []);

  useLayoutEffect(() => {
    currentKey.current = location.key;
    if (shownInstance.current === instance) return;
    shownInstance.current = instance;
    const top = navigationType === NavigationType.Pop ? (leftAt.current.get(location.key) ?? 0) : 0;
    window.scrollTo({ top, left: 0, behavior: "instant" });
  }, [instance, location.key, navigationType]);
}
