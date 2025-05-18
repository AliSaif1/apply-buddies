import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchBlogs = async () => {
      try {
        // In a real app, this would be an actual API call
        const mockBlogs = [
          {
            id: 1,
            title: "The Future of Web Development",
            excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
            date: "2023-05-15",
            readTime: "5 min read",
            image: "https://source.unsplash.com/random/600x400/?web,development",
          },
          {
            id: 2,
            title: "Mastering React 19",
            excerpt: "A deep dive into the newest features of React 19 and how to leverage them in your projects.",
            date: "2023-06-22",
            readTime: "8 min read",
            image: "https://source.unsplash.com/random/600x400/?react,javascript",
          },
          {
            id: 3,
            title: "Design Systems in 2023",
            excerpt: "How modern design systems are evolving to meet the demands of complex applications.",
            date: "2023-07-10",
            readTime: "6 min read",
            image: "https://source.unsplash.com/random/600x400/?design,system",
          },
        ];
        
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        setBlogs(mockBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-neutral-DEFAULT">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-serif font-bold text-primary-dark mb-8 text-center"
        >
          Latest Articles
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <Link to={`/blog/${blog.id}`} className="block h-full">
                <div className="h-48 overflow-hidden">
                  <motion.img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary-light">{blog.date}</span>
                    <span className="text-xs bg-accent-light text-white px-2 py-1 rounded">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-dark mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="text-accent-DEFAULT font-medium hover:text-accent-dark transition-colors">
                    Read more →
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;