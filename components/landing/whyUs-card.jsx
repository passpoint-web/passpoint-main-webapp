import Image from "next/image";

const whyUsCard = ({ image, title, text }) => {
  return (
    <div className="group bg-[#FFFEFE] rounded-[16px] text-center flex flex-col items-center p-[18px] shadow-[0px_12px_40px_rgba(0,0,0,0.08)] tab:max-w-[389px]">
      <Image
        priority
        alt="passpoit choose us"
        src={`/assets/images/landing/${image}`}
        width={100}
        height={0}
      />
      <h3 className="text-[20px] font-[600] mt-[60px] mb-[16px]">{title}</h3>
      <p className="text-[16px] leading-[150%] text-secondary">{text}</p>
    </div>
  );
};

export default whyUsCard;
