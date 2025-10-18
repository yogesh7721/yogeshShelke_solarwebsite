import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import solar from "/solar8.webp";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, -20]);
    const y2 = useTransform(scrollY, [0, 800], [0, -50]);

    const sectionFade = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-50 to-emerald-50 text-slate-900">

            <section className="relative overflow-hidden py-24">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute right-0 top-0 w-1/2 opacity-20 pointer-events-none"
                >
                    <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="g1" x1="0" x2="1">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
                            </linearGradient>
                        </defs>
                        <rect x="0" y="0" width="600" height="400" fill="url(#g1)" rx="40" />
                    </svg>
                </motion.div>

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionFade}>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-emerald-800">
                            NewRa Grids — Clean Energy, Strong Communities
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-slate-700/95 leading-relaxed">
                            We craft thoughtful solar solutions blending technology with nature. Our Eco Green approach
                            focuses on durability, affordability, and sustainability — making your solar journey smart and impactful.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
                            >
                                Request Survey <FaArrowRight />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="#our-mission"
                                className="inline-block border border-emerald-200 text-emerald-700 px-5 py-3 rounded-full hover:bg-emerald-50 transition"
                            >
                                Learn More
                            </motion.a>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <motion.div whileHover={{ y: -6 }} className="bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
                                ✅ Eco-friendly Equipment
                            </motion.div>
                            <motion.div whileHover={{ y: -6 }} className="bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
                                ✅ Govt. Incentives Support
                            </motion.div>
                            <motion.div whileHover={{ y: -6 }} className="bg-white/60 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
                                ✅ Local Community Projects
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.6 } }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img src={solar} alt="Solar panels on roof" className="w-full h-[380px] object-cover" />
                        <div className="absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg w-56">
                            <h4 className="text-xs text-emerald-500 uppercase tracking-wide">Founded</h4>
                            <p className="font-semibold text-lg text-emerald-700">2020</p>
                            <p className="text-xs text-slate-600 mt-1">Projects across residential, commercial, and community installations.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="our-mission" className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionFade}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-emerald-700">Our Mission & Vision</h2>
                            <p className="mt-4 text-slate-700 leading-relaxed">
                                We empower communities to transition to clean energy with minimal disruption and maximum benefit.
                            </p>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <motion.div whileHover={{ scale: 1.03, rotate: 1 }} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
                                    <h3 className="font-semibold text-emerald-600 mb-2">Sustainable Design</h3>
                                    <p className="text-sm text-slate-700">Eco-friendly materials and efficient layouts respecting nature.</p>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.03, rotate: -1 }} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
                                    <h3 className="font-semibold text-emerald-600 mb-2">Community Impact</h3>
                                    <p className="text-sm text-slate-700">Local hiring, training, and support for neighborhoods.</p>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
                                    <h3 className="font-semibold text-emerald-600 mb-2">Affordable Solutions</h3>
                                    <p className="text-sm text-slate-700">Quality solar systems that save costs and protect the planet.</p>
                                </motion.div>
                            </div>
                        </div>

                        <aside className="p-6 bg-gradient-to-b from-white to-emerald-50 rounded-2xl shadow">
                            <h4 className="text-lg font-semibold text-emerald-700">Quick Facts</h4>
                            <ul className="mt-4 space-y-3 text-slate-700">
                                <li>⚡ <strong>150+</strong> Completed Projects</li>
                                <li>😊 <strong>200+</strong> Happy Clients</li>
                                <li>🏠 Residential • 🏢 Commercial • ⚙ Industrial</li>
                                <li>🛠 Warranty up to <strong>10 years</strong></li>
                            </ul>
                            <a href="/projects" className="mt-6 inline-block text-emerald-600 font-semibold hover:underline">See Our Work →</a>
                        </aside>
                    </div>
                </motion.div>
            </section>

            <section className="bg-emerald-50 py-12">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionFade} className="text-2xl font-bold text-emerald-700 mb-6">
                        Our Journey
                    </motion.h3>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[{ year: '2020', title: 'Founded', desc: 'Residential pilot projects.' },
                        { year: '2022', title: 'Expanded', desc: 'Scaled to commercial installs.' },
                        { year: '2024', title: 'Community Programs', desc: 'Subsidy guidance & workshops.' }].map((t, i) => (
                            <motion.div key={i} whileHover={{ y: -6, scale: 1.02 }} className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition relative">
                                {i < 2 && <span className="absolute top-6 right-[-1.5rem] w-6 h-1 bg-emerald-300"></span>}
                                <div className="text-emerald-700 font-semibold text-lg">{t.year}</div>
                                <h4 className="font-bold mt-2">{t.title}</h4>
                                <p className="text-sm text-slate-700 mt-2">{t.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 text-center">
                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionFade} className="text-3xl font-bold text-emerald-700 mb-8">Meet the Team</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[{ name: 'Yogesh Shelke', role: 'Founder & CEO', img: '/images/team-yogesh.jpg' },
                    { name: 'Priya Deshmukh', role: 'Head of Ops', img: '/images/team-priya.jpg' },
                    { name: 'Arjun Patel', role: 'Technical Lead', img: '/images/team-arjun.jpg' }].map((m, idx) => (
                        <motion.div key={idx} whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition">
                            <img src={m.img} alt={m.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-emerald-100 shadow-sm" />
                            <h4 className="font-semibold text-slate-800">{m.name}</h4>
                            <p className="text-emerald-600 text-sm">{m.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-white py-14">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-2xl font-bold text-emerald-700">Ready to join the solar movement?</h4>
                        <p className="mt-2 text-slate-600">Request a free site survey and get a tailored plan for your home or business.</p>
                    </div>
                    <div className="flex gap-4">
                        <motion.a whileHover={{ scale: 1.05 }} href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 px-6 py-3 rounded-full text-white font-semibold shadow">Request Survey <FaArrowRight /></motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} href="/projects" className="inline-block border border-emerald-200 px-6 py-3 rounded-full text-emerald-700">View Projects</motion.a>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default About