const Menu = ({ openNav, setOpenNav }) => {
  return (
    <button
      className={`hidden tab:flex top-0 right-0 z-20 relative w-10 h-10 focus:outline-none transform transition duration-300 ease-in-out`}
      onClick={() => setOpenNav(!openNav)}
    >
      <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <span
          className={`absolute h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out ${
            openNav ? "rotate-45 delay-200" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 bg-primary transform transition-all duration-200 ease-in-out ${
            openNav ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-5 bg-primary transform transition duration-300 ease-in-out ${
            openNav ? "-rotate-45 delay-200" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default Menu;
