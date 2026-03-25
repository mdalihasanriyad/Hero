import hero from '../assets/hero1.png';

const Hero = () => {
  return (
    <section className="bg-white pt-16">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
          We Build <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-gray-100 px-6 py-3 rounded-xl flex items-center gap-3 border hover:bg-gray-200 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
          </button>
          <button className="bg-gray-100 px-6 py-3 rounded-xl flex items-center gap-3 border hover:bg-gray-200 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
          </button>
        </div>

        {/* Hero Image / Mockup Placeholder */}
        <img src={hero} alt="hero" />
      </div>

      {/* Stats Section */}
      <div className="bg-purple-600 pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-12">
            Trusted by Millions, Built for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <p className="text-sm opacity-80 uppercase tracking-widest">Total Downloads</p>
              <h3 className="text-4xl font-black mt-2">29.6M+</h3>
              <p className="text-xs text-purple-200 mt-1">21% more than last month</p>
            </div>
            <div>
              <p className="text-sm opacity-80 uppercase tracking-widest">Total Reviews</p>
              <h3 className="text-4xl font-black mt-2">906K+</h3>
              <p className="text-xs text-purple-200 mt-1">46% more than last month</p>
            </div>
            <div>
              <p className="text-sm opacity-80 uppercase tracking-widest">Active Apps</p>
              <h3 className="text-4xl font-black mt-2">132+</h3>
              <p className="text-xs text-purple-200 mt-1">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;