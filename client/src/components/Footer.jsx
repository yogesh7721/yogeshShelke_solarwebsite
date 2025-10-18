import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#0f1e3c] text-white">
            <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="text-yellow-400 text-3xl">☀️</div>
                        <h2 className="text-2xl font-bold">NewRa Grids</h2>
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                        At NewRa Grids, we’re committed to delivering reliable, efficient,
                        and sustainable solar energy solutions. From residential
                        installations to commercial systems, we help you harness the power
                        of the sun and reduce your energy bills while protecting the
                        planet.
                    </p>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-4 mt-5 text-2xl">
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaFacebookF /></a>
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaTwitter /></a>
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaWhatsapp /></a>
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaInstagram /></a>
                        <a href="#" className="hover:text-yellow-400 transition-colors duration-200"><FaYoutube /></a>
                    </div>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-gray-300 text-base sm:text-lg">
                        <li>Solar Panel Installation</li>
                        <li>Solar Panel Maintenance</li>
                        <li>Custom System Design</li>
                        <li>Solar Battery Storage</li>
                        <li>System Monitoring & Reporting</li>
                        <li>Solar Panel Upgrades</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-300 text-base sm:text-lg">
                        <li>Home</li>
                        <li>Our Services</li>
                        <li>Projects</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="text-base sm:text-lg text-gray-300 space-y-3">
                        <li>
                            <strong className="text-white">📍 Head Office:</strong>
                            <br />
                            100 Solar Ave, Cidco, Sambhajinagar
                        </li>
                        <li>
                            <strong className="text-white">📞 Call Us:</strong>
                            <br />
                            +1 800 987 654
                        </li>
                        <li>
                            <strong className="text-white">📧 Email Us:</strong>
                            <br />
                            support@newragrids.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-700 text-sm text-gray-400">
                <p>© 2025 NewRa Grids by Designesia</p>
                <div className="flex flex-wrap gap-6 mt-2 sm:mt-0 text-lg">
                    <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
                    <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
                </div>
            </div>

            {/* Footer Image */}
            <img
                src="/footer-house.png"
                alt="Solar Panel House"
                className="w-full object-cover mt-6"
            />
        </div>
    );
};

export default Footer;
