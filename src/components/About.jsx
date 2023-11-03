import { logo, highlits, imageGDG, devfestaboutBlue, icons } from "../assets";
import { useState, useEffect, useRef } from "react";
import Videos from "./Videos";
import Carousel from "./Carousel";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const [participants, setParticipants] = useState(747);
  const [conferences, setConferences] = useState(3);
  const participantsRef = useRef(null);
  const conferencesRef = useRef(null);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isElementInViewport(participantsRef.current)) {
        if (participants < 750) {
          setParticipants(participants + 1);
        } else {
          setParticipants("+750");
        }
      }
      if (isElementInViewport(conferencesRef.current)) {
        if (conferences < 6) {
          setConferences(conferences + 1);
        } else {
          setConferences("+6");
        }
      }
    }, 220);

    return () => clearInterval(intervalId);
  }, [participants, conferences]);

  return (
    <div className="relative min-h-[2989px]">
      <div className="flex w-[100%] md:justify-end justify-center mt-16">
       <Fade direction="right" triggerOnce>
       <img
          src={logo}
          alt="logo"
          className="block right-40 top-0 w-[270px] h-[105px] md:w-[307.758px] md:h-[145px] md:mr-[176.24px]"
        />
       </Fade>
      </div>

      {/* start definition */}
    <Fade direction="up" triggerOnce>
    <p className=" w-[85%] self-stretch pt-16 pb-24 text-white text-center font-google-sd text-[22px] sm:text-[28px] md:text-[36px]  font-normal mx-auto">
        Devfest is a technology-focused event organized by Google Developer
        Groups (GDGs) or other tech communities worldwide. The term "Devfest" is
        a portmanteau of "developer" and "festival." Devfest events typically
        feature a wide range of activities and sessions related to technology,
        software development, and innovation. These events are open to a diverse
        audience, including developers, designers, tech enthusiasts, students,
        and professionals.
      </p>
    </Fade>

      <Fade direction="left" triggerOnce>
      <div className="flex flex-col md:ml-20 md:items-start items-center">
        <img
          src={highlits}
          alt="highlits"
          className=" h-[80px] w-[260px] sm:h-[100px] sm:w-[320px] md:w-[462px] md:h-[124px] flex-shrink-0"
        />

        <img
          src={devfestaboutBlue}
          alt="devfestaboutBlue"
          className="w-[200px] h-[35px] sm:w-[250px] sm:h-[44px] md:w-[339px] md:h-[52.301px] flex-shrink-0"
        />
      </div>
      </Fade>

      <div className=" w-[98%] md:w-[94%] flex justify-center md:justify-end items-end mt-6">
       
       <div ref={participantsRef}>
          <div className="text-[45px] sm:text-[62px] md:text-[96px] bg-[#F9AB00] rounded-[20px] text-center w-[120px] sm:w-[170px] md:w-[240px] text-white mb-4">
            {participants}
          </div>
          <h3 className="text-white text-center font-noto-sans text-[1.25rem] md:text-[2.25rem] font-normal leading-[140.523%] capitalize">
            Participent
          </h3>
        </div>
        <div className=" ml-8 md:ml-8" ref={conferencesRef}>
          <div className="text-[45px] sm:text-[62px] md:text-[96px] bg-[#F9AB00] rounded-3xl text-center w-[120px] sm:w-[170px] md:w-[220px] text-white mb-4">
            {conferences}
          </div>
          <h3 className="text-white text-center font-noto-sans text-[1.25rem] md:text-[2.25rem] font-normal leading-[140.523%] capitalize">
            Conference
          </h3>
        </div>

       
      </div>

      {/* end definition */}
      {/* start images  */}
     <Fade direction="up" triggerOnce>
     <div className="flex lg:flex-row flex-col items-center content-center w-[100%] flex-wrap mt-4 gap-2">
        <img
          src={imageGDG}
          alt="imageGDG"
          className="lg:w-[48%] h-[ 472px] flex-shrink-0"
        />
        <img
          src={icons}
          alt="icons"
          className="flex-shrink-0 md:hidden lg:inline-block lg:w-[48%] lg:h-[362px]  "
        />
      </div>
     </Fade>
      {/* end images  */}
      {/* start videos  */}

      <Videos />
      <Carousel />
    </div>
  );
};

export default About;
