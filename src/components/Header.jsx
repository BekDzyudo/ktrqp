import React from "react";
import logoWhite from "../../public/image/logo_white.png";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-white w-full flex flex-col justify-between items-center h-[50vh]">
      <div className="bg-[#045097] flex justify-center items-center py-2 h-[11%] w-full">
        <div className="w-[1500px]">
          <div className="flex justify-between">
            <div className="flex items-center gap-10">
              <NavLink to="/" className="font-normal hover:text-blue-300">
                Bosh sahifa
              </NavLink>
               <NavLink to="/adabiyotlar" className="font-normal hover:text-blue-300">
                Adabiyotlar
              </NavLink>
              <NavLink className="font-normal hover:text-blue-300">
                Kurslar
              </NavLink>
              <NavLink className="font-normal hover:text-blue-300">
                Xizmatlar
              </NavLink>
              <NavLink className="font-normal hover:text-blue-300">
                Yangiliklar va e’lonlar
              </NavLink>
              
            </div>
            <NavLink className="font-normal hover:text-blue-300 flex items-center gap-2">
                <FaPhone /> Biz bilan bog‘lanish
              </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full h-[88%] flex justify-center items-center relative banner">
       <div className="flex justify-between items-center w-[1500px]">
         <h2 className="text-6xl font-medium leading-20 tracking-wider">Kasbiy ta’lim resurslari <br /> 
va qo‘llanmalar <br /> platformasi</h2>
        <div className="flex items-center gap-2 absolute right-10 top-5">
            <img src={logoWhite} alt="" className="w-28"/>
            <h4 className="text-2xl">Professional ta'limni <br />rivojlantirish <br />instituti</h4>
        </div>
       </div>
      </div>
    </header>
  );
}

export default Header;
