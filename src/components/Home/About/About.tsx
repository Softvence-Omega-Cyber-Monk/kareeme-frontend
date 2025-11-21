/* eslint-disable @typescript-eslint/no-unused-vars */

import { Lightbulb, Users, TrendingUp, Award, Handshake, BookOpen, Megaphone, Globe } from 'lucide-react';

// Import video and image


import heroVideo from "@/assets/video/111.mp4";
import pic13 from "@/assets/pic13.png";

export default function About() {
  const empoweringFeatures = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Financial Independence",
      description: "Take control of your finances with our transparent and artist-friendly revenue sharing model."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Creative Freedom",
      description: "You own your music. We provide the tools to create, distribute, and monetize your music without compromising your vision."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Reach a global audience with our distribution network and marketing tools."
    }
  ];

  const visionFeatures = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Fairness and Transparency",
      description: "We believe in a fair and transparent music industry where artists are compensated fairly for their work."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community and Collaboration",
      description: "We're building a community of artists who support and collaborate with each other."
    }
  ];

  const artistSupport = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Brand Development",
      description: ""
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educational Workshops",
      description: ""
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing & PR Assistance",
      description: ""
    }
  ];

  const collaborationFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inclusive Community",
      description: "A welcoming space for artists of all genres, backgrounds, and identities."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Collaboration Platform",
      description: "Connect with other artists, find collaborators, and create amazing music together."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            EMPOWERING INDEPENDENT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              ARTISTS ON A GLOBAL STAGE
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            At OneiSlone Entertainment, we empower artists worldwide, creating unforgettable stories through music.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-2 border-cyan-500/30 rounded-lg p-8 sm:p-12 backdrop-blur-sm bg-black/20 hover:border-cyan-500/60 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-400 text-xl">🎵</span>
            </div>
            <h2 className="text-sm font-semibold text-cyan-400">About Us</h2>
          </div>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            AT ONEISLONE ENTERTAINMENT, WE ARE PASSIONATE STORYTELLERS COMMITTED TO CRAFTING UNFORGETTABLE EXPERIENCES THAT RESONATE WITH AUDIENCES AROUND THE GLOBE. OUR DIVERSE TEAM OF CREATIVES, DREAMERS, AND INNOVATORS COMES TOGETHER TO CELEBRATE THE ART OF STORYTELLING, EMPOWERING UNIQUE VOICES AND CAPTIVATING IMAGINATIONS. JOIN US ON THIS JOURNEY, WHERE EVERY PROJECT IS A MASTERPIECE IN THE MAKING.
          </p>
          
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
            TAKE A DIVE NOW
          </button>
        </div>
      </section>

      {/* Empowering Artists Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-2 border-cyan-500/30 rounded-lg p-8 sm:p-12 backdrop-blur-sm bg-black/20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">EMPOWERING ARTISTS</h2>
          <p className="text-gray-400 mb-12 max-w-4xl">
            At OneiSlone Entertainment, we're redefining opportunities and redefining what it means to be a successful artist in today's rapidly evolving digital landscape. Leading the charge in OneiSlone Entertainment, a groundbreaking music tech company dedicated to empowering independent musicians and creating a more equitable and innovative, we've established ourselves as a pivotal force facilitating the growth of independent artists at all levels of their careers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {empoweringFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-6 border border-cyan-500/20 rounded-lg hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Vision for Change Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-2 border-cyan-500/30 rounded-lg overflow-hidden backdrop-blur-sm bg-black/20">
          <div className="p-8 sm:p-12">
            <button className="mb-6 px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold hover:bg-cyan-500/30 transition-colors">
              TAKE A DIVE NOW
            </button>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">A VISION FOR CHANGE</h2>
            <p className="text-gray-400 mb-12 max-w-4xl">
              We're building a more equitable and sustainable music industry. We're committed to creating a world where artists have the opportunity to succeed, regardless of their background or connections.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 border border-cyan-500/20 rounded-lg hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Harnessing Technology Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">HARNESSING TECHNOLOGY FOR YOU</h2>
        <p className="text-gray-400 mb-12 max-w-4xl">
          We leverage cutting-edge technology to provide you with the best tools to create, manage, and promote your music. From analytics dashboards to AI-powered marketing tools, we'll help you succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 border border-cyan-500/20 rounded-lg backdrop-blur-sm bg-black/20">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Top Countries</h3>
            <div className="space-y-3">
              {['United States', 'Mexico', 'Canada', 'New Zealand', 'Germany'].map((country, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-black/40 rounded hover:bg-black/60 transition-colors">
                  <span className="text-sm">{country}</span>
                  <span className="text-cyan-400 text-sm font-semibold">{(Math.random() * 100).toFixed(2)}%</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Top UI Regions</h3>
            <div className="space-y-3">
              {['Ohio', 'California', 'Oregon', 'New York'].map((region, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-black/40 rounded hover:bg-black/60 transition-colors">
                  <span className="text-sm">{region}</span>
                  <span className="text-cyan-400 text-sm font-semibold">{Math.floor(Math.random() * 1000)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Artist Support */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">COMPREHENSIVE ARTIST SUPPORT</h2>
        <p className="text-gray-400 mb-12 max-w-4xl">
          Our dedicated team is here to support you at every stage of your career. We offer personalized guidance, workshops, and resources to help you navigate the complexities of the music industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artistSupport.map((item, index) => (
            <div
              key={index}
              className="group p-6 border border-purple-500/20 rounded-lg hover:border-purple-500/60 hover:bg-purple-500/5 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Fostering Collaboration & Diversity Section with Image */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              FOSTERING COLLABORATION & DIVERSITY
            </h2>
            <p className="text-gray-400 mb-8">
              We are committed to building a vibrant, inclusive community where artists from all backgrounds can connect, collaborate, and thrive. We celebrate diversity and believe it's at the heart of creativity.
            </p>

            <div className="space-y-4">
              {collaborationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 border border-cyan-500/20 rounded-lg hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-cyan-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50">
              TAKE A DIVE
            </button>
          </div>

          {/* Right Image */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src={pic13}
              alt="Collaboration"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-lg transition-all duration-300"></div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
            <span className="text-purple-400">🎭</span>
          </div>
          <h3 className="text-sm font-semibold text-purple-400">The Future is Bright</h3>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
          THE FUTURE OF THE MUSIC INDUSTRY LOOKS PROMISING, ESPECIALLY WITH ONEISLONE LEADING THE WAY. WE EMPOWER INDEPENDENT ARTISTS AND AIM TO RESHAPE SUCCESS FOR CREATORS WORLDWIDE.
        </h2>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">JOIN US ON THE JOURNEY</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Are you ready to take your music career to the next level? Join us today and become part of a community of independent artists who are shaping the future of music.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            Join Us Now
          </button>
        </div>
      </section>
    </div>
  );
}