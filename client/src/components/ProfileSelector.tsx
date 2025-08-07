import { motion } from "framer-motion";
import { Profile } from "@/types/Profile";
import logoImage from "@assets/L Chopra LTD Logo_1754598075575.png";
import Footer from "./Footer";

interface ProfileSelectorProps {
  profiles: Profile[];
  onSelectProfile: (profile: Profile) => void;
}

export default function ProfileSelector({ profiles, onSelectProfile }: ProfileSelectorProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
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
            className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 object-contain"
          />
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            LALITA CHOPRA
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-sage mx-auto mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-sage mb-8 sm:mb-12 md:mb-16 text-center max-w-2xl px-4"
        >Select a character</motion.p>

        {/* Profile Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl w-full px-4"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
              onClick={() => onSelectProfile(profile)}
              data-testid={`profile-card-${profile.id}`}
            >
              <div className="p-6 sm:p-8 text-center">
                {/* Profile Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-2 border-sage">
                  <img
                    src={profile.image}
                    alt={`${profile.title} profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 
                  className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {profile.title}
                </h3>
                
                <p className="text-sage text-sm leading-relaxed mb-4">
                  {profile.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-accent-blue text-sm font-medium">
                    Click to explore →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}