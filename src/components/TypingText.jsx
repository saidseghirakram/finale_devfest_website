import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  return (
   
      <TypeAnimation
      sequence={[
        "Learn",
        2000,
        "Create",
        2000,
        "Explore",
        2000,
       
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      cursor= {true}
      className="text-[64px] h-fit  text-[#FDB705] m-0 "
    />
  );
};

export default TypingText;
