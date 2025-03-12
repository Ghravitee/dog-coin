import Navbar from "./Navbar";
import dogCoin from "../assets/dog-coin.png";
import cloud1 from "../assets/cloud-1.png";
import cloud2 from "../assets/cloud-2.png";
import InfiniteScroll from "../components/InfiniteScroll";
import SocialIcons from "../components/SocialIcons";
import Copy from "../components/Copy";

const Hero = () => {
  return (
    <section className="min-h-screen hero-background pt-[54px] ">
      <Navbar />

      <div className="w-full max-w-7xl mx-auto mt-2 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 lg:px-0">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <h1
            className="font-extrabold text-[50px] sm:text-[60px] md:text-[80px] lg:text-[120px] italic mb-4 text-[#FFCF00] 
            [text-shadow:.5px_5px_0_black,2px_2px_0_black,2px_-2px_0_black,-2px_-2px_0_black]"
          >
            $DOGCOIN
          </h1>

          <p className="text-lg sm:text-xl text-white mb-[25px] px-2 sm:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>

          {/* Copy Address */}
          <Copy />
          {/* Join the community */}
          <h2 className="text-[20px] sm:text-[24px] font-medium text-white mb-4">
            Join the community
          </h2>

          {/* Social icons */}
          <SocialIcons />
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <img
            src={dogCoin}
            alt=""
            className="relative z-50 max-w-[80%] sm:max-w-[70%] lg:max-w-full"
          />
          <img
            src={cloud1}
            alt=""
            className="absolute left-0 bottom-0 max-w-[50%] sm:max-w-[40%]"
          />
          <img
            src={cloud2}
            alt=""
            className="absolute right-10 top-0 max-w-[50%] sm:max-w-[40%]"
          />
        </div>
      </div>
      <div className="relative">
        <InfiniteScroll
          orientation="skew-3"
          background="bg-[#FFCF00]"
          textColor="text-[#000000]"
          border="border-y-2 border-y-[#000000]"
          position="absolute z-40 top-20"
        />
        <InfiniteScroll
          orientation="-skew-2"
          background="bg-[#000000]"
          textColor="text-[#B3B3B3]"
          border="border-y-2 border-y-[#ffffff]"
          position="absolute z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
