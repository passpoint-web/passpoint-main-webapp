const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div className="w-full mb-[30px] [&>*]:w-full [&>*]:h-[50px] [&>*]:px-[20px] [&>*]:rounded-[12px] [&>*]:text-[14px] grid gap-[50px] [&>*]:bg-lightgray [&>*]:outline-none [&>:last-child]:h-[179px] sm:gap-[30px]">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea
          name=""
          placeholder="Message"
          className="pt-[10px] resize-none"
        ></textarea>
      </div>
      <button
        onClick={handleSubmit}
        className="p-[18px_32px] text-[16px] bg-primary text-white rounded-[100px] font-bold border-primary borderAttributes hover:text-primary sm:p-[14px_25px] sm:text-[14px]"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
