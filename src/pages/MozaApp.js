import Navbar from "../components/Navbar";
import ContainerHero from "../components/ContainerHero";
import Constraints from "../components/Constraints";
import WholenessContainer from "../components/WholenessContainer";
import Change from "../components/Change";

const MozaApp = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-5 box-border gap-[30px]">
      <Navbar />
      <ContainerHero />
      <Constraints />
      <WholenessContainer />
      <Change
        dimension="/rectangle-10905@2x.png"
        carDimensions="/rectangle-10915@2x.png"
        frameDivPosition="unset"
        frameDivTop="unset"
        frameDivLeft="unset"
      />
    </div>
  );
};

export default MozaApp;
