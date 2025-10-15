import React, { useState } from 'react';
import img from "../assets/services.png";

const serviceCards = [
  {
    title: "Tailored Luxury Interiors",
    description: "We specialize in crafting bespoke spaces that reflect your personality and elevate your lifestyle. From initial concept to final styling, our designs are curated to embody elegance, comfort, and individuality—whether it's a serene bedroom retreat or a statement-making living room."
  },
  {
    title: "End-to-End Project Management",
    description: "From concept to completion, we handle every detail—design, sourcing, execution—with precision. Our dedicated team coordinates timelines, budgets, and vendor relationships to ensure a seamless experience and flawless delivery of your dream space."
  },
  {
    title: "Premium Material Selection",
    description: "Only the finest woods, fabrics, stones, and finishes—curated for timeless elegance and durability. We source globally and locally to offer materials that elevate the aesthetic and longevity of your interiors, ensuring every surface tells a story of quality."
  },
  {
    title: "Space Optimization & Layout Planning",
    description: "Intelligent design that maximizes functionality without compromising aesthetics. We analyze flow, lighting, and usage to create layouts that feel spacious, intuitive, and tailored to your lifestyle—whether it's a compact apartment or a sprawling villa."
  },
  {
    title: "Color & Texture Harmony",
    description: "Expert palette coordination to create mood, depth, and visual flow throughout your space. We blend tones, textures, and finishes to evoke emotion and balance, ensuring each room transitions beautifully into the next."
  },
  {
    title: "Custom Furniture & Décor",
    description: "Handcrafted pieces tailored to your space, style, and comfort preferences. From bespoke sofas to artisanal lighting, we design and commission furniture that fits perfectly and adds character to your interiors."
  },
  {
    title: "Lighting Design Expertise",
    description: "Ambient, task, and accent lighting layered to enhance mood and highlight architectural features. We design lighting schemes that transform spaces—making them warm, dramatic, or serene—while ensuring energy efficiency and control."
  },
  {
    title: "On-Site Execution by Skilled Craftsmen",
    description: "Our team of vetted professionals ensures flawless installation and finishing. With attention to detail and respect for your space, our craftsmen bring designs to life with precision, care, and artistry."
  },
  {
    title: "Residential & Commercial Expertise",
    description: "Whether it’s a villa, apartment, or office—we bring sophistication to every square foot. Our portfolio spans luxury homes, boutique hotels, and corporate spaces, each tailored to reflect brand identity and personal taste."
  },
  {
    title: "3D Visualization & Virtual Walkthroughs",
    description: "See your dream space before it’s built with immersive design previews. Our advanced 3D renderings and virtual tours allow you to explore layouts, finishes, and lighting in real time—making decisions with confidence and clarity."
  }
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center mt-10 mb-20'>
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
              <p className={`text-sm sm:text-base md:text-lg text-gray-600 ${isExpanded ? '' : 'line-clamp-3'} sm:line-clamp-none`}>
                {card.description}
              </p>
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

       <span className='h-[1px] w-[75%] bg-black mt-32'></span>
    </div>
  );
};

export default Services;