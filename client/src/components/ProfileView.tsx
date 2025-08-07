import { motion } from "framer-motion";
import { Profile } from "@/types/Profile";
import profileImage from "@assets/DSC02272_1752947688416.jpg";

interface ProfileViewProps {
  profile: Profile;
  onBack: () => void;
}

export default function ProfileView({ profile, onBack }: ProfileViewProps) {
  const handleContact = () => {
    const mailtoLink = `mailto:lalitac@icloud.com?subject=${encodeURIComponent(`Contact: ${profile.title}`)}&body=${encodeURIComponent(`Hi Lalita,\n\nI'm interested in connecting about your ${profile.title.toLowerCase()} work.\n\nBest regards`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-sage hover:text-accent-blue transition-colors"
            data-testid="button-back"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Profiles
          </button>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/lalita-chopra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-accent-blue transition-colors"
              data-testid="link-linkedin-header"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Lalita Chopra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Profile Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-sage to-accent-blue p-8 text-white text-center">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white">
              <img
                src={profileImage}
                alt="Lalita Chopra"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 
              className="text-3xl font-bold mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Lalita Chopra
            </h1>
            <p className="text-lg opacity-90">{profile.title}</p>
            <p className="text-sm opacity-75 mt-2">lalitac@icloud.com</p>
          </div>

          {/* Action Buttons */}
          <div className="px-8 py-6 border-b flex justify-center space-x-4">
            <button
              onClick={handleContact}
              className="flex items-center px-6 py-2 bg-sage text-white rounded-lg hover:bg-opacity-80 transition-all"
              data-testid="button-contact"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/lalita-chopra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 border border-sage text-sage rounded-lg hover:bg-sage hover:text-white transition-all"
              data-testid="button-linkedin"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </a>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            {/* About Section */}
            <section className="mb-8">
              <h2 
                className="text-2xl font-bold text-gray-800 mb-4 flex items-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="fas fa-user mr-3 text-sage"></i>
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {profile.details.about}
              </p>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 
                className="text-2xl font-bold text-gray-800 mb-4 flex items-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="fas fa-star mr-3 text-sage"></i>
                Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {profile.details.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 
                className="text-2xl font-bold text-gray-800 mb-4 flex items-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="fas fa-briefcase mr-3 text-sage"></i>
                Key Achievements
              </h2>
              <div className="space-y-4">
                {profile.details.experience.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 
                className="text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-4">
                Interested in collaborating or learning more about my {profile.title.toLowerCase()} work?
              </p>
              <button
                onClick={handleContact}
                className="inline-flex items-center px-8 py-3 bg-accent-blue text-white rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105"
                data-testid="button-get-in-touch"
              >
                Get in Touch
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}