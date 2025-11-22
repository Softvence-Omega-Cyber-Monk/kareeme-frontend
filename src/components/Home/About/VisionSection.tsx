import char from '../../../assets/char.png';
import pach from '../../../assets/pach.png';

const VisionSection = () => {
  const visionItems = [
    {
      icon: char,
      title: 'Fairness and Transparency',
      description: 'We believe in a fair and transparent music industry where artists are compensated fairly for their work.'
    },
    {
      icon: pach,
      title: 'Community and Collaboration',
      description: "We're building a community of artists who support and collaborate with each other."
    }
  ];

  return (
    <div className="bg-gray-900 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 mb-6 sm:mb-8 text-center">
          <span className="text-white">A VISION FOR CHANGE</span>
        </h2>
        
        <p className="text-gray-400 text-base sm:text-lg max-w-5xl mx-auto mb-12 sm:mb-16 text-center px-4">
          We're building a more equitable and sustainable music industry. We're committed to creating a world where every artist has the opportunity to succeed, regardless of their background or connections.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-green-500"
            >
              <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20">
                <img 
                  src={item.icon} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;