import { FaRegBell, FaSearch } from "react-icons/fa";
import profile from "../assets/default-user.png";
import { useState } from "react";
const TopBar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const showProfile = () => {
    setOpenProfile(!openProfile);
  };
  const showNotif = () => {
    setOpenNotification(!openNotification);
  };
  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
      {/* search bar */}
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-slate-200 h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Search ..."
        />
        <div className="bg-blue-500 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px] ">
          <FaSearch color="white" />
        </div>
      </div>
      {/* endd search bar */}
      {/* right side */}
      <div className="flex items-center gap-[15px]">
        <div
          className="flex items-center gap-[25px] border-r-[1px] pr-[25px] relative"
          onClick={showNotif}
        >
          <FaRegBell />
          {openNotification && (
            <div className="bg-white shadow-md h-[100px] w-[400px] absolute bottom-[-109px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px] rounded-md">
              <p className="cursor-pointer hover:text-[blue] font-semibold">
                Notifications
              </p>
            </div>
          )}
        </div>
        <div
          className="flex items-center gap-[15px] relative"
          onClick={showProfile}
        >
          <p>Muhammad Isa</p>
          <div className="h-[50px] w-[50px] rounded-full bg-transparent cursor-pointer flex items-center justify-center relative">
            <img src={profile} alt="profile" />
          </div>
          {openProfile && (
            <div className="bg-white shadow-md h-[100px] w-[150px] absolute bottom-[-109px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px] rounded-md">
              <p className="cursor-pointer hover:text-[blue] font-semibold">
                Profile
              </p>
              <p className="cursor-pointer hover:text-[blue] font-semibold">
                Log out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
