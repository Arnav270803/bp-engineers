// Text of the About page, copied verbatim from the original.
import type { PageHeroContent } from "~/components/layout/PageHero";
import type { IconName } from "./icons";

export const aboutMeta = {
  title: "About Us — B.P. Engineers | Foundry Equipment Since 1990",
  description:
    "B.P. Engineers has been manufacturing foundry equipment since 1990. Learn about our history, capabilities and commitment to the Indian foundry industry.",
};

export const aboutHero: PageHeroContent = {
  eyebrow: "Est. 1990 · Mubarikpur, Punjab",
  titleBefore: "About ",
  titleAccent: "B.P. Engineers",
  lead: "Three and a half decades of foundry equipment manufacturing — built on craft, precision, and an uncompromising commitment to the Indian foundry industry.",
};

export const profile = {
  eyebrow: "Company Profile · Est. 1990",
  heading: "Built on Three Decades of Trust",
  points: [
    "Specialists in sand casting foundry equipment since 1990",
    "Full sand reclamation units - Knock-out machine,Sand coolers",
    "Complete casting floor equipment — moulding boxes to ladles",
    "Full sand handling systems — conveyors, rollers, hoppers",
    "MS and GI construction — proven foundry-grade materials",
    "Custom sizing and OEM manufacturing on request",
    "Manufacturing facility in Mubarikpur, Punjab",
    "Supplying foundries across India and for export",
  ],
};

export const story = {
  label: "Our Story",
  title: "Foundry Equipment Specialists Since 1990",
  opening: [
    "B.P. Engineers was founded in 1990 with a single purpose — to manufacture reliable, durable foundry equipment for India's sand casting industry. From our facility in Mubarikpur, Punjab, we have spent over three decades perfecting the craft of fabricating the equipment that foundries depend on every day.",
    "What began as a small fabrication shop has grown into a trusted name across Punjab's foundry belt and beyond. Our customers are foundry owners, plant managers, and procurement teams who need equipment that performs in the most demanding industrial conditions — high heat, abrasive sand, constant mechanical stress.",
  ],
  pullquote:
    "Complete foundry equipment — from moulding floor to sand reclamation — engineered and manufactured in Punjab since 1990.",
  closing:
    "Today B.P. Engineers manufactures moulding boxes, pouring ladles, conveyor systems, and the full range of sand handling & reclamation equipment — backed by CNC machining, sheet metal fabrication, and structural welding capabilities under one roof.",
};

export const timeline = {
  label: "Our Journey",
  title: "35+ Years of Growth",
  entries: [
    {
      year: "1990",
      title: "Founded in Chandigarh",
      text: "B.P. Engineers established in Chandigarh. Started with basic foundry fabrication for local casting units.",
    },
    {
      year: "1990s",
      title: "Moulding Box Specialisation",
      text: "Developed expertise in precision moulding box fabrication — became a trusted supplier to Punjab's growing foundry belt.",
    },
    {
      year: "2000s",
      title: "Sand Handling Systems",
      text: "Expanded into conveyor systems and sand handling equipment — offering complete foundry floor solutions.",
    },
    {
      year: "2010s",
      title: "CNC & Precision Machining",
      text: "Added CNC turning and VMC machining capabilities — enabling higher precision components for demanding customers.",
    },
    {
      year: "2024",
      title: "Digital Presence",
      text: "Launched bpfoundry.in — bringing 35 years of expertise to buyers across India and internationally.",
    },
  ],
};

export const capabilities = {
  label: "What We Can Do",
  title: "Manufacturing Capabilities",
  sub: "Everything under one roof — from raw material to finished foundry equipment.",
  items: [
    {
      title: "CNC Machining",
      text: "CNC turning centers and VMC for precision components, jigs, and fixtures to tight tolerances.",
    },
    {
      title: "MIG Welding",
      text: "Heavy structural MIG welding for moulding boxes, ladles, frames, and all fabricated assemblies.",
    },
    { title: "Sheet Metal", text: "Cutting & bending MS sheet for enclosures, guards, and panels." },
    {
      title: "Turning & Lathe",
      text: "Conventional and CNC turning for rollers, shafts, pins, and rotational components.",
    },
    {
      title: "Broaching",
      text: "Broaching machine for keyways, splines, and precision internal profiles.",
    },
    {
      title: "Bandsaw Cutting",
      text: "Precision bandsaw cutting of MS stock for all fabrication requirements.",
    },
  ],
};

export const values: {
  label: string;
  title: string;
  items: Array<{ icon: IconName; title: string; text: string }>;
} = {
  label: "What We Stand For",
  title: "Our Values",
  items: [
    {
      icon: "peak",
      title: "Strength",
      text: "Equipment built to endure the harshest foundry conditions — heavy loads, high heat, abrasive environments.",
    },
    {
      icon: "play",
      title: "Precision",
      text: "Every dimension matters in a moulding box. We machine, weld, and inspect to ensure consistent accuracy.",
    },
    {
      icon: "shield",
      title: "Reliability",
      text: "35 years of on-time delivery and consistent quality — foundries trust us because we never let them down.",
    },
  ],
};
