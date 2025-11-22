import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'E-Commerce App',
        description: 'A full-featured mobile shopping app built with Flutter and Firebase. Includes user authentication, product catalog, and payment integration.',
        tags: ['Flutter', 'Dart', 'Firebase'],
        links: { github: '#', demo: '#' },
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and a dark mode design.',
        tags: ['React', 'Tailwind CSS', 'Framer Motion'],
        links: { github: '#', demo: '#' },
    },
    {
        title: 'Task Manager',
        description: 'A productivity app for managing daily tasks and projects. Built with Flutter for cross-platform support on iOS and Android.',
        tags: ['Flutter', 'SQLite', 'Provider'],
        links: { github: '#', demo: '#' },
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100/50 dark:bg-black/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4 text-gray-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Some of my recent work</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors group shadow-md dark:shadow-none"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                                {/* Placeholder for project image */}
                                <span className="text-gray-400 dark:text-gray-600 text-4xl font-bold opacity-40 group-hover:opacity-50 transition-opacity">
                                    {project.title[0]}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.links.github}
                                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <FiGithub size={20} />
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                                        aria-label="Live Demo"
                                    >
                                        <FiExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
