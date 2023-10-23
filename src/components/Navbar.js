const Navbar = () => {
  return (
    <div className="bg-whitesmoke w-[1440px] h-[70px] overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[550px] text-left text-6xl text-steelblue-100 font-josefin-sans">
      <div className="flex flex-row items-center justify-center">
        <img
          className="relative w-[93.1px] h-[93.1px] object-cover"
          alt=""
          src="/navlogo@2x.png"
        />
      </div>
      <div className="h-[71px] overflow-hidden flex flex-row items-center justify-start gap-[61px]">
        <div className="h-[69px] flex flex-row items-center justify-center py-0 px-[5px] box-border">
          <div className="relative font-light">ABOUT</div>
        </div>
        <div className="h-[69px] flex flex-row items-center justify-center py-0 px-[5px] box-border">
          <div className="relative font-light">HOME</div>
        </div>
        <div className="h-[69px] flex flex-row items-center justify-center py-0 px-[5px] box-border">
          <div className="relative font-light">FEATURES</div>
        </div>
        <div className="h-[69px] flex flex-row items-center justify-center py-0 px-[5px] box-border">
          <div className="relative font-light">RESOURCES</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
