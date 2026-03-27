import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const AppCart = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setApps(Array.isArray(data) ? data : data.apps || []);
      });
  }, []);

  // 👉 Only 8 apps
  const visibleApps = apps.slice(0, 8);

  return (
    <section className="bg-slate-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Our <span className="text-purple-600">Applications</span>
          </h2>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleApps.map((app) => (
            <Link to={`/app/${app.id}`} key={app.id}>
              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

                <img src={app.image} alt={app.title} className="h-40 mx-auto object-contain mb-4" />

                <h4 className="text-center font-semibold">{app.title}</h4>

                <div className="flex justify-between mt-3 text-sm">
                  <span>{app.downloads}</span>
                  <span>⭐ {app.ratingAvg}</span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* See More */}
        <div className="text-center mt-10">
          <Link to="/apps">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
              See More →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AppCart;