import {TimeMap} from "../constants/index"
const Map = () => {
  return (
    <div className='  w-full min-h-[1121px]  flex justify-center items-start gap-[32px] md:gap-[25px] flex-wrap '>
     {
      TimeMap.map((item) => (
        <div key={item.name} className="lg:w-[330px]  w-[300px] bg-black  ">
          <h1 className="text-white mb-[30px] text-center text-[30px] capitalize font-bold border-b-[5px] pb-[10px] border-solid border-[#F9AB00] ">{item.name}</h1>
          {
            item.classes.map((day) => (
              <div key={day.id} className="flex justify-start items-center  " >
                <img src={day.src} alt="shapeAgenda"  className="w-[55px] h-full" />
                <div >
                  <h1 className="text-white text-[20px] font-normal  m-[13px]">{day.time}</h1>
                  <h3 className="text-white text-[32px] font-normal m-[13px] "> {day.caption} </h3>
                </div>
              </div>
            ))
          }
        </div>
      ))
     }
    </div>
  )
}

export default Map




/* 


const Map = () => {
  return (
    <div className='w-full min-h-[1121px]  flex justify-center items-start  flex-wrap  px-2'>
     {
      TimeMap.map((item) => (
        <div key={item.name} className=" w-[350px] bg-black  ">
          <h1 className="text-white mb-[30px] text-center text-[40px] capitalize font-bold border-b-[5px] pb-[10px] border-solid border-[#F9AB00] ">{item.name}</h1>
          {
            item.classes.map((day) => (
              <div key={day.id} className="flex justify-start items-center  " >
                <img src={day.src} alt="shapeAgenda"  className="w-[55px] h-full" />
                <div >
                  <h1 className="text-white text-[20px] font-normal  m-[13px]">{day.time}</h1>
                  <h3 className="text-white text-[32px] font-normal m-[13px] "> {day.caption} </h3>
                </div>
              </div>
            ))
          }
        </div>
      ))
     }
    </div>
  )
}

export default Map*/