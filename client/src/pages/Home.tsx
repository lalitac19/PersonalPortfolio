import { useState } from "react";
import ProfileSelector from "@/components/ProfileSelector";
import ProfileView from "@/components/ProfileView";
import { Profile } from "@/types/Profile";
import techConsultingImage from "@assets/DSC03049_1754599015558.jpg";
import entrepreneurImage from "@assets/DSC02272 copy_1754598971970.jpg";
import fitnessImage from "@assets/IMG_3570_1754599117568.jpg";

const profiles: Profile[] = [
  {
    id: "tech-consulting",
    title: "Tech Consulting",
    description: "Strategic technology advisory and ML implementation",
    image: techConsultingImage,
    email: "tech@lalitachopra.com",
    details: {
      about: "Specializing in digital transformation and machine learning strategy for emerging markets. I help businesses leverage cutting-edge technology to scale and innovate.",
      skills: ["Machine Learning Strategy", "Digital Transformation", "Tech Architecture", "AI Implementation", "Data Analytics"],
      experience: [
        "Led ML integration projects across UAE and UK markets",
        "Advised 50+ startups on technology strategy",
        "Built scalable AI solutions for enterprise clients",
        "Developed predictive analytics platforms"
      ],
      contact: "tech@lalitachopra.com"
    }
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    description: "Building innovative ventures and communities",
    image: entrepreneurImage,
    email: "ventures@lalitachopra.com",
    details: {
      about: "Passionate about building ventures that create meaningful impact. I focus on community-driven businesses and cross-border innovation between UAE and UK.",
      skills: ["Startup Development", "Community Building", "Cross-border Business", "Venture Strategy", "Network Building"],
      experience: [
        "Founded multiple successful tech ventures",
        "Built international business communities",
        "Organized major tech conferences and events",
        "Mentored 100+ early-stage entrepreneurs"
      ],
      contact: "ventures@lalitachopra.com",
      portfolio: [
        {
          name: "Wasta",
          url: "https://wasta.ai",
          logo: "/api/placeholder/120/60",
          description: "AI-powered platform"
        },
        {
          name: "Clean Karma",
          url: "https://www.instagram.com/cleankarmaproducts/",
          logo: "/api/placeholder/120/60",
          description: "Sustainable products"
        },
        {
          name: "Unmapped",
          url: "https://unmapped.club",
          logo: "/api/placeholder/120/60",
          description: "Community platform"
        },
        {
          name: "Table4",
          url: "https://table4.app",
          logo: "/api/placeholder/120/60",
          description: "Dining experience app"
        }
      ]
    }
  },
  {
    id: "fitness-enthusiast",
    title: "Fitness Enthusiast",
    description: "Wellness advocate and active lifestyle promoter",
    image: fitnessImage,
    email: "wellness@lalitachopra.com",
    details: {
      about: "Believer in the power of fitness to enhance productivity and mental clarity. I integrate wellness principles into business strategy and daily life.",
      skills: ["Wellness Coaching", "Fitness Planning", "Mindfulness", "Work-Life Balance", "Health Optimization"],
      experience: [
        "Completed multiple marathons and fitness challenges",
        "Developed wellness programs for tech professionals",
        "Speaks at wellness and productivity conferences",
        "Advocates for mental health in entrepreneurship"
      ],
      contact: "wellness@lalitachopra.com"
    }
  }
];

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      {selectedProfile ? (
        <ProfileView 
          profile={selectedProfile} 
          onBack={() => setSelectedProfile(null)} 
        />
      ) : (
        <ProfileSelector 
          profiles={profiles} 
          onSelectProfile={setSelectedProfile} 
        />
      )}
    </div>
  );
}
