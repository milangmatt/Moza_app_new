import { useMemo } from "react";

const Property1Default = ({
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
  frameDivHeight,
  frameDivRight,
  frameDivBottom,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
      height: frameDivHeight,
      right: frameDivRight,
      bottom: frameDivBottom,
    };
  }, [
    frameDivTop,
    frameDivLeft,
    frameDivWidth,
    frameDivHeight,
    frameDivRight,
    frameDivBottom,
  ]);

  return (
    <div
      className="absolute top-[20px] left-[20px] rounded-mid w-[34px] h-[34px]"
      style={property1DefaultStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-mid bg-black w-[34px] h-[34px]">
        <div className="absolute top-[5px] left-[16px] bg-white w-[2.3px] h-[23.7px]" />
        <div className="absolute top-[15.7px] left-[29px] bg-white w-[2.3px] h-[23.7px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
    </div>
  );
};

export default Property1Default;
