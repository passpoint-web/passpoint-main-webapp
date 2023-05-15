import Image from "next/image";
import Form from "./form";
import { contactData } from "@/constant/heroData";

const InTouch = () => {
  return (
    <div className="w-full p-[150px_0_150px] sm:p-[120px_0_150px]">
      <h2 className="w-[90%] mx-auto text-[40px] text-secondary text-center font-bold md:text-[30px] sm:text-[24px]">
        Get In Touch With US !
      </h2>
      <div className="w-[85%] mx-auto flex justify-between mt-[100px] md:w-[90%] tab:flex-col tab:gap-[50px] sm:mt-[50px]">
        <div className="w-[25%] flex flex-col justify-between md:w-[35%] tab:w-full tab:gap-[30px]">
          {contactData.map((item, id) => (
            <div
              key={id}
              className="w-full inline-flex flex-col items-center text-center" 
            >
              <Image src={item.image} alt="passpoint contact" className="w-[48px] h-[48px] sm:w-[35px]" />
              <h3 className="text-[24px] text-secondary font-bold m-[16px_0_10px] md:text-[20px] sm:text-[18px] sm:m-[10px_0]">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#727272]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[60%] tab:w-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default InTouch;
