import Image from "next/image";

const WhyCard = ({ image, title, text }) => {
  return (
    <div data-aos="fade-up" data-aos-duration="">
      <Image
        src={image}
        alt="passpoint value"
        className="w-[32px] h-auto tab:w-[40px]"
      />
      <h3 className="text-[18px] text-secondary font-semibold m-[18px_0_14px]">
        {title}
      </h3>
      <p className="text-[16px] text-secondary">{text}</p>
    </div>
  );
};

export default WhyCard;
