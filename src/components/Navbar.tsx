import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "./AuthModal";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, signOut } = useAuth();

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7e2ff79e-0efe-46c2-9519-d1c4c00646cf.png" 
              alt="MindflowOS Logo" 
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">
              Demo
            </a>
            <Button
              variant={user ? "outline" : "default"}
              onClick={handleAuthClick}
            >
              {user ? "Sign out" : "Sign in"}
            </Button>
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
            <Button
              variant={user ? "outline" : "default"}
              onClick={handleAuthClick}
              className="w-full"
            >
              {user ? "Sign out" : "Sign in"}
            </Button>
          </div>
        </div>
      )}

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </nav>
  );
};