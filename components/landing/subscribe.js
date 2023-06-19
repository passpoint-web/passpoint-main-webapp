const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full bg-lightBlue flex justify-center py-[50px] my-[60px]">
      <form className="w-[60%] mx-auto flex flex-col item-center justify-center tab:w-[90%] ">
        <h2 className="text-[3.2vw] font-bold text-center tab:text-[5vw]">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-[24px] text-secondary text-center mt-[10px] md:text-[16px]">
          Subscribe To Our Newsletter For more update
        </p>

        <label className="w-[80%] h-[50px] mx-auto flex justify-center mt-[50px] tab:w-[100%]">
          <input
            type="text"
            className="w-[70%] h-full text-[16px] bg-[#f9f9f9] rounded-[8px_0px_0_8px] border-none outline-none px-[20px] placeholder-[#b3b3b3]"
            placeholder="Your Email Address"
          />
          <button
            onClick={handleSubmit}
            className="w-fit h-full bg-primary text-white font-bold text-[18px] px-[30px] rounded-[0px_100px_100px_0px] tab:px-[20px] tab:text-[14px]"
          >
            Subscribe
          </button>
        </label>
      </form>
    </div>
  );
};

export default Subscribe;
