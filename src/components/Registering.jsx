
const Registering = () => {
    return (
      <div className="w-full py-[32px] px-[20px]  flex flex-col justify-center items-center">
        <h1 className="text-white text-[48px] lg:text-[64px]  font-bold mb-[36px] text-center ">
          What are you waiting for ?
        </h1>
        <button
          style={{ boxShadow: "0px 0px 70px 0px #FBBC04" }}
          className=" bg-[#FDB705] w-[349px] h-[92px] md:w-[503px] md-h-[125px] rounded-full  font-bold text-[48px] text-white hover:text-white duration-700 hover:shadow-register-now"
        >
          Register Now
        </button>
      </div>
    );
  };
  
  export default Registering;
  