import React from 'react';
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = () => {
    const testimonials = [
        {
            company: "Zerlak",
            type: "Software Company",
            rating: 5,
            feedback:
                "KalpTej transformed our office into a biophilic haven. The greenery and acoustic design have boosted both morale and productivity.",
        },
        {
            company: "CoffeeSazz",
            type: "Coffee Shop",
            rating: 4,
            feedback:
                "Our café now feels like a cozy garden retreat. Customers love the vertical planters and natural textures. KalpTej nailed the vibe we were dreaming of.",
        },
        {
            company: "SnowCool",
            type: "Trading Company",
            rating: 5,
            feedback:
                "From layout planning to execution, KalpTej handled everything with precision. Our reception and meeting areas now reflect professionalism with a touch of nature.",
        },
        {
            company: "Z+ Security",
            type: "Software Company",
            rating: 4,
            feedback:
                "We wanted a clean, modern office with subtle greenery — KalpTej delivered exactly that. Their team was responsive, creative, and on time.",
        },
        {
            company: "Charisma",
            type: "Clothing Ecommerce",
            rating: 5,
            feedback:
                "Our studio and warehouse now feel like an extension of our brand — earthy, elegant, and efficient. KalpTej’s design sense is unmatched.",
        },
        {
            company: "GreenNest Living",
            type: "Eco-Home Builder",
            rating: 5,
            feedback:
                "KalpTej brought our sustainable vision to life. Their interior planning and greenery integration made our model flat feel like a forest retreat. Clients are wowed the moment they walk in.",
        }
    ];

    // Group testimonials into pairs
    const groupedTestimonials = [];
    for (let i = 0; i < testimonials.length; i += 2) {
        groupedTestimonials.push(testimonials.slice(i, i + 2));
    }

    return (
        <div className="w-full py-20 bg-white text-center px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Client Testimonials</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base sm:text-lg">
                Hear what our clients say about working with KalpTej.
            </p>

            <Carousel indicators={false} controls={true} interval={1500} className="max-w-6xl mx-auto">
                {groupedTestimonials.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 py-6">
                            {group.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[#F9F6F2] border border-gray-200 rounded-2xl shadow-md p-6 text-left"
                                >
                                    <div className="flex items-center mb-2">
                                        {Array.from({ length: item.rating }).map((_, rIdx) => (
                                            <span key={rIdx} className="text-yellow-400 text-xl">★</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
                                    <div className="text-sm text-gray-900 font-semibold">
                                        {item.company}
                                        <span className="text-gray-500 font-normal"> — {item.type}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default TestimonialCarousel;