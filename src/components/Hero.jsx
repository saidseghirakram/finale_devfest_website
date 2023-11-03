import {
  Bannerbg_Yellow,
  medea23,
  devfestlogo,
  netIcon,
  video_vector,
  countdown,
} from "../assets";
import CountdownClock from "./CountdownClock";
import TypingText from "./TypingText";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const targetDate = new Date("2023-12-23T00:00:00").toISOString();

  return (
    <>
      <div className="pt-[100px]  min-h-[1000px] pb-10 " id="home">
        <div className="flex   md:flex-row md:justify-between md:items-center    flex-col items-start justify-start       md:pl-4 sm:pl-10 ">
         <Fade direction="left" duration={2000} triggerOnce>
         <div className=" flex-1  flex-wrap flex flex-col  sm:flex-2 gap-[16px] items-start justify-between flex-shrink-0  p-5  md:p-5  ">
            <TypingText />
            <div className="text-white text-[64px]  ">more</div>
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center gap-[16px]  md:flex-col  md:items-start lg:items-center     lg:flex-row  ">
              <img
                src={devfestlogo}
                alt="devfestTxt"
                className=" h-[69.727px] w-[242.149px] mr-10"
              />
              <img
                src={medea23}
                alt="medea23"
                className="h-[39.028px] w-[242.149px] "
              />
            </div>
            <div className="text-white text-[64px]">
              await <span className="text-[#FDB705]">you</span>
            </div>
          </div>
         </Fade>

          
          <img
            src={Bannerbg_Yellow}
            alt="bannerbg_Yellow"
            className="flex-1 md:w-[150px] md:h-[493px]"
          />
          
        </div>
        <img
          src={video_vector}
          alt="video_vector"
          className=" absolute md:hidden  sm:top-[170px] sm:left-[600px] top-[180px] right-[50px] lg:block   "
        />
        <img
          src={netIcon}
          alt="netIcon"
          className="hidden  relative left-[550px]  lg:block "
        />
        <div className="block lg:w-[fit-content] md:w-[680px] sm:w-[400px] w-[221px] mx-auto">
          <CountdownClock targetDate={targetDate} />
        </div>
        <div className="flex items-end justify-around">
          <img src={netIcon} alt="netIcon" className="mr-10 sm:mr-0" />

         <Fade direction="up" triggerOnce>
         <p className=" text-[#FFF] font-google-sd md:text-[63px] text-[32px] leading-[normal] text-center mt-[58px]">
            for the event
          </p>
         </Fade>
          <img src={countdown} alt="netIcon" className="relative top-10" />
        </div>
      </div>
    </>
  );
};

export default Hero;
