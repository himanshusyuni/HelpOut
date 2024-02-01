import logo from "../pictures/logo.jpg";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
function Header() {
  return (
    <>
      <div className="fixed bg-white w-full p-2 flex justify-between shadow-lg ">
        <img src={logo} alt="HelpOut" className="h-[75px]" />
        <form className="flex border-2 h-10 w-[500px] m-4 rounded-full pl-2 font-semibold ">
          <IoIosSearch className=" pl-1 h-10 w-6 pb-1 mr-2 " />
          <input
            type="text"
            className=" w-full h-9 pl-3 pr-10 text-sm  outline-none bg-slate-50 focus:bg-white rounded-full"
            placeholder="Search  "
          />
        </form>
        <div className="flex justify-between mr-8 mt-2 ">
          <div className="mr-5 mt-0">
            <CgProfile className="size-9 " />
            <p className="text-xs font-bold mt-[1px] mr-1"> Profile</p>
          </div>
          <div className="m-2 mt-0">
            <IoMdNotifications className="size-9 ml-1.5" />
            <p className="text-xs font-bold"> Requests</p>
          </div>
        </div>
        
      </div>
    </>
  );
}
export default Header;
