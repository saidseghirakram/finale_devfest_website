import { Fade } from "react-awesome-reveal";
import { ballsColor } from "../assets/index";
import SpeakersItem from "./SpeakersItem";

const Speakers = () => {
  return (
    <div id="speakers" className="bg-black  min-h-[1972px] w-full py-[80px] px-[10px]  flex flex-col items-center justify-between">
      <img src={ballsColor} alt="ballsColor" className="w-[262px] h-[46px]" />
      <Fade direction="up" triggerOnce>
        <h1 className="text-white  text-[48px] md:text-[96px] font-normal my-10">
          Our Speakers
        </h1>
      </Fade>
      <SpeakersItem />
    </div>
  );
};

export default Speakers;
