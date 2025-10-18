import React, { useState } from "react";

const Question = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How does solar energy work?",
            answer:
                "Solar panels absorb sunlight using photovoltaic (PV) cells, which convert it into direct current (DC) electricity. An inverter then transforms that into alternating current (AC), which powers your home or business.",
        },
        {
            question: "Will solar panels reduce my energy bills?",
            answer:
                "Yes! By generating your own power, you buy less electricity from the grid, which reduces your bills.",
        },
        {
            question: "Is my home suitable for solar panels?",
            answer:
                "Homes with open roof space, good sunlight, and minimal shade are usually great for solar panels.",
        },
        {
            question: "What’s the lifespan of a solar system?",
            answer:
                "Most solar panels last around 25–30 years. The inverter might need replacement after 10–15 years.",
        },
        {
            question: "Do solar panels work on cloudy days?",
            answer:
                "Yes, they still produce electricity—just less than on bright sunny days.",
        },
    ];

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="flex flex-col md:flex-row justify-around items-start mt-10 p-10 gap-10">
            <div className="text-center md:w-1/2 mt-14">
                <h2 className="text-lg font-bold mb-2 text-black">
                    Everything You Need to Know
                </h2>
                <p className="text-4xl md:text-5xl font-semibold text-black leading-tight">
                    Frequently Asked <br /> Questions
                </p>
            </div>

            <div className="md:w-1/2 w-full  p-6 rounded-lg shadow-lg">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-gray-300 py-6">
                        <button
                            onClick={() => toggle(i)}
                            className="flex justify-between items-center w-full text-left"
                        >
                            <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                            <span className="text-xl font-bold text-green-600">
                                {openIndex === i ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${openIndex === i ? "max-h-40 mt-2" : "max-h-0"
                                }`}
                        >
                            <p className="text-gray-600 text-sm">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Question