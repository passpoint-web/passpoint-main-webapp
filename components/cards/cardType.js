import CardInfo from "./cardInfo";

const CardType = () => {
  return (
    <div className="w-full m-[90px_0]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[85%] mx-auto md:w-[90%]"
      >
        <h2 className="text-[3vw] text-secondary font-semibold mb-[16px] text-center sm:text-[5vw]">
          Our Cards
        </h2>
        <p className="text-[16px] text-secondary text-center w-[45%] mx-auto tab:w-[100%]">
          From entertainment, to subscriptions, to IT resources, and global
          purchases, there is a passpoint card for you
        </p>
        <div>
          <CardInfo />
        </div>
      </div>
    </div>
  );
};

export default CardType;
