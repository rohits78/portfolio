import { Code, ExternalLink, Github, Sparkles, Star, Zap } from 'lucide-react';
import { useTheme } from './ThemeContext';

const FeaturedProjects = () => {
  const { isDark } = useTheme();
  
  const projects = [
    {
      title: 'AI Finance Platform',
      description: 'An advanced full-stack AI-powered personal finance tracking application built using modern web technologies. The platform allows users to manage their transactions, view summaries, and receive smart financial suggestions through AI integration.    ',
      image: '/banner1.jpeg', // Your custom image path
      technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL','ShadCN UI', 'Prisma ORM', 'Clerk Auth', 'Gemini API(Google)', 'Inngest', 'Arcjet', 'Resend'],
      codeLink: 'https://github.com/rohits78/ai-finance-platform', // Replace with your actual GitHub link
      liveLink: 'https://ai-finance-platform-ea2j-n055fw7cf.vercel.app', // Replace with your actual live demo link
      featured: true,
      gradient: 'from-blue-600 to-purple-600',
      icon: Code
    },
    {
      title: 'Smart Notes Analyzer',
      description: 'A hybrid Java + Python desktop application that uses Natural Language Processing (NLP) to analyze text notes and generate PDF summary reports.',
      image: '/banner2.jpg', // Replace with your project screenshot
      technologies: ['Java Swing', 'Python Flask', 'spaCy, TextBlob', 'REST API'],
      codeLink: 'https://github.com/rohits78/SmartNotesAnalyzer?tab=readme-ov-file', // Your GitHub repo
      liveLink: 'https://github.com/rohits78/SmartNotesAnalyzer?tab=readme-ov-file', // Your live demo
      featured: true,
      gradient: 'from-green-600 to-teal-600',
      icon: Zap
    },
    {
      title: 'Timber Man Game 🌲🪓',
      description: 'A simple and fun Timberman-style game built with SFML in C++.',
      image: '/header.jpg', // Your project image
      technologies: ['C++', 'SFML Library'],
      codeLink: 'https://github.com/rohits78/timber-game', // Your GitHub repo
      liveLink: 'https://github.com/rohits78/timber-game', // Your live demo
      featured: true,
      gradient: 'from-orange-600 to-red-600',
      icon: Star
    },
    {
      title: 'Flappy Bird Game',
      description: 'A fun and interactive Flappy Bird clone built with HTML, CSS, and JavaScript. The game challenges players to navigate a bird through a series of obstacles!',
      image: '/banner4.jpg', // Your project image
      technologies: ['HTML', 'CSS', 'JavaScript', 'Localstorage'],
      codeLink: 'https://github.com/rohits78/Flappy-Bird-Game', // Your GitHub repo
      liveLink: 'https://rohits78.github.io/Flappy-Bird-Game', // Your live demo
      featured: true,
      gradient: 'from-purple-600 to-pink-600',
      icon: Sparkles
    }
  ];

  return (
    <section 
        id="projects" 
        className={`py-20 transition-all duration-700 relative overflow-hidden ${
          isDark ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-10 left-10 w-72 h-72 rounded-full opacity-5 transition-all duration-1000 ${
            isDark ? 'bg-blue-500' : 'bg-purple-500'
          } animate-pulse hover:scale-110`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 transition-all duration-1000 ${
            isDark ? 'bg-purple-500' : 'bg-blue-500'
          } animate-pulse hover:scale-110`}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16 group">
            <div className="inline-block relative">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Featured Projects
              </h2>
              
              {/* Animated underline */}
              <div className={`h-1 w-0 group-hover:w-full transition-all duration-700 mx-auto rounded-full ${
                isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-blue-500'
              }`}></div>
              
              {/* Floating sparkles */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <Sparkles className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-purple-500'} animate-pulse`} />
              </div>
              <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                <Star className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-500'} animate-bounce`} />
              </div>
            </div>
            
            <p className={`text-lg max-w-2xl mx-auto transition-all duration-500 transform group-hover:scale-105 ${
              isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
            }`}>
              A showcase of my recent work, featuring full-stack applications built with modern technologies
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={index}
                    className={`group/card relative rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] cursor-pointer border backdrop-blur-sm ${
                      isDark 
                        ? 'bg-gray-800/90 border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/20' 
                        : 'bg-white/90 border-gray-100/50 hover:shadow-2xl hover:shadow-purple-500/20'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Animated border gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 rounded-2xl bg-gradient-to-r ${project.gradient} p-[2px]`}>
                      <div className={`w-full h-full rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}></div>
                    </div>

                    {/* Project Image with actual image display */}
                    <div className="relative h-48 overflow-hidden">
                      {/* Actual project image */}
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:rotate-1"
                        onError={(e) => {
                          // Fallback to gradient background if image fails to load
                          e.target.style.display = 'none';
                        }}
                      />
                      
                      {/* Overlay with gradient and content */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}/70 flex items-center justify-center transition-all duration-700 group-hover/card:bg-gradient-to-br group-hover/card:${project.gradient}/50`}>
                        <div className="text-white text-center transform transition-all duration-700 group-hover/card:scale-110 group-hover/card:-rotate-1">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-700 group-hover/card:rotate-[360deg] group-hover/card:scale-125 ${
                            isDark ? 'bg-white/30 group-hover/card:bg-white/50' : 'bg-white/20 group-hover/card:bg-white/40'
                          }`}>
                            <IconComponent size={32} className="transition-all duration-700 group-hover/card:scale-110" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2 transition-all duration-500 group-hover/card:scale-110 group-hover/card:text-shadow">
                            {project.title}
                          </h3>
                          <p className="text-sm opacity-90 transition-all duration-500 group-hover/card:opacity-100 group-hover/card:scale-105">
                            Full Stack Project
                          </p>
                        </div>
                      </div>
                      
                      {/* Enhanced animated background patterns */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-30 transition-all duration-700">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse group-hover/card:animate-bounce"></div>
                        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-bounce group-hover/card:animate-spin"></div>
                        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-ping group-hover/card:animate-pulse"></div>
                        <div className="absolute top-1/2 right-4 w-1 h-1 bg-white rounded-full animate-pulse group-hover/card:animate-bounce"></div>
                        <div className="absolute bottom-4 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce group-hover/card:animate-ping"></div>
                      </div>
                      
                      {/* Animated mesh gradient overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-20 transition-all duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>

                    {/* Enhanced Project Content */}
                    <div className={`relative p-6 transition-all duration-500 ${
                      isDark 
                        ? 'group-hover/card:bg-gray-750/80' 
                        : 'group-hover/card:bg-gray-50/80'
                    }`}>
                      {/* Floating title with enhanced animation */}
                      <h3 className={`text-xl font-bold mb-3 transition-all duration-500 transform group-hover/card:scale-105 group-hover/card:-translate-y-1 ${
                        isDark 
                          ? 'text-white group-hover/card:text-blue-400' 
                          : 'text-gray-800 group-hover/card:text-blue-600'
                      }`}>
                        {project.title}
                      </h3>
                      
                      {/* Animated description */}
                      <p className={`mb-4 leading-relaxed transition-all duration-500 transform group-hover/card:scale-[1.02] ${
                        isDark 
                          ? 'text-gray-300 group-hover/card:text-gray-200' 
                          : 'text-gray-600 group-hover/card:text-gray-700'
                      }`}>
                        {project.description}
                      </p>

                      {/* Enhanced Technologies with staggered wave animation */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:rotate-2 cursor-pointer ${
                                isDark 
                                  ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/70 hover:shadow-blue-500/30' 
                                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-blue-300/50'
                              } hover:shadow-lg`}
                              style={{
                                transitionDelay: `${techIndex * 100}ms`,
                                animationDelay: `${techIndex * 100}ms`
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-4">
                        <a
                          href={project.codeLink}
                          className={`group/btn flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-500 flex-1 justify-center transform hover:scale-110 hover:-translate-y-1 hover:rotate-1 hover:shadow-lg relative overflow-hidden ${
                            isDark 
                              ? 'bg-gray-700 hover:bg-gray-600 text-white hover:shadow-gray-500/30' 
                              : 'bg-gray-800 hover:bg-gray-900 text-white hover:shadow-gray-800/30'
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          <Github size={16} className="transition-all duration-500 group-hover/btn:rotate-[360deg] group-hover/btn:scale-125 relative z-10" />
                          <span className="relative z-10">Code</span>
                        </a>
                        <a
                          href={project.liveLink}
                          className="group/btn flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-500 flex-1 justify-center transform hover:scale-110 hover:-translate-y-1 hover:-rotate-1 hover:shadow-lg hover:shadow-blue-500/30 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          <ExternalLink size={16} className="transition-all duration-500 group-hover/btn:rotate-[360deg] group-hover/btn:scale-125 relative z-10" />
                          <span className="relative z-10">Live Demo</span>
                        </a>
                      </div>
                    </div>

                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-700 pointer-events-none">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-10 blur-xl transform group-hover/card:scale-110`}></div>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced View All Projects Button */}
            <div className="text-center mt-12">
              <a
                href="https://github.com/rohits78"
                className="group/all-btn relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover/all-btn:translate-x-full transition-transform duration-1000"></div>
                <Sparkles size={16} className="transition-all duration-500 group-hover/all-btn:rotate-[360deg] group-hover/all-btn:scale-125 relative z-10" />
                <span className="relative z-10">View All Projects</span>
                <ExternalLink 
                  size={16} 
                  className="transition-all duration-500 group-hover/all-btn:rotate-[360deg] group-hover/all-btn:scale-125 relative z-10" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default FeaturedProjects;