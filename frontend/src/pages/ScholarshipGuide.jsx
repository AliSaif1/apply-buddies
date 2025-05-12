import { useState } from 'react';
import GuideHeader from '../components/guide/GuideHeader';
import GuideList from '../components/guide/GuideList';
import GuideDetail from '../components/guide/GuideDetail';

const ScholarshipGuide = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample scholarship guide data
  const guidesData = {
    all: [
      {
        id: 1,
        title: "Finding Suitable Scholarships",
        category: "search",
        content: "Start your search early and use multiple sources. Check with your school's financial aid office, local organizations, and reputable online databases. Look for scholarships that match your unique qualifications.",
        readTime: "4 min read",
        tips: [
          "Create a list of potential scholarships with deadlines",
          "Look beyond academic achievements - many scholarships consider community service, hobbies, or unique traits",
          "Set up alerts for new scholarship opportunities"
        ]
      },
      {
        id: 2,
        title: "Writing Winning Essays",
        category: "application",
        content: "Your essay should tell a compelling story about who you are. Answer the prompt directly, be authentic, and proofread carefully. Have someone else review your essay before submission.",
        readTime: "6 min read",
        tips: [
          "Start with a strong opening that grabs attention",
          "Use specific examples rather than general statements",
          "Keep the tone professional but let your personality shine through"
        ]
      },
      {
        id: 3,
        title: "Letters of Recommendation",
        category: "application",
        content: "Choose recommenders who know you well and can speak to your strengths. Provide them with information about the scholarship and your accomplishments to help them write a strong letter.",
        readTime: "3 min read",
        tips: [
          "Ask recommenders at least one month before deadlines",
          "Provide them with your resume and specific points to include",
          "Follow up with thank you notes"
        ]
      },
      {
        id: 4,
        title: "Avoiding Scholarship Scams",
        category: "safety",
        content: "Legitimate scholarships never require payment to apply. Be wary of offers that seem too good to be true or ask for sensitive financial information. Research organizations before applying.",
        readTime: "5 min read",
        tips: [
          "Never pay to apply for a scholarship",
          "Check the legitimacy of the sponsoring organization",
          "Be cautious of scholarships that ask for bank account information"
        ]
      },
      {
        id: 5,
        title: "Managing Award Money",
        category: "financial",
        content: "Understand the terms of your scholarship awards. Some funds go directly to your school while others may be sent to you. Keep track of any reporting requirements or renewal criteria.",
        readTime: "4 min read",
        tips: [
          "Create a spreadsheet to track award amounts and requirements",
          "Understand tax implications of scholarship money",
          "Meet all renewal criteria to maintain your funding"
        ]
      }
    ],
    search: [
      {
        id: 1,
        title: "Finding Suitable Scholarships",
        category: "search",
        content: "Start your search early and use multiple sources. Check with your school's financial aid office, local organizations, and reputable online databases. Look for scholarships that match your unique qualifications.",
        readTime: "4 min read",
        tips: [
          "Create a list of potential scholarships with deadlines",
          "Look beyond academic achievements - many scholarships consider community service, hobbies, or unique traits",
          "Set up alerts for new scholarship opportunities"
        ]
      }
    ],
    application: [
      {
        id: 2,
        title: "Writing Winning Essays",
        category: "application",
        content: "Your essay should tell a compelling story about who you are. Answer the prompt directly, be authentic, and proofread carefully. Have someone else review your essay before submission.",
        readTime: "6 min read",
        tips: [
          "Start with a strong opening that grabs attention",
          "Use specific examples rather than general statements",
          "Keep the tone professional but let your personality shine through"
        ]
      },
      {
        id: 3,
        title: "Letters of Recommendation",
        category: "application",
        content: "Choose recommenders who know you well and can speak to your strengths. Provide them with information about the scholarship and your accomplishments to help them write a strong letter.",
        readTime: "3 min read",
        tips: [
          "Ask recommenders at least one month before deadlines",
          "Provide them with your resume and specific points to include",
          "Follow up with thank you notes"
        ]
      }
    ]
  };

  const filteredGuides = activeCategory === 'all' 
    ? guidesData.all 
    : guidesData[activeCategory] || [];

  const handleGuideSelect = (guide) => {
    setSelectedGuide(guide);
  };

  const handleBackToList = () => {
    setSelectedGuide(null);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <GuideHeader 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="p-6">
        {selectedGuide ? (
          <GuideDetail 
            guide={selectedGuide} 
            onBack={handleBackToList} 
          />
        ) : (
          <GuideList 
            guides={filteredGuides} 
            onGuideSelect={handleGuideSelect} 
          />
        )}
      </div>
    </div>
  );
};

export default ScholarshipGuide;