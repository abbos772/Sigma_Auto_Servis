import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Servis from "./components/Servis/Servis";
import Total from "./components/Total/Total";
import Services from "./components/Services/Services";
import Karta from "./components/Karta/Karta";
import Footer from "./components/footer/Footer";
import Tg from "./components/Telegram/Tg";
import Loading from "./components/Loading/Loading";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? <Loading /> : <div></div>}
      <Navbar />
      <Hero />
      <About />
      <Servis />
      <Total />
      <Services />
      <Tg />
      <Karta />
      <Footer />
    </>
  );
}

export default App;
