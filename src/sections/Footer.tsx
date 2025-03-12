import mainCharacter from "../assets/main-character-1.png";
import logo from "../assets/dogcoin-logo.png";
import SocialIcons from "../components/SocialIcons";
import cloud9 from "../assets/cloud-9.png";

const Footer = () => {
  return (
    <footer className="pb-[40px]">
      <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row gap-[30px] justify-between mx-auto text-center md:text-left">
        {/* Left Section: Logo & Description */}
        <div className="flex flex-col w-full md:w-[50%] items-center md:items-start">
          <div className="flex items-center gap-[20px]">
            <img
              src={mainCharacter}
              alt="Mascot"
              width={60}
              height={60}
              className="w-[60px] md:w-[75px] h-auto"
            />
            <img
              src={logo}
              alt="Dogcoin Logo"
              className="w-[100px] md:w-auto"
            />
          </div>
          <div className="mt-[20px] md:mt-[31px]">
            <p className="text-[18px] md:text-[24px] font-light mb-[15px] md:mb-[20px]">
              The day had begun on a bright note. The sun finally peeked through
              the rain for the first time in a week, and the birds were singing
              in its warmth.
            </p>
            <p className="text-[18px] md:text-[24px] font-light">
              @Dogcoin 2025 All rights reserved.
            </p>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="flex flex-col gap-[15px] md:gap-[21px] w-full md:w-[25%] items-center md:items-start">
          {["About", "Tokenomics", "How to buy?", "Stake", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-[20px] md:text-[24px] font-medium"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right Section: Community & Social Icons */}
        <div className="flex flex-col w-full md:w-[15%] items-center md:items-start">
          <h2 className="text-[20px] md:text-[24px] font-medium mb-[15px] md:mb-[21px]">
            Community:
          </h2>
          <SocialIcons />
        </div>
      </div>

      {/* Background Image */}
      <img
        src={cloud9}
        alt="Cloud Background"
        className="w-full mt-[30px] md:mt-0"
      />
    </footer>
  );
};

export default Footer;
