import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-600 dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
