import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold">MindflowOS</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">
              Demo
            </a>
            <button className="px-4 py-2 text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors">
              Join Waitlist
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white border-b border-gray-100">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Features
            </a>
            <a
              href="#demo"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Demo
            </a>
            <button className="w-full mt-2 px-4 py-2 text-white bg-accent rounded-lg hover:bg-accent/90">
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};