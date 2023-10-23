import { useMemo } from "react";

const Change = ({
  dimension,
  carDimensions,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  const changeStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div
      className="absolute top-[20px] left-[20px] bg-white overflow-hidden flex flex-row items-center justify-center text-center text-17xl text-darksalmon font-josefin-sans"
      style={changeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[15px]">
        <div className="relative w-[853px] h-[179px]">
          <div className="absolute top-[90px] left-[calc(50%_-_178.5px)] leading-[100%] font-medium">
            <p className="m-0">CHANGING THE LIFESTYLE</p>
            <p className="m-0">WITHOUT CHANGING IT</p>
          </div>
        </div>
        <div className="relative w-[853px] h-[606px]">
          <img
            className="absolute top-[7.7px] left-[527.1px] rounded-[59.62px] w-[498.6px] h-[590.7px] object-cover"
            alt=""
            src={dimension}
          />
          <img
            className="absolute top-[2px] left-[2px] rounded-[59.62px] w-[509.7px] h-[601.9px] object-cover"
            alt=""
            src="/rectangle-1092@2x.png"
          />
          <img
            className="absolute top-[46.3px] left-[314.4px] rounded-[59.62px] w-[362.5px] h-[527.9px] object-cover"
            alt=""
            src={carDimensions}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-160xl">
        <div className="relative w-[587px] h-[321px]">
          <b className="absolute top-[45px] left-[105px] leading-[88%]">
            <p className="m-0">WHY</p>
            <p className="m-0 text-125xl">MOSA</p>
            <p className="m-0 text-176xl">LIFE</p>
          </b>
        </div>
        <div className="relative w-[587px] h-[529px]">
          <img
            className="absolute top-[-321px] left-[-334px] w-[921px] h-[850px] object-cover"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Change;
