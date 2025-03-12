import stake1 from "../assets/stake-image-1.png";
import stake2 from "../assets/stake-image-2.png";
import InfiniteScroll from "../components/InfiniteScroll";
import cloud5 from "../assets/cloud-5.png";
import cloud6 from "../assets/cloud-6.png";

const Stake = () => {
  return (
    <section className="pt-[80px] md:pt-[103.26px] stake-background relative">
      <h1 className="mb-[20px] text-[50px] md:text-[85px] font-bold text-white text-center [text-shadow:4px_4px_0_black,4px_-4px_0_black,-4px_-4px_0_black]">
        Stake and earn
      </h1>
      <p className="text-[18px] md:text-[20px] mb-[50px] md:mb-[103px] text-center max-w-[90%] md:max-w-[58rem] mx-auto">
        The day had begun on a bright note. The sun finally peeked through the
        rain for the first time in a week, and the birds were singing in its
        warmth. There was no way to anticipate what was about to happen. It was
        a worst-case scenario and there was no way out of it.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[58px] justify-center">
        <img src={stake1} alt="" className="w-[90%] md:w-auto" />
        <img src={stake2} alt="" className="w-[90%] md:w-auto" />
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
      <img
        src={cloud6}
        alt=""
        className="absolute top-[100px] md:top-[221px] right-0 z-10 w-[50px] md:w-auto"
      />
      <img
        src={cloud5}
        alt=""
        className="absolute top-[80px] md:top-[137px] left-0 z-10 w-[50px] md:w-auto"
      />
    </section>
  );
};

export default Stake;
