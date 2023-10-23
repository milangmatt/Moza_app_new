import { useMemo } from "react";

const Property1Variant2 = ({
  iconId,
  propTop,
  propPosition,
  propLeft,
  propFlexShrink,
  propLeft1,
  propColor,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      top: propTop,
      position: propPosition,
      left: propLeft,
      flexShrink: propFlexShrink,
    };
  }, [propTop, propPosition, propLeft, propFlexShrink]);

  const backdropStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const eXPLOREStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[124px] left-[20px] rounded-21xl w-[498px] h-[81px] overflow-hidden text-left text-6xl text-white font-josefin-sans"
      style={property1Variant2Style}
    >
      <div
        className="absolute top-[1.5px] left-[calc(50%_-_245.5px)] rounded-21xl bg-steelblue-100 box-border w-[491px] overflow-hidden border-[5px] border-solid border-steelblue-100"
        style={backdropStyle}
      />
      <div className="absolute top-[calc(50%_-_41px)] left-[3.5px] rounded-21xl box-border w-[491px] overflow-hidden flex flex-row items-center justify-center py-5 px-2.5 gap-[10px] border-[5px] border-solid border-steelblue-100">
        <div className="relative" style={eXPLOREStyle}>
          EXPLORE
        </div>
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0"
          alt=""
          src={iconId}
        />
      </div>
    </div>
  );
};

export default Property1Variant2;
