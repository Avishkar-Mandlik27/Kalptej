import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import DataTable from './DataTable';

const tableSections = [
  {
    title: "Maintenance Plan Comparison",
    data: {
      title: "Maintenance Plan Comparison",
      columns: ["Plan", "Frequency", "Price (₹/month)", "Description"],
      rows: [
        {
          "Plan": "Basic",
          "Frequency": "Once a month",
          "Price (₹/month)": "₹999",
          "Description": "Basic plant care & trimming"
        },
        {
          "Plan": "Standard",
          "Frequency": "Twice a month",
          "Price (₹/month)": "₹1,999",
          "Description": "Watering, fertilizing & replacements"
        },
        {
          "Plan": "Premium",
          "Frequency": "Weekly",
          "Price (₹/month)": "₹3,999",
          "Description": "Full care + replacements + inspection report"
        }
      ]
    }
  },
  {
    title: "Green Package Comparison",
    data: {
      title: "Green Package Comparison",
      columns: ["Package", "Ideal For", "Scope", "Approx. Cost"],
      rows: [
        {
          "Package": "Essential Plan",
          "Ideal For": "1BHK / Compact spaces",
          "Scope": "Design consultation + BOQ + Layout + Plant setup",
          "Approx. Cost": "₹45,000 – ₹75,000"
        },
        {
          "Package": "Smart Green Plan",
          "Ideal For": "2BHK / Small Office",
          "Scope": "3D design + Material selection + Execution + Vertical garden",
          "Approx. Cost": "₹1.2 – ₹1.8 Lakhs"
        },
        {
          "Package": "Luxury Nature Plan",
          "Ideal For": "3BHK / Villas / Resorts",
          "Scope": "Turnkey interiors + Greenery + Maintenance contract",
          "Approx. Cost": "₹4 – ₹10 Lakhs"
        },
        {
          "Package": "Corporate Plan",
          "Ideal For": "Offices, Cafés, Hotels",
          "Scope": "Custom design + Branding + Acoustic & Green walls",
          "Approx. Cost": "₹1,800 – ₹2,500 per sq.ft"
        }
      ],
      note: "All prices include Pune labour & transportation rates (2025), GST extra."
    }
  }
];

const servicesData = [
  {
    title: "Tailored Luxury Interiors",
    description:
      "We specialize in crafting bespoke spaces that reflect your personality and elevate your lifestyle. From initial concept to final styling, our designs are curated to embody elegance, comfort, and individuality—whether it's a serene bedroom retreat or a statement-making living room.",
  },
  {
    title: "End-to-End Project Management",
    description:
      "From concept to completion, we handle every detail—design, sourcing, execution—with precision. Our dedicated team coordinates timelines, budgets, and vendor relationships to ensure a seamless experience and flawless delivery of your dream space.",
  },
  {
    title: "Premium Material Selection",
    description:
      "Only the finest woods, fabrics, stones, and finishes—curated for timeless elegance and durability. We source globally and locally to offer materials that elevate the aesthetic and longevity of your interiors, ensuring every surface tells a story of quality.",
  },
  {
    title: "Space Optimization & Layout Planning",
    description:
      "Intelligent design that maximizes functionality without compromising aesthetics. We analyze flow, lighting, and usage to create layouts that feel spacious, intuitive, and tailored to your lifestyle—whether it's a compact apartment or a sprawling villa.",
  },
  {
    title: "Color & Texture Harmony",
    description:
      "Expert palette coordination to create mood, depth, and visual flow throughout your space. We blend tones, textures, and finishes to evoke emotion and balance, ensuring each room transitions beautifully into the next.",
  },
  {
    title: "Custom Furniture & Décor",
    description:
      "Handcrafted pieces tailored to your space, style, and comfort preferences. From bespoke sofas to artisanal lighting, we design and commission furniture that fits perfectly and adds character to your interiors.",
  },
  {
    title: "Lighting Design Expertise",
    description:
      "Ambient, task, and accent lighting layered to enhance mood and highlight architectural features. We design lighting schemes that transform spaces—making them warm, dramatic, or serene—while ensuring energy efficiency and control.",
  },
  {
    title: "On-Site Execution by Skilled Craftsmen",
    description:
      "Our team of vetted professionals ensures flawless installation and finishing. With attention to detail and respect for your space, our craftsmen bring designs to life with precision, care, and artistry.",
  },
  {
    title: "Residential & Commercial Expertise",
    description:
      "Whether it’s a villa, apartment, or office—we bring sophistication to every square foot. Our portfolio spans luxury homes, boutique hotels, and corporate spaces, each tailored to reflect brand identity and personal taste.",
  },
  {
    title: "3D Visualization & Virtual Walkthroughs",
    description:
      "See your dream space before it’s built with immersive design previews. Our advanced 3D renderings and virtual tours allow you to explore layouts, finishes, and lighting in real time—making decisions with confidence and clarity.",
  },
];

const ServiceAccordion = () => {
  return (
    <Accordion defaultActiveKey="table-0" alwaysOpen className="w-full">
      {/* Table Sections First */}
      {tableSections.map((section, index) => (
        <Accordion.Item
          eventKey={`table-${index}`}
          key={`table-${index}`}
          className="rounded-xl overflow-hidden shadow-md mb-4 border border-gray-200"
        >
          <Accordion.Header>
            <span className="text-lg font-semibold text-[#7B5E42] hover:text-[#A67C52] transition duration-300">
              {section.title}
            </span>
          </Accordion.Header>
          <Accordion.Body className="bg-[#F9F6F2] text-[#4B3B2A] px-4 py-3">
            <DataTable {...section.data} />
          </Accordion.Body>
        </Accordion.Item>
      ))}

      {/* Service Descriptions Below */}
      {servicesData.map((section, index) => (
        <Accordion.Item
          eventKey={`desc-${index}`}
          key={`desc-${index}`}
          className="rounded-xl overflow-hidden shadow-md mb-4 border border-gray-200"
        >
          <Accordion.Header>
            <span className="text-lg font-semibold text-[#7B5E42] hover:text-[#A67C52] transition duration-300">
              {section.title}
            </span>
          </Accordion.Header>
          <Accordion.Body className="bg-[#F9F6F2] text-[#4B3B2A] px-4 py-3">
            <p className="text-base leading-relaxed">{section.description}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ServiceAccordion;