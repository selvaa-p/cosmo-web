import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Users, ArrowRight, Building, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Animation variants (reused from blog component)
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

// Job Card Component
const JobCard = React.memo(({ job, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.article
      key={job.id}
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
      <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <div className="text-xs sm:text-sm text-gray-500">{job.location}</div>
          <div className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{job.type}</div>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-custom-red mb-2 sm:mb-3">{job.title}</h3>
        
        <div className="flex items-center mb-3 text-text opacity-80 text-xs sm:text-sm">
          <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
          <span>{job.department}</span>
        </div>
        
        <p className="text-text opacity-80 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-4">
          {job.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {job.skills.map((skill, i) => (
            <span 
              key={i} 
              className="text-xs bg-gray-100 text-gray-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <ApplyButton jobId={job.id} />
      </div>
    </motion.article>
  );
});

// Apply button component
const ApplyButton = React.memo(({ jobId }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      href={`/careers/${jobId}`}
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
      Apply Now
      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
    </Link>
  );
});

// // View All Jobs button
// const ViewAllJobsButton = React.memo(() => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <Link 
//       href="/careers/all" 
//       className="inline-flex items-center bg-white font-medium text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300"
//       style={{
//         boxShadow: isHovered
//           ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.5)'
//           : '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff',
//         backgroundColor: isHovered ? '#e63946' : 'white',
//         color: isHovered ? 'white' : '#e63946'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       View All Positions
//       <Search className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
//     </Link>
//   );
// });

// Contact button for the top section
const ContactButton = React.memo(() => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href="mailto:cosmohentorq@gmail.com" 
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
      Contact Us
      <Mail className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
    </a>
  );
});

// Example jobs data (you would replace this with your actual data)
const jobsData = [
  {
    id: 'fe-dev',
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Join our team to build modern, accessible, and high-performance web applications using React, Next.js, and cutting-edge frontend technologies.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript']
  },
  {
    id: 'be-dev',
    title: 'Backend Developer',
    type: 'Full-time',
    location: 'Hybrid',
    department: 'Engineering',
    description: 'Work on our scalable backend systems, APIs, and database architecture to support our growing product offerings and customer base.',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'AWS']
  },
  {
    id: 'ui-design-intern',
    title: 'UI/UX Design Intern',
    type: 'Internship',
    location: 'Remote',
    department: 'Design',
    description: 'Learn and contribute to our design processes, creating beautiful and intuitive user interfaces while gaining valuable industry experience.',
    skills: ['Figma', 'UI/UX', 'Wireframing', 'User Research']
  },
  {
    id: 'marketing-intern',
    title: 'Digital Marketing Intern',
    type: 'Internship',
    location: 'Remote',
    department: 'Marketing',
    description: 'Help grow our online presence through content creation, social media management, and digital marketing campaigns.',
    skills: ['Content Writing', 'Social Media', 'SEO', 'Analytics']
  }
];

export default function Careers() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Pre-split and memoize the text for animation
  const animatedTextContent = React.useMemo(() => {
    const text = 'Join our innovative team and be part of building the future of technology. We value creativity, collaboration, and continuous growth.';
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

  // Filter jobs based on the active category
  const filteredJobs = React.useMemo(() => {
    if (activeCategory === 'All') {
      return jobsData;
    } else if (['Full-time', 'Internship'].includes(activeCategory)) {
      return jobsData.filter(job => job.type === activeCategory);
    } else if (activeCategory === 'Remote') {
      return jobsData.filter(job => job.location === 'Remote');
    } else if (['Engineering', 'Design', 'Marketing'].includes(activeCategory)) {
      return jobsData.filter(job => job.department === activeCategory);
    }
    return jobsData;
  }, [activeCategory]);

  // Categories array for the filter buttons
  const categories = ['All', 'Full-time', 'Internship', 'Remote', 'Engineering', 'Design', 'Marketing'];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-background text-text"
    >
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-custom-red mb-4 sm:mb-6">
              Join Our Team
            </h1>
            
            <motion.p 
              variants={textContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-base sm:text-lg text-text mb-6 leading-relaxed"
            >
              {animatedTextContent}
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <ContactButton />
              {/* <ViewAllJobsButton /> */}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full md:w-1/2 aspect-[4/3]"
          >
            <div className="w-full h-full relative rounded-2xl overflow-hidden">
              <Image 
                src="/assets/careers.png" 
                alt="Diverse team collaborating in a modern office environment"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-custom-red opacity-10"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Open Positions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-red mb-4">Open Positions</h2>
          <p className="text-base sm:text-lg text-text max-w-3xl mx-auto">
            We're looking for talented individuals to join us on our mission. Check out our current openings below.
          </p>
        </motion.div>

        {/* Job Categories */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                  category === activeCategory 
                    ? 'bg-custom-red text-white' 
                    : 'bg-white text-text hover:bg-gray-100'
                }`}
                style={{
                  boxShadow: '4px 4px 8px rgb(220, 173, 156), -4px -4px 8px #ffffff',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 min-h-[300px]">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobCard 
                key={job.id}
                job={job}
                index={index}
                isInView={isInView}
              />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl text-center"
                style={{
                  boxShadow: '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff',
                }}
              >
                <h3 className="text-xl font-bold text-custom-red mb-2">No Positions Available</h3>
                <p className="text-text">
                  There are currently no openings in this category. Please check back later or explore other categories.
                </p>
              </motion.div>
            </div>
          )}
        </div>
        
        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 text-center p-6 sm:p-8 md:p-10 rounded-2xl bg-white"
          style={{
            boxShadow: '6px 6px 12px rgb(220, 173, 156), -6px -6px 12px #ffffff',
          }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-custom-red bg-opacity-10 p-3 rounded-full">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-custom-red" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-custom-red mb-4">Don't See What You're Looking For?</h2>
          <p className="text-text mb-6 max-w-2xl mx-auto">
            We're always on the lookout for talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          
          <a 
            href="mailto:cosmohentorq@gmail.com"
            className="inline-flex items-center bg-custom-red text-white font-medium px-5 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:bg-opacity-90"
          >
            Email Your Resume
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}