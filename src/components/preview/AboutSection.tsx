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
          {personalInfo.name}
        </h1>
        
        <p className={`text-xl font-medium ${theme.primary} mb-4`}>
          {personalInfo.title}
        </p>
        
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.about}
        </p>
      </div>

        <p className={`text-lg italic ${theme.secondary} mb-4`}>
          {personalInfo.slogan}
        </p>
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
        
        {personalInfo.contactInfo.phone && (
          <a
            href={`tel:${personalInfo.contactInfo.phone}`}
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Phone className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">{personalInfo.contactInfo.phone}</span>
          </a>
        )}
        
        {personalInfo.contactInfo.address && (
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <MapPin className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">{personalInfo.contactInfo.address}</span>
          </div>
        )}
        
        {personalInfo.socialLinks.resume && (
          <a
            href={personalInfo.socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Globe className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">Resume</span>
          </a>
        )}
        
        {personalInfo.socialLinks.linkedin && (
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Linkedin className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">LinkedIn</span>
          </a>
        )}
        
        {personalInfo.socialLinks.github && (
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Github className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">GitHub</span>
          {personalInfo.bio}
        )}
        
        {personalInfo.socialLinks.twitter && (
          <a
            href={personalInfo.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Globe className={`w-5 h-5 ${theme.primary}`} />
            <span className="text-gray-700">Twitter</span>
          </a>
        )}
      </div>
    </section>
  );
};