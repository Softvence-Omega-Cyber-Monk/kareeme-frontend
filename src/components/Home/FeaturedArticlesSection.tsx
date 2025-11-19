import logo from "@/assets/logo 1.png";
import img from "@/assets/photo/ss.png"
import React from 'react';
import { motion } from 'framer-motion';
import call from "@/assets/icons/call_made.svg"
// =================================================================
// 1. DATA AND INTERFACES (Simulated Imports/Definitions)
// =================================================================

const articleScreenshot1 = '/path/to/article-screenshot-1.png'; 
const articleScreenshot2 = '/path/to/article-screenshot-2.png'; 
const hipHopLogo = '/path/to/24hiphop.svg'; 

interface Article {
  id: string;
  image: string;
  title: string;
  link: string;
  sourceLogo: string;
  sourceName: string;
}

const featuredArticles: Article[] = [
  {
    id: '1',
    image: articleScreenshot1,
    title: 'OnelsOne Entertainment: Redefining the Rhythm of Tomorrow\'s Hits',
    link: '#', 
    sourceLogo: hipHopLogo,
    sourceName: '24 Hip-Hop',
  },
  {
    id: '2',
    image: articleScreenshot2,
    title: 'OnelsOne Entertainment: Redefining the Rhythm of Tomorrow\'s Hits',
    link: '#', 
    sourceLogo: hipHopLogo,
    sourceName: '24 Hip-Hop',
  },
];

// =================================================================
// 2. ARTICLE CARD COMPONENT
// =================================================================

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    // Card Container: Dark background, rounded, shadow, flexible width
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-800 flex-none w-full sm:max-w-md lg:max-w-none">
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Left Half - Article Screenshot */}
        <div className="w-full md:w-1/2 bg-gray-900 overflow-hidden relative min-h-[150px] md:min-h-0">
          <img 
            src={img} 
            alt={article.title} 
            className="w-full h-full object-cover" 
          />
          {/* Green gradient overlay on the left side of the image (as seen in the design) */}
          <div className="absolute inset-0 "></div>
        </div>

        {/* Right Half - Text Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4">
              {article.title}
            </h3>
            <a 
              href={article.link} 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors duration-200 text-sm"
            >
              View Full Article 
            <img src={call} alt="" />
            </a>
          </div>

          {/* Source Logo and Name */}
          <div className="mt-6 flex items-center justify-end">
            <span className="text-gray-500 text-sm mr-2">{article.sourceName}</span>
            <img src={logo} alt={article.sourceName} className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

// =================================================================
// 3. MAIN SECTION COMPONENT
// =================================================================

const FeaturedArticlesSection: React.FC = () => {
  return (
    <section className="relative  py-16 md:py-24 overflow-hidden ">
      
      {/* Background Gradients (Matches the dark green overlay) */}
      <div className="absolute inset-y-0 left-0 w-[282px] h-[396px]  z-0"></div>
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#173323]/50 to-transparent z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* Articles Container - Uses a flexbox to align cards horizontally */}
        <div className="flex justify-center space-x-0 lg:space-x-8">
          
          {/* First Article Card - Always visible */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl lg:w-1/2 flex-shrink-0"
          >
            <ArticleCard article={featuredArticles[0]} />
          </motion.div>

          {/* Second Article Card - Only visible on large screens (`lg:block`) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-full lg:w-1/2 flex-shrink-0"
          >
            <ArticleCard article={featuredArticles[1]} />
          </motion.div>
        </div>

        {/* Navigation Arrow (Right) - Positioned to the far right, next to the cards */}
        <div className="absolute right-4 md:right-8 lg:right-4 top-1/2 transform -translate-y-1/2 mt-10 lg:mt-0">
          <button 
            aria-label="Next Article"
            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedArticlesSection;