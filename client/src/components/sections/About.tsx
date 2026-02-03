import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Excellence in Engineering Since 2020</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Lush Engineering Proprietary Limited is a Botswana-based engineering company 
              specialising in electrical and mechanical repairs, motor rewinding, transformer servicing, 
              heavy-duty pump repairs, and ongoing maintenance.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are committed to quality workmanship, safety, and reliable service delivery. 
              Our team of skilled technicians ensures that your industrial equipment operates 
              at peak efficiency, minimizing downtime and maximizing productivity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Electrical Repairs", "Mechanical Works", "Safety Compliant", "Nationwide Service"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col justify-center h-full min-h-[160px]">
                  <span className="text-4xl font-bold text-white mb-2">100+</span>
                  <span className="text-muted-foreground">Projects Completed</span>
                </CardContent>
              </Card>
              <Card className="bg-primary text-primary-foreground border-none translate-y-8">
                <CardContent className="p-6 flex flex-col justify-center h-full min-h-[160px]">
                  <span className="text-4xl font-bold text-primary-foreground mb-2">24/7</span>
                  <span className="text-primary-foreground/80">Support Available</span>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm -translate-y-8">
                <CardContent className="p-6 flex flex-col justify-center h-full min-h-[160px]">
                  <span className="text-4xl font-bold text-white mb-2">100%</span>
                  <span className="text-muted-foreground">Client Satisfaction</span>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col justify-center h-full min-h-[160px]">
                  <span className="text-4xl font-bold text-white mb-2">5+</span>
                  <span className="text-muted-foreground">Years Experience</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
