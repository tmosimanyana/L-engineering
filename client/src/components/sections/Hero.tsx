import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-industrial.png";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Industrial Engineering Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Emergency Repairs
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Reliable <span className="text-primary">Electrical</span> & <br/>
              Mechanical Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Lush Engineering delivers professional repairs, rewinding, transformer servicing, 
              and comprehensive maintenance across Botswana. Quality workmanship you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base font-bold h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={scrollToContact}
              >
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base font-bold h-12 px-8 border-white/20 text-white hover:bg-white/10"
                onClick={scrollToServices}
              >
                View Services
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-primary font-bold text-2xl">2020</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Established</div>
            </div>
            <div>
              <div className="text-primary font-bold text-2xl">BW00002121805</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">UIN Number</div>
            </div>
            <div>
              <div className="text-primary font-bold text-2xl">Francistown</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Base Location</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
