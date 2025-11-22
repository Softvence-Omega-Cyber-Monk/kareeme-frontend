

const CTASection = () => {
  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 mb-8">
          <span className="text-white">JOIN US ON THE JOURNEY</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-12">
          Are you ready to take your music career to the next level? Join us today and become part of a community of independent artists who are changing the music industry.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 active:scale-95">
          Join Us Now
        </button>
      </div>
    </div>
  );
};

export default CTASection;