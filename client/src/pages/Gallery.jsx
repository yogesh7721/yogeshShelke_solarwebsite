import React from "react";
import heroImg from "/solar9.webp";
import solar1 from "/solar2.jpg";
import solar2 from "/solar3.avif";
import solar3 from "/solar5.jpg";
import solar4 from "/solar6.jpg";
import solar5 from "/solar8.webp";
import solar6 from "/solar7.jpg";

const Gallery = () => {
    const galleryImages = [
        { src: solar1, title: "Rooftop Solar Panel Installation" },
        { src: solar2, title: "Commercial Solar Project" },
        { src: solar3, title: "Solar Farm Expansion" },
        { src: solar4, title: "Residential Solar Panels" },
        { src: solar5, title: "Solar Battery Storage" },
        { src: solar6, title: "Solar Panel Maintenance" },
    ];

    const completedProjects = [
        { year: "2025", count: 15 },
        { year: "2024", count: 22 },
        { year: "2023", count: 18 },
        { year: "2022", count: 12 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-50">
            <div className="w-full h-96 relative">
                <img
                    src={heroImg}
                    alt="Solar Projects"
                    className="w-full h-full object-cover rounded-b-3xl shadow-xl"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center">
                        Empowering Solar Energy Solutions ☀️
                    </h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-10">
                    Projects Completed By Year
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    {completedProjects.map((proj) => (
                        <div
                            key={proj.year}
                            className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transform transition-transform duration-300"
                        >
                            <h3 className="text-2xl font-bold text-orange-500 mb-2">{proj.year}</h3>
                            <p className="text-gray-700 text-lg">{proj.count} Projects</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-10">
                    Solar Projects Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105`}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className={`w-[200] object-cover ${index % 3 === 0 ? "h-80 md:h-96 lg:h-[400px]" : "h-64 md:h-80 lg:h-[350px]"
                                    }`}
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4">
                                <p className="text-white font-semibold text-center text-sm sm:text-base md:text-lg">
                                    {img.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
