import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveApp, getApps } from "./../utlis/localStorage";
import toast from "react-hot-toast";
import logo from '../assets/logo.png';


const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const apps = Array.isArray(data) ? data : data.apps || [];
        const found = apps.find((a) => a.id === parseInt(id));
        setApp(found);
        setLoading(false); 
      })
      .catch(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    const stored = getApps();
    const exist = stored.find((a) => a.id === parseInt(id));
    if (exist) setInstalled(true);
  }, [id]);

  const handleInstall = () => {
    if (installed) {
      toast.error("Already Installed ⚠️");
      return;
    }

    saveApp(app);
    setInstalled(true);
    toast.success("App Installed Successfully 🎉");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-blue-600 p-4 rounded-xl animate-pulse">
                    <img src={logo} alt="logo" className='w-44' />
                  </div>
        </div>
      </div>
    );
  }

  if (!app) return <div className="text-center py-20 font-bold">App Not Found</div>;

  return (
    <div className="bg-[#f8f9fc] min-h-screen px-6 md:px-20 py-12 font-sans">
      
      <div className="flex flex-col md:flex-row gap-20 items-start">
        
        <div className="bg-[#7e57c2] w-80 h-80 rounded-3xl flex items-center justify-center shadow-lg shrink-0">
          <img src={app.image} alt={app.title} className="w-40 h-40 object-contain" />
        </div>

        <div className="flex-1 w-full pt-2">
          <h1 className="text-4xl font-extrabold text-[#2d3436] tracking-tight">
            {app.title}
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Developed by <span className="text-[#6c5ce7] font-semibold">{app.companyName}</span>
          </p>

          <div className="w-full h-[2px] bg-[#6c5ce7] opacity-40 my-6"></div>

          <div className="flex flex-wrap items-center gap-16">
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-medium text-sm">Downloads</span>
                  <svg className="w-6 h-6 text-[#6c5ce7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
               </div>
               <span className="text-2xl font-black text-[#2d3436]">{app.downloads >= 1000000 ? (app.downloads/1000000).toFixed(0)+'M' : app.downloads}</span>
            </div>

            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-medium text-sm">Average Ratings</span>
                  <svg className="w-6 h-6 text-[#6c5ce7] fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.169L12 18.896l-7.334 3.857 1.4-8.169L.133 9.21l8.2-1.192L12 .587z"/></svg>
               </div>
               <span className="text-2xl font-black text-[#2d3436]">{app.ratingAvg}</span>
            </div>

            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-medium text-sm">Total Reviews</span>
                  <svg className="w-6 h-6 text-[#6c5ce7]" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2zM10 8l1 1 3-3"/></svg>
               </div>
               <span className="text-2xl font-black text-[#2d3436]">{app.reviews >= 1000 ? (app.reviews/1000).toFixed(0)+'K' : app.reviews}</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-10 px-10 py-3 rounded-xl text-white font-bold text-lg transition-all ${
              installed 
                ? "bg-[#00d285] cursor-not-allowed shadow-md" 
                : "bg-[#00d285] hover:bg-[#00b874] active:scale-95 shadow-lg"
            }`}
          >
            {installed ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200 my-16"></div>

      <div className="mb-20">
        <h2 className="text-4xl font-black text-[#2d3436] mb-10 tracking-tight">Ratings</h2>
        
        <div className="relative pt-10 pb-16 px-4">
          <div className="space-y-6">
            {app.ratings.slice().reverse().map((item, index) => {
              const totalCount = app.ratings.reduce((acc, r) => acc + r.count, 0);
              const barWidth = (item.count / totalCount) * 100;
              return (
                <div key={index} className="flex items-center group">
                  <span className="w-16 text-sm font-semibold text-gray-500 uppercase">{item.name}</span>
                  <div className="flex-1 h-5 bg-transparent border-l border-gray-300 relative">
                     <div 
                        className="h-full bg-[#00d285] transition-all duration-1000 ease-out"
                        style={{ width: `${barWidth}%` }}
                     ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-2 pl-16 text-xs font-bold text-gray-400 border-t border-gray-300 pt-2">
            <span>0</span>
            <span>3000</span>
            <span>6000</span>
            <span>9000</span>
            <span>12000</span>
          </div>

          {/* Legend */}
          <div className="flex justify-center mt-8 gap-2 items-center">
            <div className="w-3 h-3 bg-[#00d285]"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">count</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-black text-[#2d3436] mb-8 tracking-tight">Description</h2>
        <div className="text-gray-500 text-lg leading-[1.8] space-y-6 text-justify font-medium">
           {app.description}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;