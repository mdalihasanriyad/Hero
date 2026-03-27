import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#111",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
            fontWeight: "500"
          },
        }}
      />

      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;