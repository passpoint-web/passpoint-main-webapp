import Image from "next/image";
import HeroImage from "../../public/assets/images/cardAbout/phone-card.webp";

const cardDetail = [
  {
    num: "1",
    card: "Virtual Card",
    detail:
      "Get your virtual card in USD or other local currencies to make your travel payments and other utilities online and in-store while saving on currency conversion fees with extra layer of security. Virtual cards work exactly like your physical bank card, they just live in your digital wallet on your phone instead of your physical card.",
  },
  {
    num: "2",
    card: "Physical Debit Card",
    detail:
      "We also issue physical debit card to our customers to carry out their travel transactions at point-of-sale(PoS) terminals and online transactions in any destination country. You can request for a physical card and get it delivered to you within a specific working days or you can request for pick up.",
  },
];

const CardInfo = () => {
  return (
    <div className="w-full flex justify-between items-center gap-[50px] mt-[30px] md:gap-[30px] tab:flex-col">
      <section className="w-[47%] grid gap-[50px] md:gap-[20px] md:w-[57%] tab:w-full">
        {cardDetail.map((card, id) => (
          <div
            data-aos="fade-up"
            key={id}
            className="w-full bg-white gap-[30px] border border-[#bebebe] rounded-[16px] p-[32px_24px] group hover:bg-[rgba(0,158,197,0.05)] hover:border-[rgba(0,158,197,0.05)] transition-g md:p-[20px_16px]"
          >
            <span className="text-[2vw] w-fit block font-medium bg-[#dfdfdf] transition-g group-hover:bg-[rgba(0,158,197,0.25)] text-secondary group-hover:text-primary p-[8px_24px] rounded-[16px] tab:text-[16px]">
              {card.num}
            </span>
            <h3 className="text-[1.5vw] font-bold text-secondary transition-g group-hover:text-primary m-[24px_0_16px] md:text-[18px] md:m-[18px_0_14px] sm:text-[16px] sm:m-[14px_0_14px]">
              {card.card}
            </h3>
            <p className="text-[1.25vw] text-secondary leading-[150%] md:text-[14px]">
              {card.detail}
            </p>
          </div>
        ))}
      </section>
      <section
        data-aos="fade-left"
        className="w-[43%] flex justify-center tab:w-full tab:justify-"
      >
        <Image
          src={HeroImage}
          placeholder="blur"
          alt="passpoint phone"
          className="max-w-[100%] md:static tab:max-w-[70%] sm:max-w-[100%]"
        />
      </section>
    </div>
  );
};

export default CardInfo;
