import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsExpertise from './components/SkillsExpertise';
import { ThemeProvider, useTheme } from './components/ThemeContext';

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDark 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <FeaturedProjects />
      <SkillsExpertise />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;