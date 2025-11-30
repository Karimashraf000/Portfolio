import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-100/50 dark:bg-black/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-8 text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                        I am a passionate ReactNative Developer with a strong foundation in web technologies like React.js.
                        My journey began with a curiosity for how things work on the screen, leading me to specialize in creating
                        fluid, responsive, and user-friendly applications.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Whether it's building a cross-platform mobile app or a dynamic web interface, I focus on clean code,
                        pixel-perfect design, and smooth animations. I'm always eager to learn new tools and frameworks to
                        bring creative ideas to life.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
