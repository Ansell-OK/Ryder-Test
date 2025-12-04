import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Zap, Layers, Globe, Fingerprint } from 'lucide-react';
import { FeatureType } from '../types';

const features: FeatureType[] = [
  {
    title: "TapSafe Recovery",
    description: "Forget seed phrases. Recover your wallet by tapping your Ryder on your friends' devices. Social security made simple.",
    icon: <Users className="w-6 h-6 text-primary-accent" />
  },
  {
    title: "Hardware Security",
    description: "EAL6+ Secure Element chip ensures your private keys never leave the device. Bank-grade protection in your pocket.",
    icon: <ShieldCheck className="w-6 h-6 text-secondary-accent" />
  },
  {
    title: "One-Tap Transactions",
    description: "Sign transactions instantly. No complex approvals, just a simple tap to confirm on the device.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Multi-Chain Ready",
    description: "Bitcoin, Ethereum, Solana, and 1000+ tokens supported out of the box. Manage your entire portfolio.",
    icon: <Layers className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Web3 Identity",
    description: "Your Ryder is your digital passport. Log in to dApps securely without extensions or passwords.",
    icon: <Fingerprint className="w-6 h-6 text-pink-400" />
  },
  {
    title: "Universal Access",
    description: "Works with iOS, Android, macOS, and Windows. Your crypto travels with you, everywhere.",
    icon: <Globe className="w-6 h-6 text-indigo-400" />
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background-secondary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Not just a wallet. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">A new way to own.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto"
          >
            Ryder strips away the complexity of blockchain technology, leaving you with pure ownership and zero stress.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl bg-background-card/50 backdrop-blur-sm border border-border-subtle hover:border-border-highlight hover:bg-background-cardHighlight/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};