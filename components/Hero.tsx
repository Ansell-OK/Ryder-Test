import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background-main">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.20)_0%,rgba(5,6,10,0)_70%)] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-accent text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-accent"></span>
            </span>
            Batch 2 Pre-orders Open
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Putting Crypto <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">in Every Pocket.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg leading-relaxed">
            Ryder replaces seed phrases with social trust. The world's first hardware wallet that's as easy to use as your favorite messaging app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              Get Ryder
            </Button>
            <Button variant="secondary" icon={<PlayCircle size={18} />}>
              Watch Keynote
            </Button>
          </div>
        </motion.div>

        {/* Right: 3D Mockup Visual */}
        <motion.div
          className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
          style={{ y: y2 }}
        >
          {/* Main Product Card - 3D Tilt Effect */}
          <motion.div
            className="relative z-20 w-[300px] md:w-[350px] aspect-[9/16] bg-black rounded-[40px] border-[8px] border-[#1C1C1E] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
            initial={{ rotateY: -15, rotateX: 5, opacity: 0 }}
            animate={{ rotateY: -15, rotateX: 5, opacity: 1 }}
            whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
             {/* Mockup Screen Content */}
             <div className="absolute inset-0 bg-background-secondary flex flex-col">
                <div className="h-full w-full bg-[url('https://picsum.photos/seed/tech/800/1200')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent">
                  <div className="flex justify-between items-center text-white">
                     <span className="font-bold">Ryder</span>
                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                   <div className="text-3xl font-bold text-white mb-2">$12,450.00</div>
                   <div className="text-green-400 text-sm font-medium">+2.5% today</div>
                   <div className="mt-6 flex gap-3">
                      <button className="flex-1 bg-primary-accent py-3 rounded-full text-sm font-bold text-white">Send</button>
                      <button className="flex-1 bg-white/10 py-3 rounded-full text-sm font-bold text-white">Receive</button>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute top-1/4 right-0 md:-right-12 p-4 bg-background-cardHighlight/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl z-30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">A</div>
              <div>
                <p className="text-xs text-text-secondary">Recovered by</p>
                <p className="text-sm font-bold text-white">Alice & Bob</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-1/4 left-0 md:-left-12 p-4 bg-background-cardHighlight/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl z-30"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary">Status</p>
                <p className="text-sm font-bold text-white">TapSafe Active</p>
              </div>
            </div>
          </motion.div>

          {/* Glow behind product */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-primary-accent/20 blur-[100px] -z-10" />

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </motion.div>
    </section>
  );
};