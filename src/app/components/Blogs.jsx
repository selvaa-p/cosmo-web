// src\app\components\Blogs.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getRecentPosts } from '../data/blogData';

// Animation variants
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

// Blog card component with enhanced responsiveness
const BlogCard = React.memo(({ post, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.article
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
      style={{
        boxShadow: isHovered 
          ? '8px 8px 16px rgb(220, 173, 156), -8px -8px 16px #ffffff' 
          : '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff'
      }}
    >
      <div className="relative overflow-hidden w-full aspect-[16/9]">
        <div className="w-full h-full relative">
          <Image 
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            className="transition-transform duration-500"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white p-1.5 sm:p-2 rounded-full shadow-md flex items-center justify-center">
          <div className="text-custom-red w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
            {post.iconComponent}
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <div className="text-xs sm:text-sm text-gray-500">{post.date}</div>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-custom-red mb-2 sm:mb-3 line-clamp-2">{post.title}</h3>
        
        <p className="text-text opacity-80 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-4">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {post.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs bg-gray-100 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <ReadMoreButton postId={post.id} />
      </div>
    </motion.article>
  );
});

// Button component with improved responsiveness
const ReadMoreButton = React.memo(({ postId }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      href={`/blog/${postId}`}
      className="inline-flex items-center font-medium transition-all duration-300 self-start text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
      style={{
        boxShadow: isHovered 
          ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.5)'
          : '4px 4px 8px rgb(255, 180, 179), -4px -4px 8px #ffffff',
        backgroundColor: isHovered ? '#e63946' : 'transparent',
        color: isHovered ? 'white' : '#e63946'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Read More
      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
    </Link>
  );
});

// View all button with improved responsiveness
const ViewAllButton = React.memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      href="#blog" 
      className="inline-flex items-center bg-white font-medium text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300"
      style={{
        boxShadow: isHovered
          ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.5)'
          : '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff',
        backgroundColor: isHovered ? '#e63946' : 'white',
        color: isHovered ? 'white' : '#e63946'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      View All Articles
      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
    </Link>
  );
});

export default function Blog() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Pre-split and memoize the text for animation
  const animatedTextContent = React.useMemo(() => {
    const text = 'Insights, trends, and expert perspectives on technology, business transformation, and innovation in the digital age.';
    return text.split(' ').map((word, i) => (
      <motion.span 
        key={i} 
        variants={wordVariants}
        className="inline-block mr-1"
      >
        {word}{' '}
      </motion.span>
    ));
  }, []);
  
  // Get posts with useMemo to prevent recalculation
  const recentPosts = React.useMemo(() => getRecentPosts(3), []);

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-background text-text"
    >
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-custom-red mb-4 sm:mb-6 md:mb-8">Our Blog</h2>
          
          <motion.p 
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-base sm:text-lg md:text-xl text-text max-w-4xl mx-auto leading-relaxed"
          >
            {animatedTextContent}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {recentPosts.map((post, index) => (
            <BlogCard 
              key={post.id}
              post={post}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <ViewAllButton />
        </motion.div>
      </div>
    </section>
  );
}