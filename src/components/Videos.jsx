import { videos } from "../constants/index";

const Videos = () => {
  return (
    <div className="bg-[#F9AB00] flex flex-wrap px-[32px] py-[70px] justify-center items-center content-center gap-x-[193px] gap-y-[60px]">
      {videos.map((nav) => (
        <div key={nav.id} className=" w-[450px] flex flex-col ">
          <video
            src={nav.URL}
            type="video/mp4"
            className=" h-[291px] self-stretch rounded-[30px] mb-[25px] object-cover"
            style={{ boxShadow: "20px 22px 19px 0px rgba(0, 0, 0, 0.25)" }}
             loop controls
          ></video>

          <h1 className="text-gray-700 font-inter text-lg font-bold leading-[140.523%] ">
            {nav.title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Videos;
