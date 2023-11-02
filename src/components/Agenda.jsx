import {logo} from "../assets/index"
import Map from "./Map";

const Agenda = () => {
  return (
    <div className="p-[20px] md:p-[62px]  w-full flex flex-col items-center gap-[130px] b">
      <div className=" md:leading-loose    text-center leading-10 md:text-[48px]  text-[24px]">
        <span className="text-white capitalize  font-bold">
          this year’s biggest event promises an exciting lineup of diverse
          &nbsp;
        </span>
        <span className="text-amber-500  font-bold underline ">
          sessions
        </span>
        <span className="text-white  font-bold">
          &nbsp;and amazing &nbsp;
        </span>
        <span className="text-amber-500  font-bold underline">
          speakers!
        </span>
      </div>
      <img src={logo} alt=""  className="w-[307.758px] h-[145px] "/>
      <div className="text-white text-[55px]  md:text-[128px] font-bold ">Time Map</div>
      <Map />
      
    </div>
  );
};

export default Agenda;

{
  /* <div className="w-[1271px] text-center">
  
  <span style=" font-['Google Sans Display']  capitalize">
    
  </span>
</div>; */
}
