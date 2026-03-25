import { useEffect, useState } from "react";

const AppCard = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading apps...</p>;
  }

  const visibleApps = apps.slice(0, visibleCount);

  return (
    <div className=" `max-w-[1400px]` mx-auto  p-6">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {visibleApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-4 group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl aspect-square mb-3">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                  Install
                </button>
              </div>
            </div>

            {/* Info */}
            <h2 className="text-sm font-semibold truncate">
              {app.title}
            </h2>
            <p className="text-xs text-gray-500 truncate">
              {app.companyName}
            </p>

            {/* Rating + Downloads */}
            <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
              <span>⭐ {app.ratingAvg}</span>
              <span>{(app.downloads / 1000).toFixed(0)}k</span>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < apps.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default AppCard;