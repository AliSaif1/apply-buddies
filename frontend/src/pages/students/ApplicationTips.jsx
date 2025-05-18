import { useState } from 'react';
import TipsHeader from '../../components/students/tips/TipsHeader';
import TipsList from '../../components/students/tips/TipsList';
import TipDetail from '../../components/students/tips/TipDetail';

const ApplicationTips = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample tips data - in a real app, this could come from an API
  const tipsData = {
    all: [
      {
        id: 1,
        title: "Crafting a Strong Resume",
        category: "resume",
        content: "Tailor your resume for each position by highlighting relevant skills and experiences. Use action verbs and quantify achievements where possible.",
        readTime: "3 min read"
      },
      {
        id: 2,
        title: "Effective Cover Letters",
        category: "application",
        content: "Address the hiring manager by name if possible. Explain why you're interested in this specific role and company, not just any job.",
        readTime: "4 min read"
      },
      {
        id: 3,
        title: "Interview Preparation",
        category: "interview",
        content: "Research the company thoroughly and prepare answers to common questions. Have 2-3 thoughtful questions ready to ask your interviewer.",
        readTime: "5 min read"
      },
      {
        id: 4,
        title: "Following Up",
        category: "follow-up",
        content: "Send a thank-you email within 24 hours of your interview. If you haven't heard back after a week, it's appropriate to send a polite follow-up email.",
        readTime: "2 min read"
      },
      {
        id: 5,
        title: "Online Presence",
        category: "profile",
        content: "Ensure your LinkedIn profile is complete and professional. Consider cleaning up personal social media accounts or setting them to private.",
        readTime: "4 min read"
      }
    ],
    resume: [
      {
        id: 1,
        title: "Crafting a Strong Resume",
        category: "resume",
        content: "Tailor your resume for each position by highlighting relevant skills and experiences. Use action verbs and quantify achievements where possible.",
        readTime: "3 min read"
      }
    ],
    interview: [
      {
        id: 3,
        title: "Interview Preparation",
        category: "interview",
        content: "Research the company thoroughly and prepare answers to common questions. Have 2-3 thoughtful questions ready to ask your interviewer.",
        readTime: "5 min read"
      }
    ]
  };

  const filteredTips = activeCategory === 'all' 
    ? tipsData.all 
    : tipsData[activeCategory] || [];

  const handleTipSelect = (tip) => {
    setSelectedTip(tip);
  };

  const handleBackToList = () => {
    setSelectedTip(null);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <TipsHeader 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="p-6">
        {selectedTip ? (
          <TipDetail 
            tip={selectedTip} 
            onBack={handleBackToList} 
          />
        ) : (
          <TipsList 
            tips={filteredTips} 
            onTipSelect={handleTipSelect} 
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationTips;