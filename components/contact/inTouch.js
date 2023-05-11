import Image from "next/image";
import Form from "./form";
import Contac1 from "../../public/assets/images/cardAbout/contact-1.svg";
import { contactData } from "@/constant/heroData";

const InTouch = () => {
  return (
    <div className="w-full mt-[150px]">
      <h2 className="w-[90%] mx-auto text-[40px] text-secondary text-center font-bold">
        Get In Touch With US !
      </h2>
      <div className="w-[85%] mx-auto flex justify-between">
        <div>
          {contactData.map((item, id) => (
            <div key={id} className="flex flex-col items-center">
              <Image src={item.image} alt="passpoint contact" />
              <h3 className="text-[24px] text-secondary font-bold m-[16px_0_10px]">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#727272] ">{item.text}</p>
            </div>
          ))}
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default InTouch;
