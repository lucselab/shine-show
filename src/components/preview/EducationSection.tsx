import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { Education } from '../../types/portfolio';

interface EducationSectionProps {
  education: Education[];
  theme: any;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education, theme }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  if (education.length === 0) return null;

  return (
    <section className="mb-12">
      <h2 className={`text-3xl font-bold ${theme.primary} mb-8 text-center`}>
        Education
      </h2>
      
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {edu.degree} in {edu.field}
                </h3>
                <p className={`text-lg font-medium ${theme.secondary} mb-2`}>
                  {edu.institution}
                </p>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                  {edu.gpa && (
                    <span className="text-sm">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {edu.achievements.length > 0 && edu.achievements[0] && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Achievements & Honors</span>
                </h4>
                <ul className="space-y-1">
                  {edu.achievements
                    .filter(achievement => achievement.trim())
                    .map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className={`w-2 h-2 ${theme.accent} rounded-full mt-2 flex-shrink-0`}></span>
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};