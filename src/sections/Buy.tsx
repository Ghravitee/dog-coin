import visa from "../assets/visa.png";
import solana from "../assets/solana.png";
import applePay from "../assets/apple-pay.png";
import cloud7 from "../assets/cloud-7.png";
import cloud8 from "../assets/cloud-8.png";
import moonshot from "../assets/moonshot.png";

const Buy = () => {
  return (
    <section className="buy-background pt-[80px] md:pt-[112px] pb-[50px] md:pb-[75px] relative">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] md:text-[60px] font-bold text-white text-center max-w-[90%] md:max-w-[36rem] leading-[98.6%] mb-[30px] md:mb-[42px]">
          Buy Now with a Debit Card or Crypto
        </h2>
        <div className="flex flex-wrap gap-[10px] md:gap-[14px] items-center justify-center mb-[20px]">
          <div className="bg-white flex items-center justify-center size-[80px] md:size-[107px] rounded-xl">
            <img src={visa} alt="Visa" className="w-[60%]" />
          </div>
          <div className="bg-white flex items-center justify-center size-[80px] md:size-[107px] rounded-xl">
            <img src={solana} alt="Solana" className="w-[60%]" />
          </div>
          <div className="bg-white flex items-center justify-center size-[80px] md:size-[107px] rounded-xl">
            <img src={applePay} alt="Apple Pay" className="w-[60%]" />
          </div>
        </div>
        <img
          src={moonshot}
          alt="Moonshot"
          width={114}
          height={19}
          className="mb-[30px] md:mb-[42px] "
        />
        <a
          href="#"
          className="uppercase flex items-center justify-center bg-[#FFCF00] text-[16px] md:text-[19px] font-bold border-2 border-black rounded-[8px] w-fit px-[50px] md:px-[120px] py-3"
        >
          Buy now
        </a>
      </div>

      <img
        src={cloud7}
        alt="Cloud"
        className="absolute bottom-[40px] md:bottom-[70px] left-[50px] md:left-[140px] z-10 w-[100px] md:w-auto"
      />
      <img
        src={cloud8}
        alt="Cloud"
        className="absolute top-[10px] md:top-[98.93px] right-[40px] md:right-[80px] z-10 w-[100px] md:w-auto"
      />
    </section>
  );
};

export default Buy;
