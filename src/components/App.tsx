import Hero from "./Hero";
import AutoSlider from "./AutoSlider";
import Features from "./Features";
import Cta from "./Cta";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="bg-[#FAF7F2] text-gray-800 overflow-x-hidden">
      <Hero />
      <AutoSlider />
      <Features />
      <Cta />
      <Footer/>
    </div>
  );
}