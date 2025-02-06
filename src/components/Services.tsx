import { Code, Palette, LineChart, Users, Megaphone, Lock } from "lucide-react";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance digital experiences",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Consulting",
    description: "Expert guidance for your digital transformation journey",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Brand Strategy",
    description: "Comprehensive branding solutions for lasting impact",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Security",
    description: "Robust security measures to protect your digital assets",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-dark text-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-neon">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-800 rounded-lg hover:border-neon 
                       transition-all duration-300 group cursor-pointer"
            >
              <div className="text-neon mb-4 group-hover:animate-float">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};