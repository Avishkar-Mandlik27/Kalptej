import React, { useState } from 'react';
import img from "../assets/services.png";
import ServiceAccordion from './ServiceAccordion';
import WelcomePopup from './WelcomePopup';

export const serviceCards = [
  {
    title: "Interior Design & Renovation",
    items: [
      "Complete home interiors (2BHK / 3BHK / Villas)",
      "Modular kitchens (matte finish, handleless design)",
      "False ceiling, lighting, and smart storage",
      "Material selection & on-site supervision",
      "3D design & BOQ support"
    ],
    price: "₹1,700 – ₹2,200 per sq.ft (Pune Market Average)"
  },
  {
    title: "Greenery & Biophilic Design",
    items: [
      "Indoor plants, planters & layout planning",
      "Vertical gardens (residential / commercial)",
      "Balcony, terrace & courtyard green design",
      "Self-watering and drip irrigation systems",
      "Maintenance contracts available"
    ],
    price: [
      "Indoor setup: ₹300 – ₹800 per sq.ft",
      "Vertical garden: ₹1,200 – ₹2,000 per sq.ft"
    ]
  },
  {
    title: "Commercial Interiors",
    items: [
      "Office design with acoustic panels & greenery",
      "Cafés, hotels & resort landscaping",
      "Biophilic corporate design (living walls, planters)",
      "Custom partitions & green branding"
    ],
    price: "₹1,800 – ₹2,500 per sq.ft"
  },
  {
    title: "Landscaping & Outdoor Solutions",
    items: [
      "Villa, farmhouse, and resort landscaping",
      "Hardscape + softscape design",
      "Outdoor lighting & irrigation setup",
      "Tree and plant selection based on soil & sunlight",
      "Pathway, lawn & seating design"
    ],
    price: "₹1,000 – ₹1,800 per sq.ft"
  },
  {
    title: "Turnkey Execution",
    items: [
      "Design + Material + Labour + Supervision",
      "Single point contact — from concept to completion",
      "Civil, electrical, plumbing, carpentry, and finishing",
      "Transparent costing with progress tracking"
    ],
    price: "₹5–₹35 Lakhs depending on scope & area"
  },
  {
    title: "Maintenance & AMC Packages",
    items: [
      "Plant care (watering, pruning, fertilizer)",
      "Vertical garden inspection",
      "Light and irrigation system checks",
      "Monthly / Quarterly / Annual maintenance options"
    ]
  }
];

const maintenancePlans = {
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
};

const packagePlans = {
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
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center mt-10 mb-20'>
      
      <WelcomePopup/>

      {/* Hero Section */}
      <div className="w-full h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] relative rounded-b-2xl border-[2px] overflow-hidden">
        <img
          src={img}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="About Us Background"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-20 md:px-28 lg:px-32 xl:px-40 pt-52">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent drop-shadow-lg leading-tight">
            Services
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className='w-full max-w-[1600px] grid grid-cols-2 gap-x-4 gap-y-16 px-4 sm:px-6 md:px-12 lg:px-20 mt-16'>
        {serviceCards.map((card, index) => {
          const isExpanded = expandedIndex === index;
          const priceText = Array.isArray(card.price)
            ? card.price.join(', ')
            : card.price || 'Price on request';

          return (
            <div
              key={index}
              className='flex flex-col w-full sm:w-[90%] md:w-[95%] lg:w-[100%] xl:w-[100%] mx-auto bg-white border border-gray-200 rounded-xl p-4 md:p-6 lg:p-8 transition-all duration-300'
            >
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-amber-500 brightness-75 mb-2 group cursor-pointer">
                <span className="relative inline-block">
                  {card.title}
                  <span className="block h-[2px] bg-amber-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
                </span>
              </h2>

              <ul className={`text-sm sm:text-base md:text-lg text-gray-600 list-disc pl-4 ${isExpanded ? '' : 'line-clamp-3'} sm:line-clamp-none`}>
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {card.price && (
                <p className="mt-4 text-sm sm:text-base text-gray-700 font-medium">
                  <span className="text-green-700">Pricing:</span> {priceText}
                </p>
              )}

              <div className="sm:hidden">
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-2 text-xs text-green-700 hover:underline focus:outline-none"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>


      {/* Accordion Section */}
      <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-32"> 
        <ServiceAccordion />
      </div>

      <span className='h-[1px] w-[75%] bg-black mt-32'></span>
    </div>
  );
};

export default Services;



