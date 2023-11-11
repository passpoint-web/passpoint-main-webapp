import Image from "next/image";

const ValueCard = ({ image, title, text, data }) => {
  return (
    <div data-aos={data}>
      <Image src={image} alt="passpoint value" className="w-[60px] h-auto tab:w-[40px]" />
      <h3 className="text-[18px] text-secondary font-semibold m-[18px_0_14px]">{title}</h3>
      <p className="text-[16px] text-secondary">{text}</p>
    </div>
  );
};

export default ValueCard;
