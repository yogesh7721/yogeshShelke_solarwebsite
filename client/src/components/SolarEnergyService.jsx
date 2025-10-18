
import React, { useState } from "react";
import { FaTools, FaCogs, FaSolarPanel, FaBolt, FaSun, FaWarehouse, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";

import solarInstall from "/solar6.jpg";
import solarMaintain from "/solar7.jpg";
import solarDesign from "/solar8.webp";
import solarBattery from "/solar9.webp";
import solarCleaning from "/solar3.avif";
import solarStorage from "/solar5.jpg";

const SolarEnergyService = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="bg-gradient-to-b from-yellow-50 to-green-50 min-h-screen">
            <section className="text-center py-16 px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
                    Solar Energy Services
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                    Reliable, Renewable, and Cost-Effective Energy Solutions
                </p>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Switch to solar and enjoy lower bills, clean energy, and expert
                    service designed for homes, businesses, and beyond.
                </p>
            </section>

            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-10">
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <img
                        src={solarInstall}
                        alt="Solar Panel Installation"
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FaSolarPanel className="text-yellow-500 text-3xl" />
                            <h2 className="text-2xl font-semibold text-green-700">
                                Solar Panel Installation
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Fast, safe, and certified installation by experienced technicians.
                            We handle everything from site assessment to final setup, ensuring
                            maximum performance.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <img
                        src={solarMaintain}
                        alt="Solar Panel Maintenance"
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FaTools className="text-yellow-500 text-3xl" />
                            <h2 className="text-2xl font-semibold text-green-700">
                                Solar Panel Maintenance
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Ensure peak performance with regular inspections, cleaning, and
                            servicing. Our team keeps your panels efficient and long-lasting.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <img
                        src={solarDesign}
                        alt="Custom System Design"
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FaCogs className="text-yellow-500 text-3xl" />
                            <h2 className="text-2xl font-semibold text-green-700">
                                Custom System Design
                            </h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            We design efficient, tailor-made solar setups aligned with your
                            energy needs — whether for homes, industries, or commercial
                            projects.
                        </p>
                    </div>
                </div>
            </section>

            {showMore && (
                <>
                    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-16 animate-fadeIn">
                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <img
                                src={solarBattery}
                                alt="Battery Backup Systems"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaBolt className="text-yellow-500 text-3xl" />
                                    <h2 className="text-2xl font-semibold text-green-700">
                                        Battery Backup Systems
                                    </h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Keep your power running even during outages with our reliable
                                    solar battery storage systems.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <img
                                src={solarCleaning}
                                alt="Solar Cleaning Service"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaSun className="text-yellow-500 text-3xl" />
                                    <h2 className="text-2xl font-semibold text-green-700">
                                        Solar Panel Cleaning
                                    </h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Maintain high efficiency with professional solar cleaning and
                                    dust removal services.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <img
                                src={solarStorage}
                                alt="Industrial Solar Systems"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaWarehouse className="text-yellow-500 text-3xl" />
                                    <h2 className="text-2xl font-semibold text-green-700">
                                        Industrial Solar Systems
                                    </h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Large-scale solar solutions for factories, warehouses, and
                                    commercial buildings.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-green-50 to-yellow-50 py-4 px-6">
                        <div className="max-w-7xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
                                Need Our Services?
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We’re here to help you power your home or business with clean,
                                renewable energy. Reach out today and let’s make your solar
                                journey simple and efficient.
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center transition-all duration-500">
                                <FaPhoneAlt className="text-green-600 text-4xl mb-4" />
                                <h3 className="text-xl font-semibold text-green-700 mb-2">
                                    Call Us
                                </h3>
                                <p className="text-gray-700 font-medium">+1 800 987 654</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center transition-all duration-500">
                                <FaClock className="text-yellow-500 text-4xl mb-4" />
                                <h3 className="text-xl font-semibold text-green-700 mb-2">
                                    Work Hours
                                </h3>
                                <p className="text-gray-700 font-medium">
                                    Mon – Sat: 08:00 – 17:00
                                </p>
                                <p className="text-gray-500 text-sm">Sunday: Closed</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center transition-all duration-500">
                                <FaEnvelope className="text-green-600 text-4xl mb-4" />
                                <h3 className="text-xl font-semibold text-green-700 mb-2">
                                    Email Us
                                </h3>
                                <p className="text-gray-700 font-medium break-words">
                                    newragrids@gmail.com
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            )}

            <div className="text-center pb-20">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition"
                >
                    {showMore ? "Hide Extra Services" : "View All Services"}
                </button>
            </div>
        </div>
    );
}

export default SolarEnergyService