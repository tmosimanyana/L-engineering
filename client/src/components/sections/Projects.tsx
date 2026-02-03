import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "@/assets/img/img1.jpeg";
import img2 from "@/assets/img/img2.jpeg";
import img3 from "@/assets/img/img3.jpeg";
import img4 from "@/assets/img/img4.jpeg";

export function Projects() {
  const projects = [
    {
      title: "Mining Pump Overhaul",
      category: "Mechanical Repair",
      image: img1
    },
    {
      title: "Substation Upgrade",
      category: "Electrical Installation",
      image: img2
    },
    {
      title: "Motor Rewinding (300kW)",
      category: "Motor Services",
      image: img3
    },
    {
      title: "Factory Maintenance Contract",
      category: "Ongoing Service",
      image: img4
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
