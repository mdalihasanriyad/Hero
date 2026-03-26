import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  AppSection  from "./AppSection";
import { saveApp, getApps } from "./../utlis/localStorage";
import toast from "react-hot-toast";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const app = AppSection.find((a) => a.id === parseInt(id));

  const [installed, setInstalled] = useState(false);

  // ✅ Check already installed
  useEffect(() => {
    const installedApps = getApps();
    const exists = installedApps.find((a) => a.id === parseInt(id));
    if (exists) setInstalled(true);
  }, [id]);

  // ✅ Install handler
  const handleInstall = () => {
    saveApp(app);
    setInstalled(true);
    toast.success("App Installed Successfully 🎉");
  };

  // ❌ App not found
  if (!app) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">
          App Not Found ❌
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="px-6 md:px-12 py-10 bg-gray-50 min-h-screen">

        {/* 🔥 Top Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-white p-6 rounded-xl shadow">

          {/* Image */}
          <img
            src={app.image}
            alt={app.title}
            className="w-40 h-40 rounded-xl"
          />

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">
              {app.title}
            </h1>

            <p className="text-gray-500 mt-1">{app.companyName}</p>

            {/* Stats */}
            <div className="flex gap-6 mt-4 text-gray-600">
              <span>⭐ {app.ratingAvg}</span>
              <span>⬇ {app.downloads}</span>
              <span>💬 {app.reviews}</span>
            </div>

            {/* Install Button */}
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`mt-6 px-6 py-2 rounded-lg text-white transition ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {installed ? "Installed ✅" : `Install (${app.size}MB)`}
            </button>
          </div>
        </div>

        {/* 📊 Chart Section */}
        <div className="bg-white p-6 mt-10 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Ratings Overview 📊
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 📝 Description */}
        <div className="bg-white p-6 mt-10 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Description 📝
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {app.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default AppDetails;