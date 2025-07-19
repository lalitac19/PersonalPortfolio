import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern online store with intuitive user experience and seamless checkout process.",
    category: "web",
    tags: ["Web Design", "UI/UX"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Comprehensive fitness application with workout tracking and social features.",
    category: "app",
    tags: ["Mobile App", "Health"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description: "Complete brand identity including logo, color palette, and brand guidelines.",
    category: "branding",
    tags: ["Branding", "Logo Design"],
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 4,
    title: "Creative Portfolio",
    description: "Artist portfolio website showcasing creative works with elegant presentation.",
    category: "web",
    tags: ["Portfolio", "Creative"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650"
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Productivity app designed to help teams collaborate and manage projects efficiently.",
    category: "app",
    tags: ["Productivity", "Team Tools"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    title: "Restaurant Branding",
    description: "Complete restaurant brand identity including logo, menu design, and marketing materials.",
    category: "branding",
    tags: ["Branding", "Restaurant"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550"
  },
];

const filterButtons = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Design" },
  { id: "app", label: "App Design" },
  { id: "branding", label: "Branding" },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ref, inView] = useScrollAnimation();

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-bold text-4xl lg:text-5xl text-center mb-16"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          My Portfolio
        </motion.h2>

        {/* Portfolio Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === button.id
                  ? "bg-accent-blue text-white"
                  : "bg-white text-gray-700 hover:bg-accent-blue hover:text-white"
              }`}
            >
              {button.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="masonry-grid"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="masonry-item"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-sage mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-sm rounded-full ${
                          tagIndex % 2 === 0
                            ? "bg-accent-blue bg-opacity-20 text-accent-blue"
                            : "bg-sage bg-opacity-20 text-sage"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
