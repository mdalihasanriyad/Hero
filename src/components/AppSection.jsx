import React, { useEffect, useState } from 'react';

const AppSection = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // public/data.json theke fetch kora hocche
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        // Jodi data direct array hoy tobe setApps(data)
        // Jodi data object-er vitor thake (e.g. data.apps) tobe sheta likhben
        setApps(Array.isArray(data) ? data : data.apps || []);
      })
      .catch((err) => console.error("Data fetch error:", err));
  }, []);

  return (
    <section className="bg-slate-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 flex items-center justify-center gap-3">
            Our All <span className="text-purple-600">Applications</span>
            <span className="text-purple-500 text-3xl">⚡</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Search & Counter Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h3 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1">
            ({apps.length}) Apps Found
          </h3>
          
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search Apps"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50/30 shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {apps.filter(app => app.title.toLowerCase().includes(searchTerm.toLowerCase())).map((app) => (
            <div key={app.id} className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 p-4 border border-gray-100 flex flex-col group">
              
              {/* App Image Container */}
              <div className="bg-gray-50 rounded-2xl aspect-square mb-5 flex items-center justify-center overflow-hidden p-6 relative">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* App Title */}
              <h4 className="text-center font-bold text-slate-800 text-lg mb-6 flex-grow">
                {app.title}
              </h4>

              {/* Footer Stats */}
              <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-4">
                <div className="bg-green-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-green-600 font-bold text-sm">
                    {app.downloads >= 1000 ? (app.downloads / 1000).toFixed(0) + 'K' : app.downloads}
                  </span>
                </div>

                <div className="bg-purple-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-purple-600 font-bold text-sm">{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSection;