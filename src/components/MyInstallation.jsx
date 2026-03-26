import React, { useEffect, useState } from "react";
import { getApps, removeApp } from "./../utlis/localStorage";
import toast from "react-hot-toast";

const MyInstallation = () => {
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    setApps(getApps());
  }, []);

  const handleSort = (type) => {
    setSortType(type);

    let sorted = [...apps];

    if (type === "high") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }

    setApps(sorted);
  };
  const handleRemove = (id) => {
    removeApp(id);
    const updated = getApps();
    setApps(updated);
    toast.success("App Uninstalled Successfully!");
  };

  return (
    <>

      <div className="px-6 md:px-12 py-10 min-h-screen bg-gray-50">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Installed Apps 📦
          </h1>
          <p className="text-gray-500">
            Explore all installed apps on your device
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-blue-600 font-medium">
            {apps.length} Apps Found
          </p>

          {/* SORT DROPDOWN */}
          <select
            className="border px-4 py-2 rounded"
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort By Downloads</option>
            <option value="high">High → Low</option>
            <option value="low">Low → High</option>
          </select>
        </div>

        {/* EMPTY STATE */}
        {apps.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-xl text-gray-500">No Installed Apps 😢</h2>
          </div>
        ) : (
          <div className="flex flex-col gap-4">

            {apps.map((app) => (
              <div
                key={app.id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
              >

                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-14 h-14 rounded-lg"
                  />

                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {app.title}
                    </h2>

                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>⬇ {Math.floor(app.downloads / 1000000)}M</span>
                      <span>⭐ {app.ratingAvg}</span>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <button
                  onClick={() => handleRemove(app.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Uninstall
                </button>

              </div>
            ))}

          </div>
        )}
      </div>

    </>
  );
};

export default MyInstallation;