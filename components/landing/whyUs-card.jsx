import Image from "next/image";

const whyUsCard = ({ image, title, text, data }) => {
  return (
    <div
      data-aos-duration="500"
      data-aos={data}
      className="group bg-[#FFFEFE] rounded-[16px] text-center flex flex-col items-center p-[18px_18px_30px] shadow-[0px_12px_40px_rgba(0,0,0,0.08)] tab:max-w-[389px]"
    >
      <Image
        alt="passpoit choose us"
        src={image}
        width={100}
        height={117}
        className="h-[100px]"
      />
      <h3 className="text-[20px] font-[600] mt-[60px] mb-[16px] tab:mt-[26px] tab:text-[18px]">
        {title}
      </h3>
      <p className="text-[16px] leading-[150%] text-secondary">{text}</p>
    </div>
  );
};

export default whyUsCard;
