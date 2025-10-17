import React, { useState, useEffect } from 'react';
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
      "We specialize in crafting bespoke spaces that reflect your personality and elevate your lifestyle..."
  },
  {
    title: "End-to-End Project Management",
    description:
      "From concept to completion, we handle every detail—design, sourcing, execution—with precision..."
  },
  {
    title: "Premium Material Selection",
    description:
      "Only the finest woods, fabrics, stones, and finishes—curated for timeless elegance and durability..."
  },
  {
    title: "Space Optimization & Layout Planning",
    description:
      "Intelligent design that maximizes functionality without compromising aesthetics..."
  },
  {
    title: "Color & Texture Harmony",
    description:
      "Expert palette coordination to create mood, depth, and visual flow throughout your space..."
  },
  {
    title: "Custom Furniture & Décor",
    description:
      "Handcrafted pieces tailored to your space, style, and comfort preferences..."
  },
  {
    title: "Lighting Design Expertise",
    description:
      "Ambient, task, and accent lighting layered to enhance mood and highlight architectural features..."
  },
  {
    title: "On-Site Execution by Skilled Craftsmen",
    description:
      "Our team of vetted professionals ensures flawless installation and finishing..."
  },
  {
    title: "Residential & Commercial Expertise",
    description:
      "Whether it’s a villa, apartment, or office—we bring sophistication to every square foot..."
  },
  {
    title: "3D Visualization & Virtual Walkthroughs",
    description:
      "See your dream space before it’s built with immersive design previews..."
  }
];

const ServiceAccordion = () => {
  const [activeKey, setActiveKey] = useState('section-0');

  const handleToggle = (key) => {
    const newKey = activeKey === key ? null : key;
    setActiveKey(newKey);

    if (newKey) {
      setTimeout(() => {
        const element = document.querySelector(`[data-key="${newKey}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const firstElement = document.querySelector(`[data-key="section-0"]`);
    if (firstElement) {
      firstElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Accordion activeKey={activeKey} className="w-full max-w-4xl">
        {[...tableSections, ...servicesData].map((section, index) => {
          const isTable = index < tableSections.length;
          const key = `section-${index}`;
          return (
            <div data-key={key} key={key}>
              <Accordion.Item
                eventKey={key}
                className="rounded-xl overflow-hidden shadow-md mb-4 border border-gray-200"
              >
                <Accordion.Header onClick={() => handleToggle(key)}>
                  <span className="text-lg font-semibold text-[#7B5E42] hover:text-[#A67C52] transition duration-300">
                    {section.title}
                  </span>
                </Accordion.Header>
                <Accordion.Body className="bg-[#F9F6F2] text-[#4B3B2A] px-4 py-3">
                  {isTable ? (
                    <DataTable {...section.data} />
                  ) : (
                    <p className="text-base leading-relaxed">{section.description}</p>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ServiceAccordion;