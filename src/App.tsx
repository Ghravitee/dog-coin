import About from "./sections/About";
import Buy from "./sections/Buy";
import Community from "./sections/Community";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Stake from "./sections/Stake";
import Swap from "./sections/Swap";
import Tokenomics from "./sections/Tokenomics";

const App = () => {
  return (
    <div>
      <Hero />
      <div className="about-background pt-40 relative">
        <div className="bg-white inset-0 absolute w-full h-full opacity-90" />
        <About />
        <Swap />
      </div>
      <Tokenomics />
      <Stake />
      <Buy />
      <Community />
      <Footer />
    </div>
  );
};

export default App;
