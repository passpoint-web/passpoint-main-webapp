import { faqData } from "@/constant/heroData";
import { useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="w-[85%] transition-all mx-auto grid gap-[40px] my-[80px] md:w-[90%]">
      {faqData.map((faq, index) => (
        <AccordionItem
          faq={faq}
          key={index}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}
    </ul>
  );
};

export default Accordion;

const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;
  const contentEl = useRef();

  return (
    <li>
      <button
        className={`w-full flex justify-between items-center gap-[20px] outline-none border-none`}
        onClick={onToggle}
      >
        <p className="text-[32px] text-left font-semibold text-primary md:text-[24px] sm:text-[18px]">
          {question}
        </p>
        <HiOutlineChevronDown
          className={`transition text-[20px] sm:text-[18px] ${
            active ? "rotate-180 text-primary" : "text-[#292D32]"
          }`}
        />
      </button>
      <div
        ref={contentEl}
        className="transHeight overflow-hidden"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="text-[18px] mt-[20px] text-secondary leading-[30px] sm:text-[16px] sm:leading-[25px]">
          {answer}
        </p>
      </div>
    </li>
  );
};
