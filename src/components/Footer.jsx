import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gdg, medea } from "../assets/index";
import { footer } from "../constants/index";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
  return (
    <div className="pb-[100px] w-full  pt-[180px] flex flex-col justify-center items-center gap-[27px]">
      <img src={gdg} alt="gdg" className="w-[152.915px] h-[11.835px]" />
      <img src={medea} alt="medea" className=" w-[90.988px] h-[22.589px] " />
      <Fade direction="up" triggerOnce>
        <h1 className="text-white text-[48px] font-bold">Contact Us</h1>
      </Fade>
      <div className=" flex  justify-center items-center gap-[16px]  ">
        {footer.map((item ) => (
           <Fade key={item.id} direction="up" delay={item.id * 150} triggerOnce>
               <div key={item.id} className=" ">
            <a href="http" className="">
              <FontAwesomeIcon
                className="text-white text-[28px] hover:text-[#F9AB00]"
                icon={item.src}
              />
            </a>
          </div>
           </Fade>
         
        ))}
      </div>
    </div>
  );
};

export default Footer;
