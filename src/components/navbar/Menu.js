import React from "react";
import { Link } from "react-scroll";

import { FaHome, FaServer, FaUserFriends } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Menu = ({ MenuHandel, menu }) => {
  return (
    <div
      className={
        menu
          ? "fixed left-0 top-0 w-[70%] sm:w-[50%] tablet:hidden h-screen bg-[#1E1E1E] p-4 pt-12 ease-in-out duration-500 z-10"
          : "fixed left-[-200%] top-0 p-4 h-screen ease-in duration-500"
      }
    >
      <div className="relative m-auto w-full max-w-[100px] h-[100px] flex">
        <img
          src="ProfileImage.png"
          alt="profile foto"
          sizes="100%"
          className="rounded-full object-cover"
        />
      </div>

      {menu && (
        <AiOutlineClose
          size={35}
          className="text-mainText tablet:hidden absolute right-4 top-8"
          onClick={() => MenuHandel(false)}
        />
      )}
      <div className="w-full max-w-[200px] m-auto">
        <h1 className="text-xl pb-12 pt-4 text-center">Anthenny de Hoon</h1>
        <ul className="flex items-start flex-col px-2">
          <Link to="/" smooth={true} duration={500}>
            <li
              id="12345"
              className="flex gap-4 text-center text-base py-2"
              onClick={() => MenuHandel(false)}
            >
              <FaHome size={40} className={"text-detailsColor"} />
              <div className="flex flex-col text-center justify-center">
                <p className={"text-mainText"}>Home</p>
              </div>
            </li>
          </Link>

          <Link to="aboutMe" smooth={true} duration={500}>
            <li className="flex gap-4 text-center text-base py-2" onClick={() => MenuHandel(false)}>
              <BsFillPersonFill size={40} className={"text-detailsColor"} />
              <div className="flex flex-col text-center justify-center">
                <p className={"text-mainText"}>Over mij</p>
              </div>
            </li>
          </Link>

          <Link to="projects" smooth={true} duration={500}>
            <li className="flex gap-4 text-center text-base py-2" onClick={() => MenuHandel(false)}>
              <FaServer size={40} className={"text-detailsColor"} />
              <div className="flex flex-col text-center justify-center">
                <p className={"text-mainText"}>Projecten</p>
              </div>
            </li>
          </Link>

          <Link to="contact" smooth={true} duration={500}>
            <li className="flex gap-4 text-center text-base py-2" onClick={() => MenuHandel(false)}>
              <FaUserFriends size={40} className={"text-detailsColor"} />
              <div className="flex flex-col text-center justify-center">
                <p className={"text-mainText"}>Contact</p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
