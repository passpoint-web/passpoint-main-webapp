import Image from "next/image";
import HeroImage from "../../public/assets/images/cardAbout/circle-card.png";
import Link from "next/link";

const CardTrip = () => {
  return (
    <div className="w-full m-[50px_0_50px] sm:">
      <div className="w-[85%] mx-auto flex justify-between items-center gap-[50px] md:w-[90%] tab:flex-col sm:gap-[30px]">
        <section className="w-[45%] md:w-[50%] tab:w-[70%] sm:w-[80%]">
          <Image
            src={HeroImage}
            placeholder="blur"
            alt="passpoint hero"
            className="max-w-[85%] md:max-w-[100%] tab:max-w-[100%] sm:max-w-[100%]"
          />
        </section>
        <section className="w-[45%] md:w-[50%] tab:w-[100%]">
          <h2 className="text-[40px] text-secondary font-semibold md:text-[3.5vw] md:leading-[35px] sm:text-[5.2vw]">Card for All Your Travel Trips</h2>
          <p className="text-[20px] text-secondary leading-[161%] m-[20px_0_40px] md:text-[16px] tab:text-[15px] tab:leading-[140%] tab:m-[16px_0_30px]">
            Our cards is to help travelers monitor all their travel
            transactions, pay for bills, set transaction limit and perform other
            activities in their destination country. our cards is securely saved
            for seamless payments and can be utilize anywhere.
          </p>
          <Link href="#" legacyBehavior>
            <a className="p-[18px_32px] bg-primary text-white font-bold rounded-[100px] borderAttributes border-primary hover:text-primary sm:p-[15px_26px] sm:text-[13px]">
              Get Your Passpoint Card
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CardTrip;
