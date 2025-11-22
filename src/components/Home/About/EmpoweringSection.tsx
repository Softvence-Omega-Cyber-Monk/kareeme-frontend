
import ekIcon from '@/assets/ek.png';
import duiIcon from '@/assets/dui.png';
import tinIcon from '@/assets/tin.png';

const EmpoweringSection = () => {
  const features = [
    {
      icon: ekIcon,
      title: 'Financial Independence',
      description: 'Take control of your finances with our transparent and artist-friendly revenue sharing model.'
    },
    {
      icon: duiIcon,
      title: 'Creative Freedom',
      description: 'You own your music. We provide the tools to create, distribute, and monetize your music without compromising your vision.'
    },
    {
      icon: tinIcon,
      title: 'Global Reach',
      description: 'Reach a global audience with our distribution network and marketing tools.'
    }
  ];

  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[40px] md:text-5xl lg:text-6xl font-semibold text-[#E5E5E5] mb-8 text-left uppercase leading-[120%]">
          EMPOWERING ARTISTS
        </h2>
        
        <p className="text-[#CACACA] text-base md:text-lg max-w-5xl mb-16 text-left font-normal leading-[160%] font-montserrat">
          In an ever-evolving music industry, independent artists are breaking boundaries and redefining what it means to be successful. Leading the charge is OneIsOne Entertainment, a groundbreaking music tech company dedicated to empowering independent musicians and creators around the world. By embracing creativity and innovation, we've established ourselves as a pivotal force facilitating the growth of independent artists at all levels of their careers.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-full max-w-[384px] bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-green-500"
            >
              <div className="mb-6 flex-shrink-0">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-[29.68px] h-[29.69px] object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">{feature.title}</h3>
              <p className="text-[#CACACA] font-normal leading-[160%] font-montserrat">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpoweringSection;