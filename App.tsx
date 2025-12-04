import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AiAssistant } from './components/AiAssistant';
import { Security } from './components/Security';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-main text-text-primary selection:bg-primary-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Integrating the Gemini-powered Assistant as a key section */}
        <AiAssistant />
        <Security />
      </main>
      <Footer />
    </div>
  );
}

export default App;