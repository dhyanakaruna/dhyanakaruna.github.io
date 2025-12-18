import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'Skills', id: 'skills', path: '/' },
    { name: 'Portfolio', id: 'portfolio', path: '/' },
    { name: 'Expertise', id: 'expertise', path: '/expertise' },
    { name: 'Conferences', id: 'conferences', path: '/conferences' },
    { name: 'Contact', id: 'contact', path: '/' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small delay to ensure the element is fully rendered
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 50);
    } else {
      // If element not found, scroll to bottom of page for contact
      if (sectionId === 'contact') {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  const handleNavClick = (item) => {
    if (item.path === '/conferences' || item.path === '/expertise') {
      // Navigate to separate pages
      navigate(item.path);
    } else if (location.pathname !== '/') {
      // If we're on a separate page, navigate back to home first
      navigate('/');
      // Then scroll to section after a brief delay
      setTimeout(() => {
        scrollToSection(item.id);
      }, 100);
    } else {
      // We're already on home page, just scroll
      scrollToSection(item.id);
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('home');
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-white/20">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="text-2xl font-bold text-gradient cursor-pointer"
          >
            Dhyana
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`font-medium transition-colors duration-200 ${
                  (location.pathname === '/conferences' && item.name === 'Conferences') ||
                  (location.pathname === '/expertise' && item.name === 'Expertise')
                    ? 'text-burgundy-600 border-b-2 border-burgundy-600'
                    : location.pathname === '/' && item.name !== 'Conferences' && item.name !== 'Expertise'
                    ? 'text-gray-600 hover:text-burgundy-600'
                    : 'text-gray-600 hover:text-burgundy-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-burgundy-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left font-medium transition-colors duration-200 ${
                    (location.pathname === '/conferences' && item.name === 'Conferences') ||
                    (location.pathname === '/expertise' && item.name === 'Expertise')
                      ? 'text-burgundy-600 bg-gradient-to-r from-burgundy-50 to-maroon-50 px-4 py-2 rounded-lg border border-burgundy-200'
                      : location.pathname === '/' && item.name !== 'Conferences' && item.name !== 'Expertise'
                      ? 'text-gray-600 hover:text-burgundy-600'
                      : 'text-gray-600 hover:text-burgundy-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
