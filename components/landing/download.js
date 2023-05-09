import Image from "next/image";
import Join from "../../public/assets/images/landing/join-phone.png";

const Download = () => {
  return (
    <div className="w-full bg-white mt-[100px]">
      <div className="w-[85%] mx-auto flex justify-between gap-[50px] md:w-[90%] tab:flex-col items-center">
        <div className="w-[60%] md:w-[65%] tab:w-[100%] tab:text-center">
          <h2 className="text-[3.2vw] w-[90%] font-bold text-secondary leading-[4vw] md:w-[100%] tab:text-[35px] tab tab:text-center tab:leading-[35px] sm:text-[24px]">
            <span className="text-primary">Passspoint</span> is available on all
            devices
            {/* Get Your <span className="text-primary">Cards</span> On Our Mobile App */}
          </h2>
          <p className="text-[16px] w-[80%] font-medium text-secondary m-[30px_0px_24px] md:w-[100%] md:m-[20px_0px_16px] md:text-[15px]">
            Download our app to perform all your travel transactions at your own
            convenience and view all your travelling transactions history
            anywhere and anytime.
          </p>
          <small className="text-[16px] font-medium text-black">
            DOWNLOAD NOW ON :
          </small>
          <div className="flex gap-[24px] w-full tab:w-[85%] tab:gap-[18px] mt-[24px] tab:justify-center tab:mx-auto">
            <a href="#">
              <Image
                src="/assets/images/landing/play-store.svg"
                width={200}
                height={70}
                alt="passpoint app download"
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/landing/apple-store.svg"
                width={200}
                height={70}
                alt="passpoint app download"
              />
            </a>
          </div>
        </div>
        <div className="w-[%40] flex justify-end md:w-[35%] tab:w-[100%] tab:justify-center">
          <Image
            src={Join}
            width={563}
            height={758}
            placeholder="blur"
            alt="passpoint phone"
            className="w-[100%] md:object-contain tab:object-contain tab:w-[70%] sm:w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
