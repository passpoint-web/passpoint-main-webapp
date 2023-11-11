import Image from "next/image";
import goService1 from "../../public/assets/images/cardAbout/service-1.svg";
import goService2 from "../../public/assets/images/cardAbout/service-2.svg";
import goService3 from "../../public/assets/images/cardAbout/service-3.svg";
import goService4 from "../../public/assets/images/cardAbout/service-4.svg";
import goService5 from "../../public/assets/images/cardAbout/service-5.svg";
import goService6 from "../../public/assets/images/cardAbout/service-6.svg";

const goServiceData = [
  {
    data: "zoom-in-right",
    image: goService1,
    bg: "bg-[rgba(233,181,0,0.25)]",
    title: "Service Portfolio",
    text: "Passpoint Go service portfolio helps to showcase your business capabilities and expertise, and provide customers with clear understanding of the value that your business can offer.",
  },
  {
    data: "zoom-in",
    image: goService2,
    bg: "bg-[rgba(55,24,87,0.25)]",
    title: "Store Front ",
    text: "Create a successful store front for your business that is designed with the customer in mind and providing your customers with a clear sense of the brand, message of the brand and increasing sales.",
  },
  {
    data: "zoom-in-left",
    image: goService3,
    bg: "bg-[rgba(235,63,117,0.25)]",
    title: "Access APIs",
    text: "Passpoint Go users can build a platform for their customers with our access APIs. By leveraging external data and functionality, developers can create more powerful and sophisticated applications that can adapt to changing business needs and customer requirements.",
  },
  {
    data: "zoom-in-right",
    image: goService4,
    bg: "bg-[rgba(0,78,98,0.25)]",
    title: "Card Management",
    text: " You can get your preferred card either virtual or physical cards and view card transaction history, fund card, set transaction limits and many more. Our card management helps businesses operate efficiently, securely and profitably.",
  },
  {
    data: "zoom-in",
    image: goService5,
    bg: "bg-[rgba(164,2,53,0.25)]",
    title: "Wallet Management",
    text: "You can create multiple currency wallets and also for fiat, fund wallet from virtual wallet and passpoint account and transfer across user account wallet and to currency bank account.",
  },
  {
    data: "zoom-in-left",
    bg: "bg-[rgba(18,74,74,0.25)]",
    image: goService6,
    title: "Invoices",
    text: "Our platform provides you with all the tools and resources you need to generate invoices with ease for your business and with our automated reminders and payment tracking, you can ensure that your clients always pay on time.",
  },
];

const ServiceCard = () => {
  return (
    <>
      {goServiceData.map((item, id) => (
        <div
          data-aos={item.data}
          key={id}
          className="group bg-white p-[32px] rounded-[0px_0px_16px] border border-solid border-[#ebebeb] hover:bg-primary hover:border-primary cursor-context-menu hover:scale-[1.03] transition-g tab:max-w-[385px] sm:p-[24px]"
        >
          <div
            className={`w-fit p-[20px_16px] ${item.bg} shadow-[0px_12px_40px_rgba(0,0,0,0.08)] rounded-[0px_8px_0_8px] transition-all ease-in-out duration-500 group-hover:bg-white`}
          >
            <Image
              src={item.image}
              width={40}
              height={0}
              alt="passpoint thumbnails"
              className="group-hover:primaryFilter sm:w-[25px]"
            />
          </div>
          <h3 className="text-[20px] font-semibold text-secondary group-hover:text-white m-[30px_0_16px] sm:text-[18px]">
            {item.title}
          </h3>
          <p className="text-[#656565] text-[16px] group-hover:text-white sm:text-[15px]">
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
