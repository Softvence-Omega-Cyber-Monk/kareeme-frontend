///import pic13 from '../../../assets/pic13.png';

const CollaborationSection = () => {
  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/20 mb-8">
              <span className="text-white">FOSTERING COLLABORATION & DIVERSITY</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12">
              We are committed to building a vibrant, inclusive community where artists from all backgrounds can connect, collaborate, and thrive. We celebrate diversity and believe it's the heart of creativity.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Inclusive Community</h3>
                  <p className="text-gray-400">A welcoming space for artists of all genres, backgrounds, and identities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaboration Platform</h3>
                  <p className="text-gray-400">Connect with other artists, find collaborators, and create amazing music together.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-gradient-to-br from-orange-500/30 to-yellow-500/30 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4 animate-pulse">🎤</div>
                  <p className="text-white text-xl font-semibold">Live Performance</p>
                  <p className="text-gray-300 text-sm mt-2">Creating unforgettable moments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;