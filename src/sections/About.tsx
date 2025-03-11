import mainCharacter from "../assets/main-character.png";
import doubleArrow from "../assets/double-alt-arrow.png";
import SocialIcons from "../components/SocialIcons";
import cloud3 from "../assets/cloud-3.png";
import cloud4 from "../assets/cloud-4.png";

const About = () => {
  return (
    <section className="">
      <div className="mask-group w-[80%] mx-auto rounded-4xl bg-[#FFCF00] relative border-[3px] border-b-[8px] border-black pl-[120px] pr-[104px] flex gap-4">
        <img
          src={mainCharacter}
          alt="This is the image of the main character"
          height={688}
          className=""
        />
        <div className="mt-10">
          <h2 className="text-[70px] font-bold mb-4">ABOUT $DOGCOIN</h2>
          <p className="text-[23px] mb-4">
            The day had begun on a bright note. The sun finally peeked through
            the rain for the first time in a week, and the birds were singing in
            its warmth. There was no way to anticipate what was about to happen.
            It was a worst-case scenario and there was no way out of it.
          </p>
          <div className="flex items-center gap-[29px]">
            <a
              href="#"
              className="flex items-center justify-center bg-white text-[19px] font-bold border-2 border-black border-b-4 rounded-[8px] px-[48px] py-[10px]"
            >
              Buy now
              <img src={doubleArrow} alt="" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-[#FFCF00] text-[19px] font-bold border-2 border-black rounded-[8px] px-[48px] py-[10px]"
            >
              Stake and earn
            </a>
          </div>
          <h2 className="text-[20px] sm:text-[24px] font-medium mb-4 mt-[18px]">
            Join the community
          </h2>

          {/* Social icons */}
          <SocialIcons />
        </div>
        <img src={cloud3} alt="" className="absolute -top-16 -right-16 z-10" />
        <img
          src={cloud4}
          alt=""
          className="absolute -bottom-28 -left-16 z-10"
        />
      </div>
    </section>
  );
};

export default About;
