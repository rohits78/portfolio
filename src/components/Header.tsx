import { Briefcase, Code, FolderOpen, GraduationCap, Home, Mail, Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home size={18} /> },
    { href: '#about', label: 'About', icon: <User size={18} /> },
    { href: '#education', label: 'Education', icon: <GraduationCap size={18} /> },
    { href: '#experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { href: '#projects', label: 'Projects', icon: <FolderOpen size={18} /> },
    { href: '#skills', label: 'Skills', icon: <Code size={18} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update active section immediately
      setActiveSection(targetId);
      
      // Close mobile menu
      setIsMenuOpen(false);
      
      // Add a subtle click animation
      const navElement = e.currentTarget;
      navElement.style.transform = 'scale(0.95)';
      setTimeout(() => {
        navElement.style.transform = 'scale(1)';
      }, 150);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with hover effect */}
          <div className="relative group">
            <div className="text-2xl font-bold text-gray-800 transition-all duration-300 group-hover:text-blue-600 cursor-pointer">
              Portfolio
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {/* Icon with animation */}
                  <span className={`transition-all duration-300 ${
                    isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                  } group-hover:scale-110 group-hover:rotate-12`}>
                    {item.icon}
                  </span>
                  
                  {/* Label */}
                  <span className="relative overflow-hidden">
                    {item.label}
                    {/* Underline animation */}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'group-hover:w-full'
                    }`}></span>
                  </span>
                  
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-50 -z-10 transition-opacity duration-300"></div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
              }`}>
                <Menu size={24} />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
              }`}>
                <X size={24} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group flex items-center gap-3 py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {/* Icon with animation */}
                  <span className={`transition-all duration-300 ${
                    isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                  } group-hover:scale-110 group-hover:rotate-12`}>
                    {item.icon}
                  </span>
                  
                  {/* Label */}
                  <span className="flex-1">{item.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;