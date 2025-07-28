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
    title: "AI-Powered Community Platform",
    description: "Built a machine learning-driven platform that connects professionals across the UAE and UK tech ecosystem.",
    category: "tech",
    tags: ["Machine Learning", "Community Building"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Strategic Tech Consulting",
    description: "Led digital transformation initiatives for emerging startups, focusing on ML integration and scalable architecture.",
    category: "strategy",
    tags: ["Tech Strategy", "Digital Transformation"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700"
  },
  {
    id: 3,
    title: "Cross-Border Innovation Network",
    description: "Founded and scaled a community network connecting tech innovators between UAE and UK markets.",
    category: "community",
    tags: ["Community Building", "Innovation"],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
  },
  {
    id: 4,
    title: "ML-Driven Business Intelligence",
    description: "Developed predictive analytics solutions that helped businesses make data-driven strategic decisions.",
    category: "tech",
    tags: ["Machine Learning", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=650"
  },
  {
    id: 5,
    title: "Startup Incubation Program",
    description: "Created and managed a comprehensive program supporting early-stage tech startups in emerging markets.",
    category: "strategy",
    tags: ["Entrepreneurship", "Mentorship"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    title: "International Tech Conference",
    description: "Organized multi-day tech conference bringing together thought leaders from MENA and European markets.",
    category: "community",
    tags: ["Events", "Thought Leadership"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=550"
  },
];

const filterButtons = [
  { id: "all", label: "All Projects" },
  { id: "tech", label: "Tech & ML" },
  { id: "strategy", label: "Strategy" },
  { id: "community", label: "Community Building" },
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
