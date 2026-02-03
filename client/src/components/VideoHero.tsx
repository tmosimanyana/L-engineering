import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsVideoLoaded(true);

    video.addEventListener("loadeddata", handleLoadedData);

    // Kick playback (helps some browsers)
    video.play().catch(() => {
      // ignored: autoplay policies vary, but muted+playsInline usually works
    });

    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* ✅ MUST match your public/videos path */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Content (pushed below fixed navbar) */}
      <div className="relative z-10 flex h-full items-center justify-center pt-16 md:pt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isVideoLoaded ? 1 : 0,
              y: isVideoLoaded ? 0 : 30,
            }}
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
              animate={{
                opacity: isVideoLoaded ? 1 : 0,
                scale: isVideoLoaded ? 1 : 0.8,
              }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-2xl transition-all hover:scale-105">
                Get Started
              </button>
              <button className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
