import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utilities/providers/AuthProvider';
import LogoImage from '../../assets/home/ply-logo.png'; 

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about' },
    {
        name: 'Classes',
        subLinks: [
            { name: 'Schedule', route: '/classes/schedule' },
            { name: 'Packages', route: '/classes/packages' },
        ],
    },
    { name: 'Upcoming Events', route: '/events' },
    { name: 'Contact Us', route: '/contact' },
];

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = (name) =>
        setActiveDropdown(activeDropdown === name ? null : name);

    return (
        <motion.nav
            className="fixed top-0 w-full bg-white shadow-lg z-50"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div
                    onClick={() => navigate('/')}
                    className="flex items-center cursor-pointer space-x-3"
                >
                    <img
                        src={LogoImage} 
                        alt="Logo"
                        className="h-10 w-10"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Pure Lifestyle Yoga</h1>
                        <p className="text-sm font-medium text-gray-500">Your Path to Pure Bliss</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) =>
                        link.subLinks ? (
                            <div key={link.name} className="relative group">
                                <button
                                    className="text-gray-800 hover:text-primary font-medium"
                                    onClick={() => toggleDropdown(link.name)}
                                >
                                    {link.name}
                                </button>
                                {activeDropdown === link.name && (
                                    <div className="absolute left-0 top-10 bg-white shadow-md rounded-md z-10">
                                        {link.subLinks.map((subLink) => (
                                            <NavLink
                                                key={subLink.route}
                                                to={subLink.route}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {subLink.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                key={link.route}
                                to={link.route}
                                className="text-gray-800 hover:text-primary font-medium"
                            >
                                {link.name}
                            </NavLink>
                        )
                    )}
                    {user ? (
                        <>
                            <NavLink
                                to="/dashboard"
                                className="text-gray-800 hover:text-primary font-medium"
                            >
                                Dashboard
                            </NavLink>
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-800">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white shadow-lg"
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) =>
                            link.subLinks ? (
                                <div key={link.name}>
                                    <button
                                        className="w-full text-left px-4 py-2 text-gray-800 font-medium hover:bg-gray-100"
                                        onClick={() => toggleDropdown(link.name)}
                                    >
                                        {link.name}
                                    </button>
                                    {activeDropdown === link.name && (
                                        <div className="bg-gray-50">
                                            {link.subLinks.map((subLink) => (
                                                <NavLink
                                                    key={subLink.route}
                                                    to={subLink.route}
                                                    className="block px-6 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    {subLink.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    key={link.route}
                                    to={link.route}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                >
                                    {link.name}
                                </NavLink>
                            )
                        )}
                        {user ? (
                            <button
                                onClick={logout}
                                className="w-full px-4 py-2 bg-primary text-white rounded-md mt-2"
                            >
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                to="/login"
                                className="w-full px-4 py-2 bg-primary text-white rounded-md mt-2 text-center block"
                            >
                                Login
                            </NavLink>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default NavBar;
