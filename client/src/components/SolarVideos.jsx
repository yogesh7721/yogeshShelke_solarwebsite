import React from "react";
import { FaUsersCog, FaCogs, FaDollarSign, FaHandshake, FaBolt, FaClock } from "react-icons/fa";
import solarWorkers from "/solar11.webp";
import solarPanels from "/solar12.webp";

const SolarVideos = () => {
    return (
        <div className="mb-10">
            <div className="bg-blue-950 py-20 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-14">
                    <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
                        <img
                            src={solarWorkers}
                            alt="Solar Installation Team"
                        />
                        <img
                            src={solarPanels}
                            alt="Solar Panels"
                            className="absolute bottom-[-5%] right-[-5%] w-[50%] max-w-[320px] h-auto md:h-[320px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-6 px-0 md:px-10">
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                            Trusted & Affordable
                        </h2>
                        <h3 className="text-2xl md:text-5xl font-bold text-white mb-4">
                            Why Choose Us?
                        </h3>

                        <ul className="space-y-5 text-white pt-5">
                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 flex-wrap">
                                <li className="flex items-start gap-4 w-full md:w-[48%]">
                                    <FaUsersCog className="text-green-600 text-4xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Professional Team</h4>
                                        <p className="text-white mt-2">
                                            Certified professionals with years of solar installation experience.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 w-full md:w-[48%]">
                                    <FaCogs className="text-yellow-500 text-4xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Customized Solutions</h4>
                                        <p className="text-white mt-2">
                                            Systems tailored to your energy needs and property layout.
                                        </p>
                                    </div>
                                </li>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 flex-wrap">
                                <li className="flex items-start gap-4 w-full md:w-[48%]">
                                    <FaDollarSign className="text-green-600 text-xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Affordable Plans</h4>
                                        <p className="text-white mt-2">
                                            Flexible financing and guidance on maximizing incentives.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 w-full md:w-[48%]">
                                    <FaHandshake className="text-yellow-500 text-3xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Ongoing Support</h4>
                                        <p className="text-white mt-2">
                                            Full-service maintenance and system monitoring after installation.
                                        </p>
                                    </div>
                                </li>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 flex-wrap">
                                <li className="flex items-start gap-4 w-full md:w-[48%]">
                                    <FaBolt className="text-green-600 text-xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Top-Tier Equipment</h4>
                                        <p className="text-white mt-2">
                                            We use premium solar panels and inverters for maximum efficiency.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 w-full md:w-[48%]">
                                    <FaClock className="text-yellow-500 text-3xl mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Fast Installation</h4>
                                        <p className="text-white mt-2">
                                            Efficient project turnaround without compromising on safety or quality.
                                        </p>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-b from-yellow-50 to-green-50 py-12 px-4">
                <div>
                    <h2 className="text-3xl md:text-4xl text-center font-bold text-green-700 mb-4">
                        See How Solar Energy Works
                    </h2>
                    <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                        Watch our short video to understand how solar panels convert sunlight into
                        clean and renewable energy for your home and business.
                    </p>
                </div>
                <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-start gap-10">
                    {/* Video */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-video rounded-3xl shadow-2xl overflow-hidden">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-3xl"
                                src="https://www.youtube.com/embed/BLgPJxdoKTM"
                                title="Solar Energy Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Benefits............ */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start">
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">1. Reduces electricity bills</span> – Solar panels generate your own electricity, lowering monthly energy costs.
                        </p>
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">2. Renewable energy source</span> – Sunlight is unlimited, providing a sustainable energy solution for your home.
                        </p>
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">3. Environmentally friendly</span> – Reduces carbon emissions and greenhouse gases, helping fight climate change.
                        </p>
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">4. Long-term investment</span> – Although the initial cost is higher, solar panels save money over time and offer a good ROI.
                        </p>
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">5. Energy independence</span> – Less dependence on the grid; minimizes issues during power outages.
                        </p>
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">6. Increases property value</span> – Homes with solar systems have higher market and resale value.
                        </p>
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">7. Government incentives</span> – Eligible for subsidies, tax benefits, and other solar incentives.
                        </p>
                        <p className="mb-6">
                            <span className="font-bold text-gray-800">8. Low maintenance</span> – Durable panels require minimal cleaning and upkeep over the years.
                        </p>

                        <p className="mb-6">
                            <span className="font-bold text-gray-800">9. Government incentives</span> – Silent operation – Unlike generators, solar energy systems operate silently, adding comfort to your home.
                        </p>

                    </div>

                </div>
            </section>
        </div>
    );
}
export default SolarVideos