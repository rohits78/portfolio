import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Education = () => {
  const { isDark } = useTheme();

  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Siksha \'O\' Anusandhan',
      location: 'Bhubaneswar, India',
      period: '2022 - 2026',
      grade: '8.1 CGPA',
      description: 'Currently pursuing Bachelor of Technology with specialization in Computer Science and Engineering. Strong foundation in programming, algorithms, and software development.',
      achievements: ['Consistent Academic Performance', 'Active in Technical Societies', 'Project-based Learning']
    },
    {
      degree: '12th Class (BSEB)',
      institution: 'Sri K B B S High School',
      location: 'Gopalganj, India',
      period: '2020 - 2022',
      grade: '79%',
      description: 'Completed Higher Secondary Education with Science stream, focusing on Mathematics, Physics, and Chemistry.',
      achievements: ['Science Stream Excellence', 'Mathematics Proficiency', 'Consistent Performance']
    },
    {
      degree: '10th Class (BSEB)',
      institution: 'Sri K B B S High School',
      location: 'Gopalganj, India',
      period: '2019 - 2020',
      grade: '80.2%',
      description: 'Completed Secondary Education with strong performance across all subjects, laying foundation for technical education.',
      achievements: ['Academic Excellence', 'All-round Performance', 'Strong Foundation']
    }
  ];

  return (
    <section id="education" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Education</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            My academic journey that shaped my foundation in technology and problem-solving
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-blue-800' : 'bg-blue-200'}`}></div>

            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 shadow-lg z-10 ${isDark ? 'border-gray-900' : 'border-white'}`}></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white'}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          {edu.degree}
                        </h3>
                        <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          {edu.institution}
                        </h4>
                      </div>
                      <div className={`ml-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        <GraduationCap size={24} />
                      </div>
                    </div>

                    {/* Details */}
                    <div className={`flex flex-wrap gap-4 mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Grade */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                        {edu.grade}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>Key Highlights:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className={`text-sm flex items-center gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {achievement}
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
      </div>
    </section>
  );
};

export default Education;