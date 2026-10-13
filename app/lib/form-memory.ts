// When a visitor leaves a page with a half-filled form and comes back with
// Back or Forward, the browser puts back what was typed. The original site got
// this for free, because every page was its own document. Here the page is
// rebuilt on return, so the values are kept per history entry and put back.
import { useLayoutEffect, useRef, type RefObject } from "react";
import { NavigationType, useLocation, useNavigationType } from "react-router";
import { readFields } from "./forms";

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const isFormControl = (node: unknown): node is FormControl =>
  node instanceof HTMLInputElement ||
  node instanceof HTMLSelectElement ||
  node instanceof HTMLTextAreaElement;

/** What each form held when its history entry was left, by entry and form. */
const leftValues = new Map<string, Record<string, string>>();

/**
 * Puts back the values of a form's fields when its page is reached with Back
 * or Forward. A page opened by a link starts with an empty form, as before.
 *
 * `names` must be a constant list, such as CONTACT_FIELDS.
 */
export function useFieldsRestoredOnReturn(form: RefObject<HTMLFormElement | null>, names: readonly string[]) {
  const { key } = useLocation();
  const navigationType = useNavigationType();

  // The history entry this form currently belongs to.
  const entry = useRef(key);
  useLayoutEffect(() => {
    entry.current = key;
  }, [key]);

  useLayoutEffect(() => {
    const element = form.current;
    if (!element) return;

    const left = navigationType === NavigationType.Pop ? leftValues.get(`${key}:${element.id}`) : undefined;
    if (left) {
      for (const name of names) {
        const control = element.elements.namedItem(name);
        if (isFormControl(control) && name in left) control.value = left[name];
      }
    }
    // The element is detached by the time this runs, but it still holds its values.
    return () => {
      leftValues.set(`${entry.current}:${element.id}`, readFields(element, names));
    };
    // Runs when the form appears and when it goes away, and at no other time:
    // values must not be put back again while the visitor is typing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
