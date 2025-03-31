// src/app/blog/[id]/page.jsx
"use client";
import React from 'react';
import { notFound, useParams } from "next/navigation";
import { motion } from 'framer-motion';
import { blogPosts, getRelatedPosts, getIconByName } from "../../data/blogData"; // Updated import path
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calendar, Tag, User, Clock } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostPage() {
  const { id } = useParams();
  // Find the blog post by id
  const post = blogPosts.find((p) => p.id === id);
  const IconComponent = post?.icon ? getIconByName(post.icon) : null;
  // Return 404 page if not found
  if (!post) return notFound();

  // Get related posts
  const relatedPosts = getRelatedPosts(id, 2);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-16 md:py-24">
        <motion.article 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16"
          style={{
            boxShadow: '10px 10px 20px rgb(220, 173, 156), -10px -10px 20px #ffffff'
          }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="flex items-start sm:items-center gap-2 sm:gap-3 mb-4">
            {IconComponent && (
              <div className="text-custom-red mt-1 sm:mt-0 flex-shrink-0">
                {IconComponent}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-custom-red leading-tight">
              {post.title}
            </h1>
          </motion.div>

          {/* Meta Info (Date, Read Time, Author, Tags) */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center text-gray-500 text-sm mb-6 sm:mb-8 gap-y-2 sm:gap-x-6"
          >
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0 w-full sm:w-auto">
              <Tag className="w-4 h-4" />
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-10 rounded-xl overflow-hidden shadow-md">
            <img 
              src={post.coverImage || post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Blog Content */}
          <motion.div 
            variants={itemVariants} 
            className="prose prose-base sm:prose-lg max-w-none text-text prose-headings:text-custom-red prose-p:leading-relaxed prose-img:rounded-lg prose-img:shadow-md prose-img:my-6 sm:prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.contentModern || post.content }}
          />

          {/* Detail Images if available */}
          {post.detailImages && post.detailImages.length > 0 && (
            <motion.div variants={itemVariants} className="mt-8 sm:mt-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-custom-red mb-4 sm:mb-6">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {post.detailImages.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-auto object-cover"
                    />
                    {image.caption && (
                      <p className="text-sm text-gray-500 italic p-2 sm:p-3 bg-gray-50">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Related Resources if available */}
          {post.resources && post.resources.length > 0 && (
            <motion.div variants={itemVariants} className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-custom-red mb-3 sm:mb-4">Related Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                {post.resources.map((resource, index) => (
                  <li key={index} className="flex items-center flex-wrap gap-y-1">
                    <span className="inline-block mr-2 text-xs font-medium px-2 py-1 bg-gray-200 rounded text-gray-700">
                      {resource.type}
                    </span>
                    <a 
                      href={resource.url} 
                      target="_blank"
                      className="text-custom-red hover:underline"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div variants={itemVariants} className="mt-10 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-custom-red mb-4 sm:mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    href={`/blog/${relatedPost.id}`} 
                    key={relatedPost.id}
                    className="group block bg-gray-50 rounded-xl p-3 sm:p-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex gap-3 sm:gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-custom-red group-hover:underline line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{relatedPost.date} · {relatedPost.readTime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Author Information */}
          <motion.div 
            variants={itemVariants} 
            className="mt-10 sm:mt-16 flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-gray-50 rounded-xl"
          >
            {post.author.avatar && (
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover mb-3 sm:mb-0 sm:mr-4 border-2 border-custom-red"
              />
            )}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold">{post.author.name}</h3>
              {post.author.role && (
                <p className="text-sm text-gray-600">{post.author.role}</p>
              )}
            </div>
          </motion.div>
        </motion.article>
      </main>
      <Footer />
    </div>
  );
}