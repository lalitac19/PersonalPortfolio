import { motion } from "framer-motion";
import backgroundImage from "@assets/DSC02743_1752947750201.jpg";

export default function HeroSection() {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Professional background photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Lalita Chopra
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 font-light"
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          <span className="text-accent-blue font-medium">Founder | Community Builder | Tech & ML Strategist 🇦🇪 & 🇬🇧</span>
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={handleLearnMore}
          className="inline-flex items-center px-8 py-3 bg-accent-blue hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Learn More About Me
          <i className="fas fa-arrow-down ml-2"></i>
        </motion.button>
      </motion.div>
    </section>
  );
}
