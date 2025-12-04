import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, Cpu, WifiOff, CheckCircle } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Fort Knox in your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Back Pocket</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Ryder combines military-grade hardware security with a revolutionary social recovery system. 
            No more seed phrases written on paper.
          </motion.p>
        </div>

        {/* Feature 1: TapSafe */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
           {/* Visual Diagram */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative bg-background-card border border-border-subtle rounded-[24px] p-8 md:p-12 shadow-card-elevation overflow-hidden"
           >
              {/* Abstract Representation of TapSafe */}
              <div className="flex justify-center items-center h-[300px] relative">
                 {/* Center Node (User) */}
                 <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="w-24 h-24 rounded-full bg-background-cardHighlight border-2 border-primary-accent flex items-center justify-center relative z-20 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                 >
                    <Lock className="text-white w-10 h-10" />
                 </motion.div>
                 
                 {/* Guardians Nodes */}
                 {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-14 h-14 bg-background-cardHighlight/80 backdrop-blur-sm rounded-full border border-border-highlight flex items-center justify-center z-10"
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        whileInView={{ 
                            opacity: 1, 
                            x: Math.cos(i * 1.57 - 0.785) * 120, 
                            y: Math.sin(i * 1.57 - 0.785) * 120 
                        }}
                        transition={{ delay: 0.4 + (i * 0.1), duration: 0.6, type: "spring" }}
                    >
                        <Smartphone className="w-6 h-6 text-text-secondary" />
                        
                        {/* Connection Line */}
                        <motion.div
                             className="absolute top-1/2 left-1/2 w-[120px] h-[2px] bg-primary-accent/20 -z-10 origin-left"
                             initial={{ scaleX: 0 }}
                             whileInView={{ scaleX: 1 }}
                             style={{ 
                                 rotate: `${(i * 90 - 45) + 180}deg`,
                                 transformOrigin: "0% 50%" 
                             }}
                             transition={{ delay: 0.8 + (i * 0.1), duration: 0.4 }}
                        />
                    </motion.div>
                 ))}
                 
                 {/* Pulse Rings */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <motion.div 
                        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-24 h-24 rounded-full border border-primary-accent/30"
                     />
                 </div>
              </div>
              <div className="text-center mt-6">
                 <p className="text-sm font-mono text-primary-accent tracking-widest">TAPSAFE™ RECOVERY PROTOCOL</p>
              </div>
           </motion.div>

           {/* Content */}
           <div>
              <h3 className="text-3xl font-bold mb-6">The End of Seed Phrases</h3>
              <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                Lose your device? No problem. With TapSafe, you simply tap your new Ryder on your guardians' phones to restore your wallet using NFC.
              </p>
              
              <ul className="space-y-4">
                {[
                  "No paper backups to lose, burn, or get stolen",
                  "You choose your guardians (friends, family, or your own devices)",
                  "Threshold cryptography ensures no single guardian can access your funds",
                  "Restore access in under 60 seconds completely offline"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-secondary-accent" />
                    </div>
                    <span className="text-text-primary/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
           </div>
        </div>

        {/* Hardware Specs Grid */}
        <div className="grid md:grid-cols-3 gap-6">
           <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-[24px] bg-background-card/40 border border-border-subtle hover:border-primary-accent/40 transition-colors group"
           >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-primary-accent group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">EAL6+ Secure Element</h4>
              <p className="text-text-secondary text-sm leading-relaxed">The same military-grade chip used in top-tier passports and credit cards. Your private keys are physically isolated.</p>
           </motion.div>

           <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-[24px] bg-background-card/40 border border-border-subtle hover:border-secondary-accent/40 transition-colors group"
           >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 text-secondary-accent group-hover:scale-110 transition-transform">
                <WifiOff size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">100% Offline Architecture</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Ryder is air-gapped. It has no WiFi, Bluetooth, or cellular connection. Remote hacks are physically impossible.</p>
           </motion.div>

           <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-[24px] bg-background-card/40 border border-border-subtle hover:border-purple-500/40 transition-colors group"
           >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Verifiable Open Source</h4>
              <p className="text-text-secondary text-sm leading-relaxed">Don't trust, verify. Our firmware is open source, allowing the community to audit and ensure no backdoors exist.</p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};