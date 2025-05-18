import { useState } from 'react';
import StoriesHeader from '../../components/students/stdStory/StoriesHeader';
import StoriesList from '../../components/students/stdStory/StoriesList';
import StoryDetail from '../../components/students/stdStory/StoryDetail';

const StudentStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample student stories data
  const storiesData = {
    all: [
      {
        id: 1,
        name: "Alex Johnson",
        program: "Computer Science",
        university: "Stanford University",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "The mentorship program completely transformed my career trajectory",
        content: "Coming from a small town with limited resources, I struggled initially with the competitive environment. Through the mentorship program, I gained confidence, technical skills, and most importantly, a professional network that helped me secure internships at top tech companies.",
        tags: ["Career Change", "Mentorship", "Internship"],
        year: "2022"
      },
      {
        id: 2,
        name: "Maria Garcia",
        program: "Business Administration",
        university: "Harvard University",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "Balancing studies and family responsibilities was challenging but rewarding",
        content: "As a first-generation college student and single parent, I faced unique challenges. The university's flexible scheduling and childcare support made it possible for me to complete my degree while raising my daughter. Today, I run my own successful consulting business.",
        tags: ["First-Gen Student", "Parenting", "Entrepreneurship"],
        year: "2021"
      },
      {
        id: 3,
        name: "Jamal Williams",
        program: "Mechanical Engineering",
        university: "MIT",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        quote: "Undergraduate research opened doors I never imagined",
        content: "Participating in undergraduate research from my sophomore year gave me hands-on experience that set me apart in graduate school applications. I published two papers and now work at a leading aerospace company, thanks to the research opportunities I accessed through my professors.",
        tags: ["Research", "STEM", "Graduate School"],
        year: "2023"
      },
      {
        id: 4,
        name: "Priya Patel",
        program: "Medicine",
        university: "Johns Hopkins University",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "Overcoming imposter syndrome was my biggest achievement",
        content: "As an international student, I constantly doubted my abilities compared to my peers. The counseling services and student support groups helped me develop confidence in my skills. I'm now completing my residency at a top hospital and mentoring other international students.",
        tags: ["International Student", "Mental Health", "Mentoring"],
        year: "2020"
      }
    ],
    recent: [
      {
        id: 3,
        name: "Jamal Williams",
        program: "Mechanical Engineering",
        university: "MIT",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        quote: "Undergraduate research opened doors I never imagined",
        content: "Participating in undergraduate research from my sophomore year gave me hands-on experience that set me apart in graduate school applications. I published two papers and now work at a leading aerospace company, thanks to the research opportunities I accessed through my professors.",
        tags: ["Research", "STEM", "Graduate School"],
        year: "2023"
      },
      {
        id: 1,
        name: "Alex Johnson",
        program: "Computer Science",
        university: "Stanford University",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "The mentorship program completely transformed my career trajectory",
        content: "Coming from a small town with limited resources, I struggled initially with the competitive environment. Through the mentorship program, I gained confidence, technical skills, and most importantly, a professional network that helped me secure internships at top tech companies.",
        tags: ["Career Change", "Mentorship", "Internship"],
        year: "2022"
      }
    ],
    popular: [
      {
        id: 2,
        name: "Maria Garcia",
        program: "Business Administration",
        university: "Harvard University",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "Balancing studies and family responsibilities was challenging but rewarding",
        content: "As a first-generation college student and single parent, I faced unique challenges. The university's flexible scheduling and childcare support made it possible for me to complete my degree while raising my daughter. Today, I run my own successful consulting business.",
        tags: ["First-Gen Student", "Parenting", "Entrepreneurship"],
        year: "2021"
      },
      {
        id: 4,
        name: "Priya Patel",
        program: "Medicine",
        university: "Johns Hopkins University",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        quote: "Overcoming imposter syndrome was my biggest achievement",
        content: "As an international student, I constantly doubted my abilities compared to my peers. The counseling services and student support groups helped me develop confidence in my skills. I'm now completing my residency at a top hospital and mentoring other international students.",
        tags: ["International Student", "Mental Health", "Mentoring"],
        year: "2020"
      }
    ]
  };

  const filteredStories = activeFilter === 'all' 
    ? storiesData.all 
    : storiesData[activeFilter] || [];

  const handleStorySelect = (story) => {
    setSelectedStory(story);
  };

  const handleBackToList = () => {
    setSelectedStory(null);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <StoriesHeader 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      
      <div className="p-6">
        {selectedStory ? (
          <StoryDetail 
            story={selectedStory} 
            onBack={handleBackToList} 
          />
        ) : (
          <StoriesList 
            stories={filteredStories} 
            onStorySelect={handleStorySelect} 
          />
        )}
      </div>
    </div>
  );
};

export default StudentStories;