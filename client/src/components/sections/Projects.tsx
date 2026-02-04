import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import projectImg from "@/assets/project-pump.png";

export function Projects() {
  const projects = [
    {
      title: "Mining Pump Overhaul",
      category: "Mechanical Repair",
      image: projectImg
    },
    {
      title: "Substation Upgrade",
      category: "Electrical Installation",
      image: projectImg // Reusing for mockup
    },
    {
      title: "Motor Rewinding (300kW)",
      category: "Motor Services",
      image: projectImg // Reusing for mockup
    },
    {
      title: "Factory Maintenance Contract",
      category: "Ongoing Service",
      image: projectImg // Reusing for mockup
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Recent Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border group cursor-pointer h-[300px] relative">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h4 className="text-white text-xl font-bold">{project.title}</h4>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
