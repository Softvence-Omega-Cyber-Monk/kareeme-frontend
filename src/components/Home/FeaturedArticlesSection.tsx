import logo from "@/assets/logo 1.png";
import img from "@/assets/photo/ss.png"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

// =================================================================
// 1. DATA AND INTERFACES (Simulated Imports/Definitions)
// =================================================================

const hipHopLogo = logo; 
const articleImage = img; 


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
    image: articleImage,
    title: 'OnelsOne Entertainment: Redefining the Rhythm of Tomorrow\'s Hits (Card 1)',
    link: '#', 
    sourceLogo: hipHopLogo,
    sourceName: '24 Hip-Hop',
  },
  {
    id: '2',
    image: articleImage,
    title: 'Future Sounds: The Evolution of Electronic Dance Music (Card 2)',
    link: '#', 
    sourceLogo: hipHopLogo,
    sourceName: 'The Beat Reporter',
  },
  {
    id: '3',
    image: articleImage,
    title: 'The Silent Revolution: Lo-Fi\'s Impact on Modern Music (Card 3)',
    link: '#', 
    sourceLogo: hipHopLogo,
    sourceName: 'Indie Vibes Magazine',
  },
  {
    id: '4',
    image: articleImage,
    title: 'Mastering the Mix: Insights from a Veteran Producer (Card 4)',
    link: '#', 
    sourceLogo: hipHopLogo,
    sourceName: 'Studio Secrets',
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
    <div className="bg-[#1a1a1a]  rounded-xl overflow-hidden shadow-lg border border-gray-800 flex-shrink-0 w-full sm:mt-24">
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Left Half - Article Screenshot */}
        <div className="w-full md:w-1/2 bg-gray-900 overflow-hidden relative min-h-[150px] md:min-h-0">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover" 
          />
          {/* Green gradient overlay on the left side of the image (as seen in the design) */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-transparent"></div>
        </div>

        {/* Right Half - Text Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4">
              {article.title}
            </h3>
            <a 
              href={article.link} 
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors duration-200 text-sm gap-1"
            >
              View Full Article 
              {/* call made icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
            </a>
          </div>

          {/* Source Logo and Name */}
          <div className="mt-6 flex items-center justify-end">
            <span className="text-gray-500 text-sm mr-2">{article.sourceName}</span>
            <img src={article.sourceLogo} alt={article.sourceName} className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

// =================================================================
// 3. MAIN SECTION COMPONENT (CAROUSEL)
// =================================================================

const FeaturedArticlesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalArticles = featuredArticles.length;


  const getCardsPerView = () => {
    // lg: 2 cards per view (Desktop)
    if (window.innerWidth >= 1024) return 2;
  
    return 1;
  };


  const nextSlide = () => {
    const cardsPerView = getCardsPerView();
    const maxIndex = totalArticles - cardsPerView;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const cardsPerView = getCardsPerView();
    const maxIndex = totalArticles - cardsPerView;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };
  

  const translateXValue = currentIndex * (100 / getCardsPerView());

  return (
    <section className="relative py-16 md:py-24 overflow-hidden ">
      
      {/* Background Gradients (Matches the dark green overlay) - Simplified for dark theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900 z-0 opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        
        {/* Articles Wrapper - Carousel Track */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
           
              width: `${(totalArticles / getCardsPerView()) * 100}%`,
              transform: `translateX(-${translateXValue}%)`,
            }}
          >
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="px-4 py-2 flex-shrink-0"
                style={{
                  // কার্ডের নির্দিষ্ট উইডথ সেট করা
                  width: `${100 / totalArticles}%`,
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 flex items-center justify-between w-full pointer-events-none px-4 md:px-8">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              aria-label="Previous Article"
              className="pointer-events-auto bg-gray-800/70 hover:bg-gray-700 p-3 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 -ml-4"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              aria-label="Next Article"
              className="pointer-events-auto bg-gray-800/70 hover:bg-gray-700 p-3 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 -mr-4"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedArticlesSection;