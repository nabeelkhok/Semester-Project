import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 shadow-lg z-10">
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to="/" className="text-xl font-bold">TCS</NavLink>
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className="hover:text-yellow-400" end>Home</NavLink>
                    <NavLink to="/about" className="hover:text-yellow-400">About Us</NavLink>
                    <NavLink to="/contact" className="hover:text-yellow-400">Contact Us</NavLink>
                    <NavLink to="/tracking" className="hover:text-yellow-400">Track Your Order</NavLink>
                </div>
                <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <div id="mobileMenu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 text-center py-2`}>
                <NavLink to="/" className="block py-2 hover:text-yellow-400" end>Home</NavLink>
                <NavLink to="/about" className="block py-2 hover:text-yellow-400">About Us</NavLink>
                <NavLink to="/contact" className="block py-2 hover:text-yellow-400">Contact Us</NavLink>
                <NavLink to="/tracking" className="block py-2 hover:text-yellow-400">Track Your Order</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;