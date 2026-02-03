import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/img/hero.webp";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroImg} 
          alt="Lush Engineering - Your Experts in Electrical Engineering"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Animated Overlay Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating particles effect */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              y: [null, Math.random() * -100, Math.random() * 100],
              x: [null, Math.random() * 50 - 25],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Logo Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.3)",
                    "0 0 30px rgba(251, 191, 36, 0.5)",
                    "0 0 20px rgba(251, 191, 36, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-foreground">LUSH </span>
                <span className="text-primary">ENGINEERING</span>
              </motion.h1>
            </motion.div>

            {/* Tagline with typing effect */}
            <motion.p 
              className="text-xl md:text-3xl font-bold mb-6 text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              "Your Experts in Electrical Engineering"
            </motion.p>

            <motion.p 
              className="text-lg md:text-2xl text-foreground mb-8 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              We offer a full range of services, from electrical repairs to construction!
            </motion.p>

            {/* Animated Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6"
                >
                  Contact Us: +267 74 689 754
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={scrollToServices}
                  className="font-bold text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Our Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 10px rgba(251, 191, 36, 0.5)",
              "0 0 20px rgba(251, 191, 36, 0.8)",
              "0 0 10px rgba(251, 191, 36, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-full p-2"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
