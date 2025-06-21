import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useTheme } from './ThemeContext';

interface ThemeToggleProps {
  className?: string;
  position?: 'fixed' | 'absolute' | 'relative';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  position = 'absolute' 
}) => {
  const { isDark, toggleTheme } = useTheme();

  const positionClasses = {
    fixed: 'fixed top-20 right-6 z-50',
    absolute: 'absolute top-20 right-6 z-10',
    relative: 'relative'
  };

  return (
    <div className={`${positionClasses[position]} ${className}`}>
      <button
        onClick={toggleTheme}
        className={`relative w-16 h-8 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isDark 
            ? 'bg-gray-700 border-2 border-gray-600 focus:ring-purple-500' 
            : 'bg-gray-200 border-2 border-gray-300 focus:ring-blue-500'
        } shadow-lg hover:shadow-xl`}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
          isDark 
            ? 'translate-x-8 bg-gray-800 shadow-md' 
            : 'translate-x-0 bg-white shadow-md'
        } hover:scale-110`}>
          {isDark ? (
            <Moon size={14} className="text-blue-400 transition-all duration-300" />
          ) : (
            <Sun size={14} className="text-yellow-500 transition-all duration-300" />
          )}
        </div>
        
        {/* Background shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 transform -skew-x-12"></div>
      </button>
    </div>
  );
};

export default ThemeToggle;