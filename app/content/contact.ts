// Text of the contact page. The words are the original's; titles and labels
// are in sentence case, as the site's design writes them.
import type { PageHeroContent } from "~/components/site/PageHero";
import type { SectionTitle } from "./titles";

export const contactMeta = {
  title: "Contact — B.P. Engineers | Foundry Equipment Manufacturer Punjab",
  description:
    "Contact B.P. Engineers for foundry equipment enquiries. Phone, WhatsApp, email and address — Mubarikpur, Ramgarh Road, Punjab, India.",
};

export const contactHero: PageHeroContent = {
  eyebrow: "Mubarikpur, Punjab, India",
  titleBefore: "Contact ",
  titleAccent: "us",
  lead: "Reach us by phone, WhatsApp, or email. We respond to all enquiries within 24 hours on working days.",
};

export const contactIntro = {
  label: "Get in touch",
  title: { lines: ["We’re here"], accent: "to help." } satisfies SectionTitle,
  text: "Whether you need a standard moulding box or a complete custom sand handling system — talk to us. We'll respond with the right solution and a competitive quote.",
};

export const contactDetailLabels = {
  phone: "Phone",
  whatsapp: "WhatsApp",
  whatsappSuffix: " — Chat Now",
  email: "Email",
  address: "Address",
};

export const contactMap = {
  text: "Mubarikpur, Ramgarh Road, Punjab",
  linkLabel: "Open in Google Maps",
};

export const contactForm = {
  title: "Send an enquiry",
  sub: "We respond within 24 hours on working days.",
  subjectPrompt: "Select a topic",
  subjects: [
    "Product Enquiry",
    "Request a Quote",
    "Custom / OEM Manufacturing",
    "Existing Order",
    "General Enquiry",
  ],
  submit: "Send message",
  sending: "Sending...",
  // Each message is written in parts around its links. A part must stay one
  // piece of text: splitting it changes how the browser spaces the letters.
  success: {
    text: "✓ Message sent! We will get back to you within 24 hours.",
    beforeLink: "Or reach us on ",
    link: "WhatsApp",
    afterLink: ".",
  },
  failure: {
    beforeWhatsapp: "Submission failed. ",
    whatsapp: "WhatsApp us",
    beforeEmail: " or email ",
    afterEmail: ".",
  },
  // The original shows the arrow's character code as raw text after a failed
  // submission. Reproduced on purpose: see Q6 in ARCHITECTURE.md.
  submitAfterFailure: "Send Message &#8594;",
};
