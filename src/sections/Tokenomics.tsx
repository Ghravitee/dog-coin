import tokenomics from "../assets/Tokenomics.png";

const Tokenomics = () => {
  return (
    <section className="tokenomics-background pt-[60px] pb-[80px] md:pt-[99px] md:pb-[136px]">
      <h2 className="text-[50px] md:text-[85px] font-bold text-white text-center [text-shadow:.7px_4px_0_black,3px_2px_0_black,6px_-2px_0_black,-2px_-2px_0_black]">
        Tokenomics
      </h2>
      <div className="flex justify-center">
        <img
          src={tokenomics}
          alt=""
          className="w-[90%] max-w-[500px] md:max-w-none mx-auto"
        />
      </div>
    </section>
  );
};

export default Tokenomics;
