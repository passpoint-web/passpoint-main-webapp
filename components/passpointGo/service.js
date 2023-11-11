import ServiceCard from "./serviceCard";

const Service = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="w-[85%] mx-auto md:w-[90%]">
        <div className="flex flex-col items-center">
          <p className="text-[16px] text-secondary font-semibold text-center flex items-center">
            Our Services{" "}
            <span className="inline-block w-[37px] h-[1.5px] bg-black ml-[7px] sm:w-[20px]"></span>
          </p>
          <h2 className="text-[2.5vw] font-[600] text-secondary text-center tab:text-[5vw]">
            Services Provide By Passpoint Go
          </h2>
        </div>
        <div className="w-full mx-auto mt-[30px] grid grid-cols-fluid gap-[20px] justify-items-center sm:gridCol">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Service;
