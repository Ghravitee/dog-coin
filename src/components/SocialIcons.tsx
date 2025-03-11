import telegram from "../assets/telegram.png";
import tiktok from "../assets/tiktok.png";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.png";

const SocialIcons = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
      {[telegram, tiktok, twitter, discord, instagram].map((icon, index) => (
        <a
          key={index}
          href="#"
          className="p-2 flex items-center justify-center rounded-xl border-2 border-b-[4px] border-black bg-white w-10 h-10 sm:w-12 sm:h-12"
        >
          <img src={icon} alt="" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
