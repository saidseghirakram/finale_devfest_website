import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gdg, medea } from "../assets/index";
import { footer } from "../constants/index";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
  return (
    <div className="pb-[50px] w-full  pt-[180px] flex flex-col justify-center items-center gap-[27px]">
      <img
        src={gdg}
        alt="gdg"
        className="w-[170px] h-[14px]  sm:w-[200px] sm:h-[19px] md:w-[260px] md:h-[30px]"
      />
      <img src={medea} alt="medea" className=" w-[90.988px] h-[22.589px] " />
      <Fade direction="up" triggerOnce>
        <h1 className="text-white text-[48px] font-bold">Contact Us</h1>
      </Fade>
      <div className=" flex  justify-center items-center gap-[16px]  ">
        {footer.map((item) => (
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

      <div className="w-full py-[40px] px-[10px] flex justify-center items-center gap-[10px] self-stretch bg-[#283544]">
        <div className="w-full flex flex-col">
          <p className="text-white text-center font-google-sd text-[20px] md:text-[24px] font-700">
            by IT Team GDG Medea <br /> Designed by
          </p>
          <a
            href="https://www.linkedin.com/in/akram-titraoui-483a8223b/"
            target="_blanc"
            className="text-[#FDB705] text-center font-google-sd text-[17px] md:text-[20px] font-700 underline"
          >
            Akram Titraoui
          </a>
          <p className="text-white text-center font-google-sd text-[20px] md:text-[24px] font-700">
            Developed by
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/akram-said-seghir-16357225b/"
              target="_blanc"
              className="text-[#FDB705] text-center font-google-sd text-[17px] md:text-[20px] font-700 underline"
            >
              Akram Said Saghir
            </a>
            <span className="text-[#FEFEFE] text-center font-google-sd text-[17px] md:text-[20px] font-700">
              &
            </span>
            <a
              href="https://www.linkedin.com/in/abdeldjalil-dahmani-805b49276/"
              target="_blanc"
              className="text-[#FDB705] text-center font-google-sd text-[17px] md:text-[20px] font-700 underline"
            >
              Abdljalil Dahmani
            </a>
          </div>

          <p className="text-white text-center font-google-sd text-[20px] md:text-[24px] font-700">
            with all ❤️ and ☕
          </p>
        </div>
      </div>
      <img
        src={gdg}
        alt="gdg"
        className="w-[170px] h-[14px] sm:w-[200px] sm:h-[19px] md:w-[260px] md:h-[30px]"
      />
      <p className="text-white text-center font-google-sd text-[13px] md:text-[15px] font-400">
        2023 ©️
      </p>
    </div>
  );
};

export default Footer;
