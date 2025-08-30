import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { PortfolioBuilder } from './components/PortfolioBuilder';
import { PortfolioPreview } from './components/PortfolioPreview';
import { Header } from './components/Header';
import { PortfolioData, Theme } from './types/portfolio';
import { defaultPortfolioData } from './data/defaultData';

function App() {
  const [showBuilder, setShowBuilder] = useState(false);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(defaultPortfolioData);
  const [selectedTheme, setSelectedTheme] = useState<Theme>('professional');
  const [activeSection, setActiveSection] = useState<string>('about');

  const updatePortfolioData = (newData: Partial<PortfolioData>) => {
    setPortfolioData(prev => ({ ...prev, ...newData }));
  };

  if (!showBuilder) {
    return <LandingPage onGetStarted={() => setShowBuilder(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        selectedTheme={selectedTheme}
        onThemeChange={setSelectedTheme}
        portfolioData={portfolioData}
        onBackToLanding={() => setShowBuilder(false)}
      />
      
      <div className="flex h-[calc(100vh-80px)]">
        <div className="w-1/2 border-r border-gray-200 overflow-y-auto">
          <PortfolioBuilder
            portfolioData={portfolioData}
            onUpdateData={updatePortfolioData}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>
        
        <div className="w-1/2 overflow-y-auto bg-white">
          <PortfolioPreview
            portfolioData={portfolioData}
            theme={selectedTheme}
            activeSection={activeSection}
          />
        </div>
      </div>
    </div>
  );
}

export default App;