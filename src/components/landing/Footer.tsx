import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto py-8 border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-4">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/de1f185a-ffc5-43ec-9b47-07e182ea0a82.png" 
              alt="Mappen Logo" 
              className="h-6 w-auto" 
            />
            <span className="text-[#6E59A5] hover:text-[#5D4B8C] transition-colors">
              Mappen
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 Mappen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;