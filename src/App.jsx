import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white selection:bg-blue-500/30 relative overflow-hidden transition-colors duration-300">
				<div className="fixed inset-0 z-0">
					<BackgroundAnimation />
				</div>
				<div className="relative z-10">
					<Navbar />
					<main>
						<Hero />
						<About />
						<Skills />
						<Projects />
						<Contact />
					</main>
					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default App;
