import { Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import { useTheme } from './ThemeContext';

const SkillsExpertise = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      icon: <Globe size={32} />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <Database size={32} />,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Terminal size={32} />,
      title: 'DevOps',
      skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code size={32} />,
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 transition-colors duration-500 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border relative overflow-hidden ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/10' 
                    : 'bg-white border-gray-100 hover:border-blue-200'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Icon Container */}
                <div className="mb-6 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                    isDark 
                      ? 'bg-gray-700 text-blue-400 group-hover:bg-gradient-to-br group-hover:' + category.gradient + ' group-hover:text-white' 
                      : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    {category.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 relative z-10 ${
                  isDark 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-800 group-hover:text-blue-600'
                }`}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="transform transition-all duration-300 hover:translate-x-2"
                      style={{
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      <span className={`inline-block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-default ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-blue-400 group-hover:bg-gray-600 group-hover:text-blue-400' 
                          : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 group-hover:bg-blue-50 group-hover:text-blue-700'
                      }`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-600' 
                    : 'bg-gradient-to-br from-blue-50 to-purple-50'
                }`}></div>

                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${category.gradient} blur-sm`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className={`rounded-2xl p-8 max-w-4xl mx-auto transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              Always Learning, Always Growing
            </h3>
            <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm passionate about staying up-to-date with the latest technologies and best practices. 
              Currently exploring cloud technologies, microservices architecture, and advanced React patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Problem Solving', 'Team Collaboration', 'Agile Development', 'Code Review', 'Mentoring'].map((soft, index) => (
                <span 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 ${
                    isDark 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {soft}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .group:nth-child(1) { animation-delay: 0ms; }
        .group:nth-child(2) { animation-delay: 100ms; }
        .group:nth-child(3) { animation-delay: 200ms; }
        .group:nth-child(4) { animation-delay: 300ms; }
        .group:nth-child(5) { animation-delay: 400ms; }
        .group:nth-child(6) { animation-delay: 500ms; }
      `}</style>
    </section>
  );
};

export default SkillsExpertise;