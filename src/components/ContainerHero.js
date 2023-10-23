import Property1Variant2 from "./Property1Variant2";
import Property1Default from "./Property1Default";

const ContainerHero = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[20px] text-left text-131xl text-steelblue-100 font-josefin-sans">
      <div className="flex flex-col items-start justify-start py-[50px] px-[61px] gap-[25px]">
        <div className="relative leading-[130px]">
          <p className="m-0">
            <b className="font-josefin-sans">MOZA</b>
          </p>
          <p className="m-0 tracking-[0.38em] font-light">LIFE</p>
        </div>
        <div className="relative text-31xl font-light text-steelblue-200 inline-block w-[480px]">
          Choose the best healthier way of life
        </div>
        <div className="rounded-8xs w-[480px] overflow-hidden flex flex-row items-center justify-center py-[15px] px-[50px] box-border gap-[20px] text-6xl">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/leaficon.svg"
          />
          <div className="relative">100% Natural Food</div>
        </div>
        <Property1Variant2
          iconId="/icon.svg"
          propTop="unset"
          propPosition="relative"
          propLeft="unset"
          propFlexShrink="0"
          propLeft1="-492.5px"
          propColor="#006699"
        />
      </div>
      <div className="relative w-[765px] h-[705px] bg-[url('/public/table@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <Property1Default
          frameDivTop="264px"
          frameDivLeft="258.5px"
          frameDivWidth="calc(100% - 731px)"
          frameDivHeight="calc(100% - 671px)"
          frameDivRight="472.5px"
          frameDivBottom="407px"
        />
        <Property1Default
          frameDivTop="179px"
          frameDivLeft="427.5px"
          frameDivWidth="calc(100% - 731px)"
          frameDivHeight="calc(100% - 671px)"
          frameDivRight="303.5px"
          frameDivBottom="492px"
        />
        <Property1Default
          frameDivTop="92px"
          frameDivLeft="563.5px"
          frameDivWidth="calc(100% - 731px)"
          frameDivHeight="calc(100% - 671px)"
          frameDivRight="167.5px"
          frameDivBottom="579px"
        />
        <Property1Default
          frameDivTop="287px"
          frameDivLeft="494.5px"
          frameDivWidth="calc(100% - 731px)"
          frameDivHeight="calc(100% - 671px)"
          frameDivRight="236.5px"
          frameDivBottom="384px"
        />
        <Property1Default
          frameDivTop="424px"
          frameDivLeft="475.5px"
          frameDivWidth="calc(100% - 731px)"
          frameDivHeight="calc(100% - 671px)"
          frameDivRight="255.5px"
          frameDivBottom="247px"
        />
      </div>
    </div>
  );
};

export default ContainerHero;
