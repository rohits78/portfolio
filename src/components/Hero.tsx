import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const Hero = () => {
  const { isDark } = useTheme();

  // Your Google Drive CV link (replace with your actual link)
  const CV_DRIVE_LINK = "https://drive.google.com/file/d/1aDB1VebAmVqD42X30yHLkFWXnnVb-Sma/view?usp=sharing";

  // Function to smooth scroll to experience section
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to download CV
  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = CV_DRIVE_LINK;
    link.download = 'RohitKumar_Resume.pdf'; // You can customize the filename
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Dark Mode Toggle Button */}
      <ThemeToggle />

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className={`text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Rohit
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Full Stack Developer & Problem Solver
              </p>
              <p className={`text-lg max-w-2xl transition-colors duration-300 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Passionate about creating beautiful, functional, and user-centered digital experiences. 
                I bring ideas to life through clean code and thoughtful design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={scrollToExperience}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                View My Work
              </button>
              <button 
                onClick={downloadCV}
                className={`border-2 px-8 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer hover:scale-105 ${
                isDark 
                  ? 'border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400' 
                  : 'border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600'
              }`}>
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com/rohits78" className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
              }`}>
                <Github size={20} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
              </a>
              <a href="https://www.linkedin.com/in/rohit42330b/" className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
              }`}>
                <Linkedin size={20} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
              </a>
              <a href="mailto:kumarrohit49751663737@gmail.com?subject=Hello%20Rohit&body=Hi%20Rohit,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you." className={`p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 ${
                isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
              }`}>
                <Mail size={20} className={isDark ? 'text-gray-300' : 'text-gray-700'} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className={`w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 transition-all duration-300 ${
                isDark ? 'border-gray-700' : 'border-white'
              }`}>
                <img
                  src="/rohitpic.jpg"
                  alt="Rohit"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
        </div>
      </div>
    </section>
  );
};

export default Hero;