import React from "react";
import { FaSolarPanel, FaLeaf, FaHome, FaClock } from "react-icons/fa";
import solar8 from "/solar8.webp";
import solar9 from "/solar9.webp";

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-b from-green-50 to-yellow-50 min-h-screen">
            {/* Hero Section */}
            <section className="text-center py-24 px-6 sm:py-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
                    About Us
                </h1>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Switch to solar and save money while saving the planet. Our expert team provides clean, reliable energy solutions for homes and businesses. Go green, reduce your bills, and enjoy energy independence today!
                </p>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-20 max-w-6xl mx-auto text-center mb-12 sm:mb-16 px-4">
                {[{
                    icon: <FaSolarPanel className="text-yellow-500 text-4xl sm:text-5xl mx-auto mb-3" />,
                    count: "100K+",
                    label: "Solar Panels Installed"
                }, {
                    icon: <FaHome className="text-yellow-500 text-4xl sm:text-5xl mx-auto mb-3" />,
                    count: "25K+",
                    label: "Homes Powered"
                }, {
                    icon: <FaClock className="text-yellow-500 text-4xl sm:text-5xl mx-auto mb-3" />,
                    count: "16+",
                    label: "Years of Expertise"
                }].map((stat, idx) => (
                    <div key={idx} className="bg-white shadow-lg p-6 sm:p-8 rounded-2xl hover:scale-105 transition">
                        {stat.icon}
                        <h2 className="text-2xl sm:text-3xl font-bold text-green-700">{stat.count}</h2>
                        <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Info Section */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center px-4 sm:px-6 pb-12 sm:pb-20">
                <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4 sm:mb-6">
                        Solar Power for a Smarter Future
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                        Discover the power of the sun with our end-to-end solar energy solutions. Reduce electricity bills, increase property value, or lower your carbon footprint — we make it easy to go solar.
                    </p>

                    <ul className="space-y-2 sm:space-y-3 text-gray-700">
                        {[
                            "Save money by generating your own power.",
                            "Reduce your carbon footprint and protect the planet.",
                            "Solar homes often see a higher resale value.",
                            "Reduce reliance on the grid and rising utility costs."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <FaLeaf className="text-green-600" /> {item}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-6 sm:mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
                        Get a Quote
                    </button>
                </div>

                {/* Images */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 md:mt-0 relative">
                    <img
                        src={solar8}
                        alt="Solar Panels 1"
                        className="rounded-2xl shadow-xl w-full sm:w-[60%] md:w-[65%] object-cover transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
                    />
                    <img
                        src={solar9}
                        alt="Solar Panels 2"
                        className="rounded-2xl shadow-xl w-full sm:w-[60%] md:w-[65%] object-cover sm:-ml-4 md:-ml-12 -mt-4 sm:-mt-6 md:-mt-12 z-10 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1"
                    />
                </div>
            </section>
        </div>
    );
}


export default HeroSection