import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@assets/DSC02272_1752947688416.jpg";

export default function AboutSection() {
  const [leftRef, leftInView] = useScrollAnimation();
  const [rightRef, rightInView] = useScrollAnimation();

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const personalDetails = [
    { icon: "fas fa-briefcase", label: "Role", value: "Founder & Tech Strategist" },
    { icon: "fas fa-globe", label: "LinkedIn", value: "linkedin.com/in/lalita-chopra" },
    { icon: "fas fa-users", label: "Focus", value: "Community Building & ML" },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "UAE & UK 🇦🇪🇬🇧" },
    { icon: "fas fa-rocket", label: "Expertise", value: "Tech Strategy & Innovation" },
    { icon: "fas fa-envelope", label: "Email", value: "lalitac@icloud.com" },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-bold text-4xl lg:text-5xl text-center mb-16"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -30 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <img
              src={profileImage}
              alt="Professional portrait"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover mx-auto lg:mx-0 shadow-xl"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 30 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-semibold text-2xl lg:text-3xl text-sage mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Founder | Community Builder | Tech & ML Strategist
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Welcome to my portfolio! I'm passionate about building innovative tech solutions and fostering vibrant communities that drive meaningful change. As a founder and strategist, I specialize in leveraging technology and machine learning to solve complex problems and create lasting impact.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              My journey spans across the UAE and UK, where I've had the privilege of building communities, launching ventures, and developing strategic approaches to technology adoption. I believe in the power of collaboration and innovation to transform industries and create opportunities for growth.
            </p>

            {/* Personal Details Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {personalDetails.map((detail, index) => (
                <div key={index} className="flex items-center">
                  <i className={`${detail.icon} text-sage w-6`}></i>
                  <span className="ml-3">
                    <strong>{detail.label}:</strong> {detail.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleGetInTouch}
              className="inline-flex items-center px-6 py-3 bg-sage hover:bg-opacity-80 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get In Touch
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
