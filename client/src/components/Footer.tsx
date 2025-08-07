export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/lalitac17",
      icon: "fab fa-instagram"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/lalita-chopra",
      icon: "fab fa-linkedin"
    },
    {
      name: "PayPal",
      url: "https://www.paypal.com/paypalme/lalitachopra", 
      icon: "fab fa-paypal"
    },

  ];

  return (
    <footer className="bg-cream border-t border-gray-200 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-4 sm:space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:text-accent-blue transition-colors p-2"
                data-testid={`link-${social.name.toLowerCase()}`}
                title={social.name}
              >
                <i className={`${social.icon} text-xl sm:text-2xl`}></i>
              </a>
            ))}
          </div>
          
          {/* Copyright Text */}
          <p className="text-sm text-gray-600 text-center">
            © 2023 Lalita Chopra All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}