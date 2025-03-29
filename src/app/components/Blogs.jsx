import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Brain, Cloud, Cpu, ArrowRight } from 'lucide-react';

export default function Blog() {
  // Ref for the section to detect when it's in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  // State for which blog card has hover effect
  const [activeCard, setActiveCard] = useState(null);
  
  // Handle card hover
  const handleCardHover = (id) => {
    setActiveCard(id);
  };
  
  const handleCardLeave = () => {
    setActiveCard(null);
  };

  // Animation variants for text reveal
  const textContainerVariants = {
    hidden: { opacity: 0.2 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.3,
      }
    }
  };
  
  const wordVariants = {
    hidden: { opacity: 0.2 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Split text into words for animation
  const renderAnimatedText = (text) => {
    return text.split(' ').map((word, i) => (
      <motion.span 
        key={i} 
        variants={wordVariants}
        className="inline-block mr-1"
      >
        {word}{' '}
      </motion.span>
    ));
  };

  // Blog post data
  const blogPosts = [
    {
      id: 'ai-revolution',
      title: 'The AI Revolution: Transforming Industries',
      excerpt: 'Explore how artificial intelligence is reshaping business operations, customer experiences, and decision-making processes across multiple sectors.',
      image: '/assets/blog/ai.jpg',
      icon: <Brain className="w-8 h-8" />,
      tags: ['Artificial Intelligence', 'Innovation', 'Technology Trends'],
      date: 'March 25, 2025'
    },
    {
      id: 'ux-design',
      title: 'UI/UX Design Principles for Enhanced User Engagement',
      excerpt: 'Discover the key design principles that can dramatically improve user experience and drive higher engagement rates on your digital platforms.',
      image: '/assets/blog/ui.jpg',
      icon: <Cpu className="w-8 h-8" />,
      tags: ['UI/UX', 'Design', 'User Experience'],
      date: 'March 18, 2025'
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing: Scaling Your Business Infrastructure',
      excerpt: 'Learn how cloud computing solutions can provide scalable, secure, and cost-effective infrastructure options for businesses of all sizes.',
      image: '/assets/blog/cloud.jpeg',
      icon: <Cloud className="w-8 h-8" />,
      tags: ['Cloud Computing', 'Infrastructure', 'Scalability'],
      date: 'March 10, 2025'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-6 md:px-20 bg-background text-text min-h-screen"
    >
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-custom-red mb-8">Our Blog</h2>
          
          <motion.p 
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl text-text max-w-4xl mx-auto leading-relaxed"
          >
            {renderAnimatedText('Insights, trends, and expert perspectives on technology, business transformation, and innovation in the digital age.')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: blogPosts.indexOf(post) * 0.2 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => handleCardHover(post.id)}
              onHoverEnd={handleCardLeave}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
              style={{
                boxShadow: activeCard === post.id 
                  ? '8px 8px 16px rgb(220, 173, 156), -8px -8px 16px #ffffff' 
                  : '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff'
              }}
            >
              <div className="relative overflow-hidden h-56">
                <motion.img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: activeCard === post.id ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                  <div className="text-custom-red">
                    {post.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm text-gray-500">{post.date}</div>
                </div>
                
                <h3 className="text-xl font-bold text-custom-red mb-3">{post.title}</h3>
                
                <p className="text-text opacity-80 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-custom-red font-medium transition-all duration-300 self-start px-4 py-2 rounded-full"
                  style={{
                    boxShadow: '4px 4px 8px rgb(255, 180, 179), -4px -4px 8px #ffffff',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.backgroundColor = '#e63946';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '4px 4px 8px rgb(255, 180, 179), -4px -4px 8px #ffffff';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#e63946';
                  }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center bg-white text-custom-red font-medium px-6 py-3 rounded-full transition-all duration-300"
            style={{
              boxShadow: '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.backgroundColor = '#e63946';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff';
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#e63946';
            }}
          >
            View All Articles
            <BookOpen className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}