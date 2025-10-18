
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import solar3 from "/solar3.avif";
import solar5 from "/solar5.jpg";
import solar7 from "/solar7.jpg";
import solar13 from "/solar13.jpg";
import solar14 from "/solar14.jpg";

import HeroSection from "../components/HeroSection";
import SolarEnergyService from "../components/SolarEnergyService";
import Question from "../components/Question";
import SolarVideos from "../components/SolarVideos";

const slides = [
    { image: solar3 },
    { image: solar3 },
    { image: solar5 },
    { image: solar7 },
    { image: solar13 },
    { image: solar14 },
];

const Home = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="text-gray-700 min-h-screen relative">
            {/* Slider Section */}
            <div className="relative aspect-[16/9] w-full overflow-hidden mb-10">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={`slide-${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white px-4 text-center">
                    <div className="max-w-3xl space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif leading-snug mb-2">
                            Brightening Tomorrow with Clean Solar Power.
                        </h2>
                        <h3 className="hidden sm:block text-sm sm:text-base md:text-xl font-light max-w-2xl mx-auto">
                            At Solaria, we’re committed to delivering reliable, efficient, and sustainable
                            solar energy solutions. From residential installations to commercial systems,
                            we help you harness the power of the sun and reduce your energy bills while
                            protecting the planet.
                        </h3>
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 text-white bg-black/30 p-2 sm:p-3 rounded-full hover:bg-black/50"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-3 sm:right-6 transform -translate-y-1/2 text-white bg-black/30 p-2 sm:p-3 rounded-full hover:bg-black/50"
                >
                    ❯
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Other Sections */}
            <HeroSection />
            <SolarEnergyService />
            <SolarVideos />
            <Question />
        </div>
    );
};

export default Home;
