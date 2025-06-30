import { useState } from "react";
import Logo from "../Logo";
import Navlink from "./Navlink";
import MainButton from "../MainButton";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Service" },
    { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("#home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 z-50 shadow-sm">
            <nav className="flex justify-between items-center container mx-auto p-4 sm:px-6 lg:px-8">
                {/* logo */}
                <Logo />
                {/* burger button */}
                <button onClick={toggleMenu} className="md:hidden p-2">
                    {isMenuOpen ? "X" : "="}
                </button>
                {/* nav links - desktop */}
                <ul className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <li key={"link" + index}>
                            <Navlink
                                href={link.href}
                                label={link.label}
                                activeLink={activeLink}
                                onClick={(href) => {
                                    setActiveLink(href);
                                }}
                            />
                        </li>
                    ))}
                </ul>
                <MainButton className="hidden md:block">
                    <a href="#newsletter">Get in touch</a>
                </MainButton>
            </nav>

            {isMenuOpen && (
                <nav className="md:hidden bg-white border-t border-gray-100 py-4">
                    <ul className="container mx-auto p-4 gap-4 flex flex-col ">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Navlink
                                    href={link.href}
                                    label={link.label}
                                    activeLink={activeLink}
                                    onClick={(href) => {
                                        setActiveLink(href);
                                        closeMenu();
                                    }}
                                />
                            </li>
                        ))}
                        {/* CTA Button */}
                        <MainButton>
                            <a href="#newsletter">Get in touch</a>
                        </MainButton>
                    </ul>
                </nav>
            )}
            {/* nav links -  mobile */}
        </header>
    );
}
