import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

// eslint-disable-next-line react/prop-types
function CountdownClock({ targetDate }) {
  // Calculate the time remaining as a duration in seconds
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeRemaining = targetTime - now;
    return Math.max(0, timeRemaining);
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      if (newTimeRemaining === 0) {
        clearInterval(timer);
      } else {
        setTimeRemaining(newTimeRemaining);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="relative inline-flex border-[3px] border-solid border-[#F9AB00] lg:p-[40px] md:px-[32px] md:py-[43px] px-[51px] py-[21px] justify-center items-center lg:gap-[90px] md:gap-[24px] gap-y-[35px] gap-x-[16px] rounded-[50px] mt-16 flex-wrap">
      <Fade direction="up"  triggerOnce>
        <p className="text-[#F9AB00] font-google-sd md:text-[63px] text-[32px] leading-[normal]">
          {days} day
        </p>
      </Fade>

      <Fade direction="down" triggerOnce>
        <p className="text-[#FFF] font-google-sd md:text-[63px] text-[32px] leading-[normal] block">
          {hours} Hours
        </p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className="text-[#F9AB00] font-google-sd md:text-[63px] text-[32px] leading-[normal]">
          {minutes} Mins
        </p>
      </Fade>

      <Fade direction="down" triggerOnce>
        <p className="text-[#FFF] font-google-sd md:text-[63px] text-[32px] leading-[normal]">
          {seconds} sec
        </p>
      </Fade>
    </div>
  );
}

export default CountdownClock;
