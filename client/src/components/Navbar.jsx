import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../context";

import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { MdMonochromePhotos } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const {
    isLightMode,
    setIsLightMode,
    showSignOutButton,
    setShowSignOutButton,
    showSidebar,
    setShowSidebar,
  } = useContext(GlobalState);

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (currentUser) {
      setShowSignOutButton(true);
    } else {
      setShowSignOutButton(false);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    setShowSignOutButton(false);
  };

  const handleShowSidebar = () => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  const handleTheme = () => {
    if (isLightMode) {
      setIsLightMode(false);
    } else {
      setIsLightMode(true);
    }
  };

  return (
    <>
      {/* {showSignInAlert && <SignInAlert />} */}
      <div
        className={
          isLightMode
            ? "w-full h-[64px] text-[#023047] shadow-lg flex px-5 py-3 justify-between items-center"
            : "w-full h-[64px] text-[#023047] shadow-lg flex px-5 py-3 justify-between items-center bg-[#0a192f]"
        }
      >
        <div
          className={
            isLightMode
              ? "logo text-[#00e0bf] text-md md:text-lg lg:text-xl flex items-center gap-2 font-semibold cursor-pointer"
              : "logo text-white text-md md:text-lg lg:text-xl flex items-center gap-2 font-semibold cursor-pointer"
          }
          onClick={() => {
            navigate("/");
          }}
        >
          MomentsHub
        </div>
        <div
          className={
            isLightMode
              ? "hidden md:flex lg:flex gap-3 text-sm md:text-md lg:text-lg text-[#00e0bf] w-[50%] justify-center items-center"
              : "hidden md:flex lg:flex gap-3 text-sm md:text-md lg:text-lg text-white w-[50%] justify-center items-center"
          }
        >
          <Link to="/" className="flex gap-2 justify-center items-center">
            {" "}
            Home
          </Link>
          <Link
            to="/create-event"
            className="flex gap-2 justify-center items-center"
          >
            {" "}
            Event
          </Link>
          <Link
            to="/pricing"
            className="flex gap-2 justify-center items-center"
          >
            {" "}
            Pricing
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          {/* {isLightMode ? (
            <div onClick={handleTheme} className="text-[#023047]">
              <FaRegMoon size={20} />
            </div>
          ) : (
            <div onClick={handleTheme} className="text-white">
              <FiSun size={24} />
            </div>
          )} */}

          {currentUser ? (
            <div className="hidden md:flex lg:flex w-12 h-12 bg-blue-300 rounded-full justify-center items-center font-bold">
              {currentUser.name[0]}
            </div>
          ) : (
            <div></div>
          )}
          {!showSignOutButton ? (
            <button
              className="w-[90px] h-[40px] bg-[#00e0bf] rounded-md text-white"
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Sign In
            </button>
          ) : (
            <button
              className="w-[90px] h-[40px] bg-[#00e0bf] rounded-md text-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
          <div
            className="visible md:hidden lg:hidden"
            onClick={handleShowSidebar}
          >
            <RxHamburgerMenu size={24} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
