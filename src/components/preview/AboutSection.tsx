import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { PersonalInfo } from '../../types/portfolio';

interface AboutSectionProps {
  personalInfo: PersonalInfo;
  theme: any;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo, theme }) => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.fullName}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {personalInfo.fullName}
        </h1>
        
        <p className={`text-xl font-medium ${theme.primary} mb-4`}>
          {personalInfo.title}
        </p>
        
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.about}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {personalInfo.email && (
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Mail className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">{personalInfo.email}</span>
          </a>
        )}
        
        {personalInfo.phone && (
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Phone className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">{personalInfo.phone}</span>
          </a>
        )}
        
        {personalInfo.location && (
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <MapPin className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">{personalInfo.location}</span>
          </div>
        )}
        
        {personalInfo.website && (
          <a
            href={personalInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Globe className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">Website</span>
          </a>
        )}
        
        {personalInfo.linkedin && (
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Linkedin className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">LinkedIn</span>
          </a>
        )}
        
        {personalInfo.github && (
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Github className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">GitHub</span>
          </a>
        )}
      </div>
    </section>
  );
};