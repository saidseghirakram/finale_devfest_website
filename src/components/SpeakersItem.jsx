import { speakers } from "../constants/index";
import { agendaIcon, arrowRight, arrowLeft } from "../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const SpeakersItem = () => {
  const [detH, setdetH] = useState(
    new Array(speakers.length).fill("h-0")
  );
  const [showDetails, setShowDetails] = useState(
    new Array(speakers.length).fill(false),
  );

  const handleButtonClick = (index, newValue) => {
    // Create a new array by spreading the current state
    const updatedDetH = [...detH];

    // Modify the specific index you want to change
    updatedDetH[index] = newValue; // Replace "new-value" with the value you want to set

    // Update the state with the new array
    setdetH(updatedDetH);
  };
  const toggleDetails = (index) => {
    setShowDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = !updatedDetails[index];
      return updatedDetails;
    });
  };
  return (
    <div className="relative w-full flex justify-center items-start gap-[30px] flex-wrap transition-all duration-1000  ">
      {speakers.map((speaker, index) => (
        <Slide
          key={speaker.id}
          direction="up"
          triggerOnce
          delay={index * 150} // Adjust the delay for a staggered effect
        >
          <div
            key={speaker.id}
            className="relative w-[80vw] sm:w-[364px] h-[550px] bg-[#252525] rounded-[50px] pt-[88px] px-[26px] pb-[62px]"
            style={{
              border: `2px solid ${speaker.color}`,
            }}
          >
            {/*  */}

            <img
              src={speaker.shape}
              alt="shape"
              className="absolute  h-[84px] w-[63.808px] sm:w-auto sm:h-auto   top-[100px] right-0"
            />
            <div className="flex flex-col items-center gap-[34px] font-google">
              <div className="w-[110px] h-[110px] rounded-[100%] sm:w-[151px] sm:min-h-[151px] overflow-hidden">
                <img
                src={speaker.url}
                alt="-"
                className=" "
              /></div>

              <div className="flex flex-col items-center gap-[15px]">
                <h1 className="text-white text-center font-google text-[32px] font-bold">
                  {speaker.name}
                </h1>
                <h3 className="text-white text-center font-google text-[24px] font-normal">
                  {speaker.title}
                </h3>
                {/* <img
                src={agendaIcon}
                alt="agenda"
                className="w-[18px] h-[20px]"
              />
              <h1 className="text-white text-center font-google text-[24px] not-italic font-bold">
                {speaker.time}
              </h1> */}
              </div>
              {/* <div id={`${index}`} className={`det-trans ${detH[index]}`}>
              {showDetails[index] && (
                <>
                  {speaker.captions.map((captionData, captionIndex) => (
                    <ul key={captionIndex} className="leading-8 text-white w-full">
                      <li className="list-disc font-google-sd	text-[15px] font-normal ">
                        {captionData.caption}
                      </li>
                    </ul>
                  ))}
                </>
              )}
            </div> */}

              {/* <button
              onClick={() => {
                toggleDetails(index);
                handleButtonClick(index,detH[index] === "h-0" ? "h-[12rem]" : "h-0")
              }}
              style={{
                backgroundColor: showDetails[index] ? "#F9AB00" : "#4285F4",
              }}
              className="box-sh group w-[180px] h-[51px] rounded-[50px] px-[24px] py-[10px] flex justify-start items-center transition-all duration-200 relative hover:w-[214px]"
            >
              <span className="text-white text-[24px] not-italic font-normal font-google">
                {showDetails[index] ? "Show Less" : "Show More"}
              </span>
              <img
                src={showDetails[index] ? arrowLeft : arrowRight}
                alt="arrowRight"
                className="absolute opacity-0 w-[24px] h-[24px] right-[25px] transition-opacity duration-200 group-hover:opacity-100"
              />
            </button> */}

              {/*  start icons  */}
              {
                // <div className="flex w-full justify-evenly ">
                //   {speaker.icons.map((iconData, iconIndex) => (
                //     <span
                //       key={iconIndex}
                //       className="flex justify-center items-center w-[45px] h-[45px]  rounded-full bg-[#535353]  "
                //     >
                //       <a href={iconData.link} className="">
                //         <FontAwesomeIcon
                //           className="text-white text-[28px] hover:text-[#F9AB00]"
                //           icon={iconData.icon}
                //         />
                //       </a>
                //     </span>
                //   ))}
                // </div>
              }
            </div>

          </div>
        </Slide>

      ))}
    </div>
  );
};

export default SpeakersItem;