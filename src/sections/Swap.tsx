import mainCharacter from "../assets/main-character-1.png";
import swapWidget from "../assets/Swap-Widget.png";
import Copy from "../components/Copy";
import InfiniteScroll from "../components/InfiniteScroll";

const Swap = () => {
  return (
    <section className="pt-32 md:pt-52 relative z-50 md:px-0">
      {/* Swap section container */}
      <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-[80%] mx-auto mb-[60px] md:mb-[89.62px] text-center md:text-left">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <h2 className="text-[22px] md:text-[28px]">Direct Swap</h2>
          <h2 className="text-[40px] md:text-[55px] font-bold">Buy $DOGCOIN</h2>
          <img
            src={mainCharacter}
            alt=""
            className="w-[80%] max-w-[350px] md:max-w-none md:w-auto"
          />
        </div>
        <img
          src={swapWidget}
          alt=""
          className="w-[90%] max-w-[400px] md:max-w-none md:w-auto mx-auto"
        />
      </div>

      {/* Contract Address Section */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h2 className="text-[20px] md:text-[24px] font-medium">
          Solana Contract Address
        </h2>
        <Copy />
      </div>

      {/* Infinite Scroll Section */}
      <div className="relative">
        <InfiniteScroll
          orientation="-skew-3"
          background="bg-[#FFCF00]"
          textColor="text-[#000000]"
          border="border-y-2 border-y-[#000000]"
          position="absolute z-40 top-10 md:top-20"
        />
        <InfiniteScroll
          orientation=""
          background="bg-[#000000]"
          textColor="text-[#B3B3B3]"
          border="border-y-2 border-y-[#ffffff]"
          position="absolute z-20"
        />
      </div>
    </section>
  );
};

export default Swap;
