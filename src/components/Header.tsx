import React from 'react';
import { Download, Palette, ArrowLeft } from 'lucide-react';
import { Theme, PortfolioData } from '../types/portfolio';

interface HeaderProps {
  selectedTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  portfolioData: PortfolioData;
  onBackToLanding?: () => void;
}

const themes = [
  { id: 'professional' as Theme, name: 'Professional', color: 'bg-blue-600' },
  { id: 'creative' as Theme, name: 'Creative', color: 'bg-purple-600' },
  { id: 'elegant' as Theme, name: 'Elegant', color: 'bg-green-600' }
];

export const Header: React.FC<HeaderProps> = ({ selectedTheme, onThemeChange, portfolioData, onBackToLanding }) => {
  const handleExport = () => {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${portfolioData.personalInfo.fullName.replace(/\s+/g, '_')}_portfolio.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {onBackToLanding && (
            <button
              onClick={onBackToLanding}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
          )}
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PB</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Portfolio Builder</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Palette className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">Theme:</span>
            <div className="flex space-x-2">
              {themes.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => onThemeChange(theme.id)}
                  className={`w-6 h-6 rounded-full ${theme.color} transition-all duration-200 ${
                    selectedTheme === theme.id 
                      ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' 
                      : 'hover:scale-105'
                  }`}
                  title={theme.name}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>
    </header>
  );
};