import React from 'react';

const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-white dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">With over 20 years of experience, Pure Lifestyle Yoga is go-to destination for both online and offline yoga classes, designed to transform lifestyle. Join our vibrant community and discover the many benefits of yoga!</p>

                        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                            <a
                                className="text-gray-500 font-bold transition hover:text-gray-900"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> Facebook </span>
                                {/* SVG icon... */}
                            </a>

                            <a
                                className="text-gray-500 font-bold transition hover:text-gray-900"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> Instagram </span>
                                {/* SVG icon... */}
                            </a>

                            <a
                                className="text-gray-500 font-bold transition hover:text-gray-900"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> Twitter </span>
                                {/* SVG icon... */}
                            </a>

                            <a
                                className="text-gray-500 font-bold transition hover:text-gray-900"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> GitHub </span>
                                {/* SVG icon... */}
                            </a>

                            <a
                                className="text-gray-500 font-bold transition hover:text-gray-900"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="sr-only"> Dribbble </span>
                                {/* SVG icon... */}
                            </a>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >
                        <div>
                            <strong className="font-bold dark:text-white text-gray-900"> Quick Links </strong>

                            <nav
                                aria-label="Footer Services Nav"
                                className="mt-6 flex flex-col space-y-1"
                            >
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    About Us
                                </a>
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Packages
                                </a>
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Terms & Conditions
                                </a>
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Privacy Policy
                                </a>
                            </nav>
                        </div>

                        <div>
                            <strong className="font-bold dark:text-white text-gray-900"> Others </strong>

                            <nav
                                aria-label="Footer About Nav"
                                className="mt-6 flex flex-col space-y-1"
                            >
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Upcoming Retreats
                                </a>
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Blogs
                                </a>
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Schedule
                                </a>
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Services
                                </a>
                            </nav>
                        </div>

                        <div>
                            <strong className=" dark:text-white font-bold text-gray-900"> Contact Us </strong>

                            <nav
                                aria-label="Footer Support Nav"
                                className="mt-6 flex flex-col space-y-1"
                            >
                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    FAQs
                                </a>

                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                    Contact
                                </a>

                                <a className="text-gray-500 font-bold transition hover:text-gray-900" href="/">
                                   Address
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-8">
                    <p className="text-center text-xs/relaxed text-gray-500">
                        © Company 2024. All rights reserved.

                        <br />

                        Created by &nbsp;
                        <a className="text-gray-500 font-bold transition hover:text-gray-900">Pure Lifestyle Yoga Team</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
