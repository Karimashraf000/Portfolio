import React from 'react';
import { motion } from 'framer-motion';
import { SiFlutter, SiDart, SiReact, SiJavascript, SiHtml5, SiCss3, SiGit, SiFirebase } from 'react-icons/si';

const skills = [
    { name: 'Flutter', icon: <SiFlutter className="text-blue-400" />, level: 'Advanced' },
    { name: 'Dart', icon: <SiDart className="text-blue-500" />, level: 'Advanced' },
    { name: 'React', icon: <SiReact className="text-cyan-400" />, level: 'Intermediate' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 'Intermediate' },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, level: 'Advanced' },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-600" />, level: 'Advanced' },
    { name: 'Git', icon: <SiGit className="text-red-500" />, level: 'Intermediate' },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 'Intermediate' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4 text-gray-900 dark:text-white">
                        My Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                            className="bg-white dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center gap-4 transition-all cursor-default group shadow-sm dark:shadow-none"
                        >
                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
