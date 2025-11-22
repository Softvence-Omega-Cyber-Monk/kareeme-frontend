import brand from '../../../assets/brand.png';
import education from '../../../assets/education.png';
import marketing from '../../../assets/marketing.png';

const SupportSection = () => {
  const supportFeatures = [
    { icon: brand, title: 'Brand Development' },
    { icon: education, title: 'Educational Workshops' },
    { icon: marketing, title: 'Marketing & PR Assistance' }
  ];

  return (
    <div className="bg-gray-900 py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 mb-6 sm:mb-8 text-center">
          <span className="text-white">COMPREHENSIVE ARTIST SUPPORT</span>
        </h2>
        
        <p className="text-gray-400 text-base sm:text-lg max-w-5xl mx-auto mb-12 sm:mb-16 text-center px-4">
          Our dedicated team is here to support you at every stage of your career. We offer personalized guidance, workshops, and resources to help you navigate the complexities of the music industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-green-500 cursor-pointer w-full max-w-[320px]"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                />
                <h3 
                  className="text-[#F2F2F2] font-medium leading-[130%]"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '130%'
                  }}
                >
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportSection;