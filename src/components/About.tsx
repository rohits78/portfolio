import { Code, Palette, Users, Zap } from 'lucide-react';
import { useTheme } from './ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS'
    },
    {
      icon: <Zap size={24} />,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB, PostgreSQL'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design'
    },
    {
      icon: <Users size={24} />,
      title: 'Collaboration',
      description: 'Git, Agile, Team Leadership'
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/rohitpic.jpg"
                  alt="Rohit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className={`text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                About Me
              </h2>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate full-stack developer with over 3 years of experience creating 
                digital solutions that make a difference. My journey in tech started with a 
                curiosity about how things work, and it has evolved into a love for crafting 
                beautiful, functional applications.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:shadow-md group ${
                    isDark 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-gray-50 hover:bg-blue-50'
                  }`}
                >
                  <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-800'
                  }`}>
                    {skill.title}
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;