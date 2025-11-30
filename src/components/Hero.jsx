import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                        Hello, I'm a
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                            Mobile Developer
                        </span>
                        <br />
                        <span className="text-3xl md:text-5xl text-gray-600 dark:text-gray-500">
                             ReactNative Enthusiast
                        </span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                        Crafting beautiful, high-performance mobile and web applications.
                        Specializing in cross-platform development with a keen eye for design and user experience.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full font-medium transition-all hover:scale-105"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
