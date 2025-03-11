type Props = {
  content: string;
};

const Button = ({ content }: Props) => {
  return (
    <a
      href="#"
      className="flex items-center justify-center bg-[#FFCF00] text-[19px] font-bold border-2 border-black border-b-4 rounded-[8px] px-[48px] py-[10px]"
    >
      {content}
    </a>
  );
};

export default Button;
