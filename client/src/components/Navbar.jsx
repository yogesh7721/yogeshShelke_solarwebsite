// import React, { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { GrSolaris } from "react-icons/gr";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const location = useLocation();
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);

//     const isHomePage = location.pathname === "/" || location.pathname === "/home";

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             if (currentScrollY > lastScrollY && currentScrollY > 100) {
//                 setIsVisible(false);
//             } else {
//                 setIsVisible(true);
//             }

//             setLastScrollY(currentScrollY);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [lastScrollY]);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     const closeMenu = () => setIsOpen(false);

//     return (
//         <nav
//             className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
//       ${isVisible ? "translate-y-0" : "-translate-y-full"}
//       ${isHomePage ? "bg-transparent" : "bg-gray-700"} text-white`}
//         >
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//                 {/* Logo */}
//                 <div className="flex items-center gap-2">
//                     <GrSolaris className="w-12 h-16 text-yellow-400" />
//                     <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
//                         NewRa Grids
//                     </h1>
//                 </div>

//                 <ul className="hidden md:flex gap-6">
//                     {[
//                         { path: "/", name: "Home" },
//                         { path: "/about", name: "About" },
//                         { path: "/contact", name: "Contact" },
//                         { path: "/map", name: "Map" },
//                         { path: "/solarCalculator", name: "SolarCalculator" },
//                         { path: "/gallery", name: "Gallery" },
//                         { path: "/login", name: "Login" },
//                     ].map((item) => (
//                         <li key={item.path}>
//                             <Link
//                                 to={item.path}
//                                 className="font-semibold text-xl text-white relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
//                             >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 <button
//                     onClick={toggleMenu}
//                     className="md:hidden text-white focus:outline-none"
//                 >
//                     {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
//                 </button>
//             </div>

//             <div
//                 className={`md:hidden bg-gray-800 text-white transition-all duration-300 overflow-hidden 
//                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
//             >
//                 <ul className="flex flex-col items-center py-4 space-y-4">
//                     {[
//                         { path: "/", name: "Home" },
//                         { path: "/about", name: "About" },
//                         { path: "/contact", name: "Contact" },
//                         { path: "/map", name: "Map" },
//                         { path: "/solarCalculator", name: "SolarCalculator" },
//                         { path: "/gallery", name: "Gallery" },
//                         { path: "/login", name: "Login" },
//                     ].map((item) => (
//                         <li key={item.path}>
//                             <Link
//                                 to={item.path}
//                                 onClick={closeMenu}
//                                 className="block text-lg font-medium hover:text-yellow-400 transition"
//                             >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GrSolaris } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" },
        { path: "/map", name: "Map" },
        { path: "/solarCalculator", name: "SolarCalculator" },
        { path: "/gallery", name: "Gallery" },
        { path: "/login", name: "Login" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
            ${isVisible ? "translate-y-0" : "-translate-y-full"}
            ${isHomePage ? "bg-transparent" : "bg-gray-700"} text-white`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <GrSolaris className="w-12 h-16 text-yellow-400" />
                    <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
                        NewRa Grids
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className="font-semibold text-xl text-white relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400 cursor-pointer"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                >
                    {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-gray-800 text-white transition-all duration-300 overflow-hidden 
                ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col items-center py-4 space-y-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                onClick={closeMenu}
                                className="block text-lg font-medium hover:text-yellow-400 cursor-pointer transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
