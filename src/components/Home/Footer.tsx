import { useState } from 'react';
import { Send, Instagram, Youtube, Facebook } from 'lucide-react';
import logo from "@/assets/icons/logo.svg";
import { motion } from 'framer-motion';

const DRIPPING_CSS = `
  @keyframes drip {
    0% { transform: translateY(0) scale(1); opacity: 1; text-shadow: 0 0 5px rgba(255,255,255,0.8); }
    50% { transform: translateY(5px) scale(0.95); opacity: 0.9; }
    75% { transform: translateY(12px) scale(0.9); opacity: 0.5; }
    100% { transform: translateY(0) scale(1); opacity: 1; text-shadow: 0 0 5px rgba(255,255,255,0.8); }
  }
  .drip-char {
    position: relative;
    animation: drip 2s ease-in-out infinite alternate;
    line-height: 1;
    will-change: transform, opacity, text-shadow; 
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const fullText = "ONEIONE";
  const characters = fullText.split('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DRIPPING_CSS }} />

      <footer className="bg-gradient-to-b from-gray-900 to-[#1a2832] text-white font-['Inter']">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <motion.div 
                className="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center mb-3"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              </motion.div>

              {/* Dripping Text */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider [text-shadow:_0_0_5px_#fff,_0_0_15px_#10b981,_0_0_20px_#10b981] drop-shadow-lg text-center md:text-left flex flex-wrap justify-center md:justify-start">
                {characters.map((char, index) => {
                  const isEmerald = char === 'I' || index >= 4;
                  return (
                    <motion.span
                      key={index}
                      className={`inline-block drip-char ${isEmerald ? 'text-emerald-400' : 'text-white'}`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  );
                })}
              </h2>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                { icon: <Youtube className="w-5 h-5" />, bg: 'bg-red-600', hover: 'hover:bg-red-700', label: 'YouTube' },
                { icon: <Instagram className="w-5 h-5" />, bg: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500', hover: '', label: 'Instagram' },
                { icon: <Facebook className="w-5 h-5" />, bg: 'bg-blue-600', hover: 'hover:bg-blue-700', label: 'Facebook' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${item.bg} ${item.hover}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <nav className="flex flex-wrap justify-center md:justify-start gap-5">
              {['Home', 'Label Bridge', 'News & Articles', 'About', 'Shop'].map((item) => (
                <a key={item} href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base">
                  {item}
                </a>
              ))}
            </nav>

            <div className="relative w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
              />
              <motion.button
                onClick={handleSubmit}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Submit email"
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end space-y-6 w-full max-w-sm md:max-w-none">
            <div className="flex flex-col items-center md:items-end space-y-2">
              {['Privacy Policy', 'Terms & Condition'].map((item) => (
                <a key={item} href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base underline">
                  {item}
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <a href="mailto:Info@OneIOneEnt.com" className="text-white hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base break-all">
                Info@OneIOneEnt.com
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
