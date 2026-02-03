import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
        {/* Optional: Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 animate-pulse" 
             style={{ animationDuration: "8s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Your Brand
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoLoaded ? 1 : 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mb-8 text-xl text-gray-200 sm:text-2xl md:text-3xl"
            >
              Experience something extraordinary
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVideoLoaded ? 1 : 0, scale: isVideoLoaded ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-2xl transition-all hover:scale-105 hover:shadow-white/50">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10 opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-white">
                  Get Started
                </span>
              </button>
              
              <button className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:border-white hover:bg-white/20">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/80">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-8 w-5 rounded-full border-2 border-white/80"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-white/80"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
