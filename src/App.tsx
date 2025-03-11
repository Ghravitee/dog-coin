import About from "./sections/About";
import Hero from "./sections/Hero";
import Swap from "./sections/Swap";

const App = () => {
  return (
    <div>
      <Hero />
      <div className="about-background pt-40 pb-20 relative">
        <div className="bg-white inset-0 absolute w-full h-full opacity-90" />
        <About />
        <Swap />
      </div>
    </div>
  );
};

export default App;
