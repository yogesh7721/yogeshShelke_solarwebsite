
import React, { useState } from "react";
import solar1 from "/solar11.webp";
import solar2 from "/solar5.jpg";
import solar3 from "/solar7.jpg";

const SolarCalculator = () => {
    const [usage, setUsage] = useState("");
    const [tariff, setTariff] = useState("");
    const [sunlight, setSunlight] = useState("");
    const [efficiency, setEfficiency] = useState("");
    const [savings, setSavings] = useState(null);

    const calculateSavings = (e) => {
        e.preventDefault();
        const monthlySolarProduction = sunlight * efficiency * 30;
        const costWithoutSolar = usage * tariff;
        const costWithSolar = Math.max(0, (usage - monthlySolarProduction) * tariff);
        const monthlySavings = costWithoutSolar - costWithSolar;
        const annualSavings = monthlySavings * 12;

        setSavings({
            monthly: monthlySavings.toFixed(2),
            annual: annualSavings.toFixed(2),
        });
    };

    return (
        <div className="min-h-screen bg-blue-50 px-4 sm:px-6 md:px-12 py-12">
            <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-8">

                <div className="w-full md:w-1/2 flex justify-center items-center relative">
                    <div className="relative w-full max-w-md flex flex-col md:block items-center">
                        <img
                            src={solar1}
                            alt="Solar Panel 1"
                            className="rounded-2xl shadow-2xl w-full sm:w-64 h-60 object-cover transform transition-transform duration-500 hover:scale-105 hover:-rotate-1
             md:w-[800px] md:h-[500px] md:absolute md:right-[-2px] md:mr-40 md:mb-60"
                        />

                        <img
                            src={solar2}
                            alt="Solar Panel 2"
                            className="rounded-2xl shadow-2xl w-full sm:w-64 h-60 object-cover mt-[40px] md:mt-0 md:absolute md:top-44 md:left-4
         md:w-[650px] md:h-[450px] opacity-95 transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                        />
                    </div>
                </div>



                {/* Form */}
                <div className="w-full md:w-1/2 bg-white/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl max-w-xl">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 mb-6 sm:mb-8">
                        Solar Savings Estimator ☀️
                    </h2>

                    <form onSubmit={calculateSavings} className="space-y-4 sm:space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Electricity Usage (kWh/month)</label>
                            <input
                                type="number"
                                value={usage}
                                onChange={(e) => setUsage(e.target.value)}
                                placeholder="Enter your average monthly usage"
                                required
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Tariff Rate (₹/kWh)</label>
                            <input
                                type="number"
                                value={tariff}
                                onChange={(e) => setTariff(e.target.value)}
                                placeholder="Enter your electricity rate"
                                required
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Average Sunlight Hours per Day</label>
                            <input
                                type="number"
                                value={sunlight}
                                onChange={(e) => setSunlight(e.target.value)}
                                placeholder="Enter avg sunlight hours"
                                required
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Efficiency Factor (0 - 1)</label>
                            <input
                                type="number"
                                step="0.01"
                                value={efficiency}
                                onChange={(e) => setEfficiency(e.target.value)}
                                placeholder="Example: 0.75"
                                required
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none shadow-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-bold rounded-full shadow-lg transition duration-300"
                        >
                            Calculate Savings
                        </button>
                    </form>

                    {savings && (
                        <div className="mt-6 bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-2xl text-center shadow-inner">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Estimated Savings 💰</h3>
                            <p className="text-lg text-gray-700"><strong>Monthly:</strong> ₹{savings.monthly}</p>
                            <p className="text-lg text-gray-700"><strong>Annual:</strong> ₹{savings.annual}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full px-4 mt-10 md:mt-12 md:px-8 text-left">
                <p>
                    <span className="font-bold">🌞 1. Benefits of Using Solar Energy</span>
                    <br /><br />
                    Solar energy is a renewable and sustainable source of power that offers numerous advantages. It is environmentally
                    friendly because it produces no greenhouse gas emissions, reducing climate impact. Using solar energy reduces
                    electricity bills, provides long lifespan panels, decentralizes energy production, and increases energy independence.
                    <br /><br />
                    <span className="font-bold">Conclusion:</span> Using solar energy results in financial savings, environmental protection, and long-term energy stability.
                </p>
                <br />
                <p>
                    <span className="font-bold">💡 2. Drawbacks / Losses of Using Conventional Electricity</span>
                    <br /><br />
                    Using regular electricity has drawbacks: fossil fuel generation increases carbon emissions, high consumption raises bills,
                    centralized grids may fail, and energy wastage can occur. Conventional electricity is not fully sustainable long-term.
                    <br /><br />
                    <span className="font-bold">Conclusion:</span> While convenient, conventional electricity has negative environmental impacts, higher costs, and long-term sustainability risks.
                </p>
            </div>
        </div>
    );
};

export default SolarCalculator;
