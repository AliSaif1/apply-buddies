import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Simulate API fetch for a single blog post
        const mockBlogs = [
          {
            id: 1,
            title: "The Future of Web Development",
            content: `
              <p>The web development landscape is evolving at an unprecedented pace. With the introduction of new frameworks, tools, and methodologies, developers need to stay ahead of the curve to remain competitive.</p>
              <h2>Emerging Technologies</h2>
              <p>Technologies like WebAssembly, Progressive Web Apps, and Serverless Architecture are changing how we build for the web. These innovations promise faster performance, better user experiences, and more efficient development workflows.</p>
              <h2>The Rise of AI in Development</h2>
              <p>Artificial Intelligence is making its way into development tools, from code completion to automated testing. This shift is enabling developers to focus more on creative problem-solving rather than repetitive tasks.</p>
            `,
            date: "May 15, 2023",
            readTime: "5 min read",
            image: "https://source.unsplash.com/random/800x500/?web,development",
            author: {
              name: "Alex Johnson",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              bio: "Senior Web Developer with 10+ years of experience in building scalable web applications."
            }
          },
          {
            id: 2,
            title: "Mastering React 19",
            content: `
              <p>React 19 introduces several groundbreaking features that significantly improve developer experience and application performance.</p>
              <h2>Concurrent Rendering</h2>
              <p>The new concurrent renderer allows React to work on multiple tasks simultaneously, resulting in smoother user interactions and better perceived performance.</p>
              <h2>Improved Server Components</h2>
              <p>Server Components have been refined to make data fetching and composition more intuitive, reducing client-side JavaScript and improving load times.</p>
            `,
            date: "June 22, 2023",
            readTime: "8 min read",
            image: "https://source.unsplash.com/random/800x500/?react,javascript",
            author: {
              name: "Sarah Miller",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              bio: "React expert and educator, passionate about making complex concepts accessible."
            }
          },
          {
            id: 3,
            title: "Design Systems in 2023",
            content: `
              <p>Design systems have become essential for maintaining consistency across large-scale applications and teams.</p>
              <h2>Component-Driven Development</h2>
              <p>The shift towards component-driven development has made design systems more valuable than ever, enabling better collaboration between designers and developers.</p>
              <h2>Accessibility by Default</h2>
              <p>Modern design systems are prioritizing accessibility from the ground up, ensuring that applications are usable by everyone regardless of ability.</p>
            `,
            date: "July 10, 2023",
            readTime: "6 min read",
            image: "https://source.unsplash.com/random/800x500/?design,system",
            author: {
              name: "Jamal Williams",
              avatar: "https://randomuser.me/api/portraits/men/75.jpg",
              bio: "Design systems architect with a focus on inclusive design principles."
            }
          }
        ];

        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        
        const foundBlog = mockBlogs.find(b => b.id === parseInt(id));
        if (!foundBlog) {
          throw new Error("Blog post not found");
        }
        
        setBlog(foundBlog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-error/10 text-error p-6 rounded-lg">
          <p className="text-xl font-medium">{error}</p>
          <Link to="/blogs" className="mt-4 inline-block text-primary hover:text-primary-dark font-medium">
            ← Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <Link 
        to="/blogs" 
        className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to all articles
      </Link>

      <article className="bg-white rounded-lg overflow-hidden shadow-card">
        <div className="h-96 overflow-hidden">
          <motion.img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-primary-light">{blog.date}</span>
            <span className="text-xs bg-accent-light text-white px-3 py-1 rounded-full">{blog.readTime}</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-6"
          >
            {blog.title}
          </motion.h1>

          <div className="flex items-center mb-8">
            <img 
              src={blog.author.avatar} 
              alt={blog.author.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-medium text-primary-dark">{blog.author.name}</p>
              <p className="text-sm text-gray-600">{blog.author.bio}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPage;