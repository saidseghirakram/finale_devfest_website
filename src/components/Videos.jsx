import { Fade } from "react-awesome-reveal";
import { videos } from "../constants/index";

const Videos = () => {
  return (
    <div className="bg-[#F9AB00] flex flex-wrap px-[32px] py-[70px] justify-center items-center content-center gap-x-[193px] gap-y-[60px]">
      {videos.map((nav, index) => (
        <Fade key={nav.id} direction="up" delay={index * 150} triggerOnce>
          <div className="sm:w-[450px]  w-full flex flex-col">
           
            <iframe className="h-[291px] self-stretch rounded-[30px] w-[500px] max-sm:w-[400px] mb-[25px] object-cover"  height="315" src={nav.URL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <h1 className="text-gray-700 font-inter text-lg font-bold leading-[140.523%] text-center">
              {nav.title}
            </h1>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Videos;
