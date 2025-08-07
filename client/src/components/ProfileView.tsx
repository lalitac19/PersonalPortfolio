import { motion } from "framer-motion";
import { Profile } from "@/types/Profile";
import profileImage from "@assets/DSC02272_1752947688416.jpg";
import Footer from "./Footer";

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-sage hover:text-accent-blue transition-colors text-sm sm:text-base"
            data-testid="button-back"
          >
            <i className="fas fa-arrow-left mr-1 sm:mr-2"></i>
            <span className="hidden sm:inline">Back to Profiles</span>
            <span className="sm:hidden">Back</span>
          </button>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://www.linkedin.com/in/lalita-chopra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-accent-blue transition-colors"
              data-testid="link-linkedin-header"
            >
              <i className="fab fa-linkedin text-lg sm:text-xl"></i>
            </a>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
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
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-sage to-accent-blue p-6 sm:p-8 text-white text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white">
              <img
                src={profile.image}
                alt={`Lalita Chopra - ${profile.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Lalita Chopra
            </h1>
            <p className="text-base sm:text-lg opacity-90">{profile.title}</p>
            <p className="text-xs sm:text-sm opacity-75 mt-2">lalitac@icloud.com</p>
          </div>

          {/* Action Buttons */}
          <div className="px-4 sm:px-8 py-6 border-b flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              onClick={handleContact}
              className="flex items-center justify-center px-6 py-2 bg-sage text-white rounded-lg hover:bg-opacity-80 transition-all text-sm sm:text-base"
              data-testid="button-contact"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/lalita-chopra/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-2 border border-sage text-sage rounded-lg hover:bg-sage hover:text-white transition-all text-sm sm:text-base"
              data-testid="button-linkedin"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </a>
          </div>

          {/* Profile Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            {/* About Section */}
            <section className="mb-8">
              <h2 
                className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="fas fa-user mr-2 sm:mr-3 text-sage"></i>
                About
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {profile.details.about}
              </p>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 
                className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="fas fa-star mr-2 sm:mr-3 text-sage"></i>
                Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <i className="fas fa-briefcase mr-2 sm:mr-3 text-sage"></i>
                Key Achievements
              </h2>
              <div className="space-y-4">
                {profile.details.experience.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent-blue rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio Section - Only for Entrepreneur */}
            {profile.details.portfolio && (
              <section className="mb-8">
                <h2 
                  className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <i className="fas fa-rocket mr-2 sm:mr-3 text-sage"></i>
                  Portfolio
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {profile.details.portfolio.map((company, index) => (
                    <motion.a
                      key={company.name}
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      data-testid={`portfolio-${company.name.toLowerCase()}`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-20 h-10 bg-gray-100 rounded-lg flex items-center justify-center border">
                          <span className="text-sage font-bold text-sm">
                            {company.name}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-800 text-center mb-2">
                        {company.name}
                      </h3>
                      {company.description && (
                        <p className="text-gray-600 text-sm text-center">
                          {company.description}
                        </p>
                      )}
                      <div className="mt-3 text-center">
                        <span className="text-accent-blue text-xs font-medium">
                          Visit Site →
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </section>
            )}

            {/* Contact Section */}
            <section className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center">
              <h3 
                className="text-lg sm:text-xl font-bold text-gray-800 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Interested in collaborating or learning more about my {profile.title.toLowerCase()} work?
              </p>
              <button
                onClick={handleContact}
                className="inline-flex items-center px-6 sm:px-8 py-3 bg-accent-blue text-white rounded-lg hover:bg-sage transition-all transform hover:scale-105 text-sm sm:text-base"
                data-testid="button-get-in-touch"
              >
                Get in Touch
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}