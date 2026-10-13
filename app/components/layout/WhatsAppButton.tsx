import { Icon } from "~/components/ui/Icon";
import { site } from "~/content/site";

/** The round WhatsApp button fixed to the bottom corner of every page. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp.href}
      className="fixed right-7 bottom-7 z-999 flex h-14 w-14 items-center justify-center rounded-[50%] bg-whatsapp [box-shadow:0_4px_20px_rgba(37,211,102,0.35)]"
      title="WhatsApp Us"
      target="_blank"
      rel="noopener"
    >
      <Icon name="whatsapp" width="28" height="28" fill="#fff" />
    </a>
  );
}
