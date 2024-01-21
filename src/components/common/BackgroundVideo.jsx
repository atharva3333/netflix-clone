import BackgroundV from "../../assets/MoneyH.mp4"
import MoneyHeist from "../../assets/money.png"
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
const BackgroundVideo = () => {
  return (
    <div className="relative top-0 w-full -z-10 h-[90vh]">
      
      <div className="w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        >
          <source
            src={BackgroundV}
            type="video/mp4"
          />
        
        </video>
      </div>
      <div className="absolute bottom-10 p-4">
        
        <img className=" w-[500px]" src={MoneyHeist}/>
        <div className="flex gap-6">
        <button className="flex items-center gap-4 bg-white rounded-sm px-8 py-3 mt-4 font-bold">
        <FaPlay/>
        Play</button>
        <button className="flex items-center gap-4 text-white bg-black bg-opacity-60 rounded-sm px-8 py-3 mt-4 font-bold">
        <IoMdInformationCircleOutline className="text-xl"/>
        More info</button>
        </div>
        
      </div>
    </div>
  );
};

export default BackgroundVideo;
