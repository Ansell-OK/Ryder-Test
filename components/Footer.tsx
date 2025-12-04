import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-main pt-16 pb-8 border-t border-border-subtle">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 rounded-lg bg-primary-accent flex items-center justify-center text-white font-bold text-xl">R</div>
               <span className="font-bold text-xl">Ryder</span>
            </div>
            <p className="text-text-secondary text-sm">
              The first hardware wallet built for human beings, not machines.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-primary-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Tech Specs</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-primary-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-primary-accent transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary-accent transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">© 2024 Ryder. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-text-secondary">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};