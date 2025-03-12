import SocialIcons from "../components/SocialIcons";
import mainCharacter from "../assets/community-image.png";
import Copy from "../components/Copy";

const Community = () => {
  return (
    <section className="py-[106px] px-4">
      <div className="w-full xl:w-[80%] mx-auto rounded-4xl bg-[#FFCF00] relative border-[3px] border-b-[8px] border-black p-6 md:pl-[120px] md:pr-[104px] flex flex-col lg:flex-row gap-6 md:gap-4 items-center">
        {/* Main character image */}
        <img
          src={mainCharacter}
          alt="This is the image of the main character"
          height={688}
          className="w-[80%] max-w-[350px] md:max-w-none md:w-auto"
        />

        {/* Content section */}
        <div className="mt-4 md:mt-10 text-center md:text-left">
          <h2 className="text-[40px] md:text-[48px] font-bold mb-4 text-center lg:text-left leading-[96.8%]">
            Join the community
          </h2>
          <p className="text-[18px] md:text-[23px] mb-4 text-center lg:text-left">
            The day had begun on a bright note. The sun finally peeked through
            the rain for the first time in a week, and the birds were singing in
            its warmth.
          </p>

          {/* Community section */}
          <h2 className="text-[18px] md:text-[24px] font-medium mb-4 mt-6 text-center lg:text-left">
            Join the community
          </h2>

          {/* Social icons */}
          <SocialIcons />
        </div>
      </div>
      {/* Contract Address Section */}
      <div className="flex flex-col items-center gap-1.5 text-center mt-[85px]">
        <h2 className="text-[20px] md:text-[24px] font-medium">
          Solana Contract Address
        </h2>
        <Copy />
      </div>
    </section>
  );
};

export default Community;
