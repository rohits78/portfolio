import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2024 Rohit. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;