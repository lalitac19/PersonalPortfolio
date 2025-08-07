import { motion } from "framer-motion";
import { Profile } from "@/types/Profile";
import logoImage from "@assets/L Chopra LTD Logo_1754597750592.png";

interface ProfileSelectorProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
}

export default function ProfileSelector({ profiles, onSelectProfile }: ProfileSelectorProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <img
          src={logoImage}
          alt="LC Tech Consulting Logo"
          className="w-24 h-24 mx-auto mb-6 object-contain"
        />
        <h1 
          className="text-5xl md:text-6xl font-bold text-gray-800 tracking-wide"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          LALITA CHOPRA
        </h1>
        <div className="w-24 h-1 bg-sage mx-auto mt-4"></div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl text-sage mb-16 text-center max-w-2xl"
      >
        Choose a profile to explore different aspects of my professional journey
      </motion.p>

      {/* Profile Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="grid md:grid-cols-3 gap-8 max-w-4xl w-full"
      >
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => onSelectProfile(profile)}
            data-testid={`profile-card-${profile.id}`}
          >
            <div className="p-8 text-center">
              {/* Profile Avatar Placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sage to-accent-blue mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {profile.title.charAt(0)}
                </span>
              </div>
              
              <h3 
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {profile.title}
              </h3>
              
              <p className="text-sage text-sm leading-relaxed">
                {profile.description}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-accent-blue text-sm font-medium">
                  Click to explore →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 flex space-x-6"
      >
        <a
          href="https://www.linkedin.com/in/lalita-chopra/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:text-accent-blue transition-colors"
          data-testid="link-linkedin"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/lalitac17/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:text-accent-blue transition-colors"
          data-testid="link-instagram"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </motion.div>
    </div>
  );
}