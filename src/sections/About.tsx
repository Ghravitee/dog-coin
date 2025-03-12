import mainCharacter from "../assets/main-character.png";
import doubleArrow from "../assets/double-alt-arrow.png";
import SocialIcons from "../components/SocialIcons";
import cloud3 from "../assets/cloud-3.png";
import cloud4 from "../assets/cloud-4.png";

const About = () => {
  return (
    <section className="relative px-4 md:px-0">
      {/* Background overlay */}
      <div className="bg-white inset-0 absolute w-full h-full opacity-90" />

      <div className="w-full md:w-[80%] mx-auto rounded-4xl bg-[#FFCF00] relative border-[3px] border-b-[8px] border-black p-6 md:pl-[120px] md:pr-[104px] flex flex-col md:flex-row gap-6 md:gap-4 items-center">
        {/* Main character image */}
        <img
          src={mainCharacter}
          alt="This is the image of the main character"
          height={688}
          className="w-[80%] max-w-[350px] md:max-w-none md:w-auto"
        />

        {/* Content section */}
        <div className="mt-4 md:mt-10 text-center md:text-left">
          <h2 className="text-[40px] md:text-[70px] font-bold mb-4">
            ABOUT $DOGCOIN
          </h2>
          <p className="text-[18px] md:text-[23px] mb-4">
            The day had begun on a bright note. The sun finally peeked through
            the rain for the first time in a week, and the birds were singing in
            its warmth. There was no way to anticipate what was about to happen.
            It was a worst-case scenario and there was no way out of it.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="flex gap-2 items-center justify-center bg-white text-[16px] md:text-[19px] font-bold border-2 border-black border-b-4 rounded-[8px] px-6 py-3"
            >
              Buy now
              <img src={doubleArrow} alt="" className="h-5 md:h-6" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-[#FFCF00] text-[16px] md:text-[19px] font-bold border-2 border-black rounded-[8px] px-6 py-3"
            >
              Stake and earn
            </a>
          </div>

          {/* Community section */}
          <h2 className="text-[18px] md:text-[24px] font-medium mb-4 mt-6">
            Join the community
          </h2>

          {/* Social icons */}
          <SocialIcons />
        </div>

        {/* Background decorations */}
        <img
          src={cloud3}
          alt=""
          className="absolute -top-10 md:-top-16 -right-10 md:-right-16 z-10 w-30 md:w-auto"
        />
        <img
          src={cloud4}
          alt=""
          className="absolute -bottom-14 md:-bottom-28 -left-10 md:-left-16 z-10 w-30 md:w-auto"
        />
      </div>
    </section>
  );
};

export default About;
