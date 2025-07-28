import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    value: "UAE & UK 🇦🇪🇬🇧",
  },
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/lalita-chopra/",
  },
  {
    icon: "fas fa-envelope",
    title: "Email Me",
    value: "lalitac@icloud.com",
    link: "mailto:lalitac@icloud.com",
  },
];

export default function ContactSection() {
  const [ref, inView] = useScrollAnimation();

  const handleGetInTouch = () => {
    const mailtoLink = "mailto:lalitac@icloud.com?subject=Portfolio%20Inquiry&body=Hi%20Lalita,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest%20regards";
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-bold text-4xl lg:text-5xl mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-sage mb-12"
        >
          Ready to discuss your next venture or collaboration? Let's connect and explore opportunities to innovate together.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-blue bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${info.icon} text-2xl text-accent-blue`}></i>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-sage hover:text-accent-blue transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-sage">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <button
            onClick={handleGetInTouch}
            className="inline-flex items-center px-8 py-4 bg-accent-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Get in touch
            <i className="fas fa-envelope ml-3"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
