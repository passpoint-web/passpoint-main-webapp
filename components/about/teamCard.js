import Image from "next/image";
import React from "react";

const TeamCard = ({ image, name, title, data }) => {
  return (
    <div data-aos="fade-up" data-aos-duration={data} className="rounded-[16px] tab:max-w-[389px]">
      <div className="">
        <Image src={image} alt="passpoint team" className="w-full h-full" />
      </div>
      <section className="py-[40px] shadow-[0px_12px_40px_rgba(0,0,0,0.08)] text-center rounded-[0_0_16px_16px]">
        <figure className="text-[18px] text-secondary font-bold">{name}</figure>
        <figcaption className="text-[16px] text-secondary mt-[5px]">{title}</figcaption>
      </section>
    </div>
  );
};

export default TeamCard;
