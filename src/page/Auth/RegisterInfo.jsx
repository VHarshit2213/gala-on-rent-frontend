import { FaCircleCheck } from "react-icons/fa6";
import Gala_On_RenT_LOGO from "./../../assets/Landing/Gala_On_RenT_LOGO.png";

const RegisterInfo = () => {
  return (
    <div className="lg:flex hidden flex-col xl:justify-evenly justify-start xl:gap-y-0 l:gap-y-10 gap-y-6">
      <img
        src={Gala_On_RenT_LOGO}
        alt="Gala On Rent Logo"
        className="max-w-[400px] w-full"
      />
      <div className="flex flex-col xl:gap-y-12 gap-y-6">
        <h1 className="capitalize xl:text-4xl text-2xl font-semibold">
          Upload your property in
          <span className="text-orange border-b border-orange font-normal ml-2">
            3 simple steps
          </span>
        </h1>
        <div className="flex flex-col xl:gap-y-5 gap-y-2">
          <p className="font-semibold flex gap-2 items-center xl:text-xl text-md capitalize">
            <FaCircleCheck className="text-[#192E3F]" size={25} />
            <span className="font-normal">Add</span> Basic details
          </p>
          <p className="font-semibold flex gap-2 items-center xl:text-xl text-md capitalize">
            <FaCircleCheck className="text-[#192E3F]" size={25} />
            <span className="font-normal">Add</span> property details
          </p>
          <p className="font-semibold flex gap-2 items-center xl:text-xl text-md capitalize">
            <FaCircleCheck className="text-[#192E3F]" size={25} />
            <span className="font-normal">Add</span> Photos
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterInfo;
