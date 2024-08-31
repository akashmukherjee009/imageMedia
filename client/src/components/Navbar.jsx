import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../context";

import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { MdMonochromePhotos } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

function Navbar() {
  const {
    isLightMode,
    setIsLightMode,
    showSignOutButton,
    setShowSignOutButton,
  } = useContext(GlobalState);

  const navigate = useNavigate();

  //   const handleAlertTimeOut = () => {
  //     setShowSignInAlert(true);
  //     setTimeout(() => {
  //       setShowSignInAlert(false);
  //     }, 3000);
  //   };

  //   const handleShowSignInAlert = () => {
  //     if (!isLoggedIn) {
  //       setShowSignInAlert(true);
  //       handleAlertTimeOut();
  //     } else {
  //       setShowSignInAlert(false);
  //     }
  //   };

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
              ? "logo text-[#00e0bf] text-md md:text-lg lg:text-xl flex items-center gap-2 font-semibold"
              : "logo text-white text-md md:text-lg lg:text-xl flex items-center gap-2 font-semibold"
          }
        >
          MomentsHub
        </div>
        <div
          className={
            isLightMode
              ? "flex gap-3 text-sm md:text-md lg:text-lg text-[#00e0bf] w-[50%] justify-center items-center"
              : "flex gap-3 text-sm md:text-md lg:text-lg text-white w-[50%] justify-center items-center"
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
          {/* {isLoggedIn ? (
            <Link to="/post" className="flex gap-2 justify-center items-center">
              Post
            </Link>
          ) : (
            <button
            //   onClick={handleShowSignInAlert}
              className="flex gap-2 justify-center items-center"
            >
              Post
            </button>
          )} */}
        </div>
        <div className="flex gap-3 items-center">
          {isLightMode ? (
            <div onClick={handleTheme} className="text-[#023047]">
              <FaRegMoon size={20} />
            </div>
          ) : (
            <div onClick={handleTheme} className="text-white">
              <FiSun size={24} />
            </div>
          )}
          {currentUser ? <div className="w-12 h-12 bg-blue-300 rounded-full flex justify-center items-center font-bold">{currentUser.name[0]}</div> : <div></div>}
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
        </div>
      </div>
    </>
  );
}

export default Navbar;
