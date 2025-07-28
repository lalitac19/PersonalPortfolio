import { useEffect, useState } from "react";
import profileImage from "@assets/DSC02272_1752947688416.jpg";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: "fas fa-home", label: "Home" },
    { id: "about", icon: "fas fa-user", label: "About" },
    { id: "portfolio", icon: "fas fa-briefcase", label: "Portfolio" },
    { id: "contact", icon: "fas fa-envelope", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 h-screen w-20 lg:w-64 bg-white shadow-lg z-50 transition-all duration-300">
      <div className="flex flex-col h-full p-4">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={profileImage}
            alt="Professional headshot"
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover mb-2 lg:mb-4"
          />
          <h2 className="hidden lg:block font-semibold text-lg text-center">
            Lalita Chopra
          </h2>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center w-full p-2 lg:p-3 rounded-lg transition-colors group ${
                    activeSection === item.id ? "bg-gray-100" : "hover:bg-gray-100"
                  }`}
                >
                  <i
                    className={`${item.icon} text-sage text-lg lg:text-xl group-hover:text-accent-blue ${
                      activeSection === item.id ? "text-accent-blue" : ""
                    }`}
                  ></i>
                  <span
                    className={`hidden lg:block ml-3 font-medium group-hover:text-accent-blue ${
                      activeSection === item.id ? "text-accent-blue" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="border-t pt-4">
          <div className="flex lg:flex-col justify-center lg:justify-start space-x-4 lg:space-x-0 lg:space-y-3">
            <a
              href="https://www.linkedin.com/in/lalita-chopra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-accent-blue transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/lalitac17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-accent-blue transition-colors"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
