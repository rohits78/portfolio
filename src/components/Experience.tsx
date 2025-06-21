import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();
  
  const experiences = [
    {
      title: 'Social Winter of Code Contributor',
      company: 'Open Source Community',
      location: 'Remote',
      period: 'Jan 2024 - Feb 2024',
      type: 'Open Source',
      description: 'Contributed to multiple open-source projects during Social Winter of Code, focusing on feature development and performance optimization in React-based applications.',
      responsibilities: [
        'Implemented 3+ new features in open-source projects',
        'Collaborated with distributed development teams using version control systems',
        'Optimized React components to reduce unnecessary re-renders',
        'Participated in code reviews and maintained coding standards'
      ],
      technologies: ['React', 'JavaScript', 'Git', 'GitHub', 'Open Source'],
      achievements: [
        'Elevated project performance by implementing 3+ new features',
        'Improved website performance by 35% through React optimization',
        'Successfully collaborated in distributed version control systems',
        'Gained experience in open-source development practices'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Experience</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            My professional journey and contributions to the tech community
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50'}`}>
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Basic Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}>
                      <Briefcase size={20} className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {exp.title}
                      </h3>
                      <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  <div className={`space-y-2 text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                      {exp.type}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h5 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm border ${isDark ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-white text-gray-700 border-gray-200'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-2/3">
                  <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h5 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className={`flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={`flex items-start gap-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;