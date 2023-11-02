import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {gdg , medea } from "../assets/index"
import {footer} from "../constants/index"
const Footer = () => {
  return (
    <div className="pb-[100px] w-full  pt-[180px] flex flex-col justify-center items-center gap-[27px]">
      <img src={gdg} alt="gdg" className="w-[152.915px] h-[11.835px]" />
      <img src={medea} alt="medea"  className=" w-[90.988px] h-[22.589px] "/>
      <h1 className="text-white text-[48px] font-bold">Contact Us</h1>
      <div className=" flex  justify-center items-center gap-[16px]  "> 
      {
          footer.map((item) => (
            <div key={item.id} className=" ">
              <a href="http" className="">
                      <FontAwesomeIcon
                        className="text-white text-[28px] hover:text-[#F9AB00]"
                        icon={item.src}
                      />
                    </a>
            </div>
          ))
      }
      </div>
    </div>
  )
}

export default Footer
