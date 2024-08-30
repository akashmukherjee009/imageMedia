import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../context";

import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { MdMonochromePhotos } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

function Navbar() {
  const { isLightMode, setIsLightMode } = useContext(GlobalState);
  const navigate = useNavigate()

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
              ? "logo text-[#219ebc] text-md md:text-lg lg:text-xl flex items-center gap-2 font-semibold"
              : "logo text-white text-md md:text-lg lg:text-xl flex items-center gap-2 font-semibold"
          }
        >
          MomentsHub
        </div>
        <div
          className={
            isLightMode
              ? "flex gap-3 text-sm md:text-md lg:text-lg text-[#219ebc] w-[50%] justify-center items-center"
              : "flex gap-3 text-sm md:text-md lg:text-lg text-white w-[50%] justify-center items-center"
          }
        >
          <Link to="/" className="flex gap-2 justify-center items-center">
            {" "}
            Home
          </Link>
          <Link to="/create-event" className="flex gap-2 justify-center items-center">
            {" "}
            Event 
          </Link>
          <Link to="/pricing" className="flex gap-2 justify-center items-center">
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
        <button className="w-[90px] h-[40px] bg-[#219ebc] rounded-md text-white" onClick={() => {
            navigate("/sign-in")
        }}>Sign In</button>
          {/* {isLoggedIn ? (
            <>
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="profile-photo"
                  className="hidden md:block lg:block md:w-10 md:h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center">
                  <span>{auth.currentUser?.displayName?.charAt(0)}</span>
                </div>
              )}
              <button
                // onClick={signOutFromCurrentAccount}
                className={
                  isLightMode
                    ? "w-[50px] flex justify-center items-center h-[34px] text-sm p-1 font-semibold text-white bg-[#219ebc] border-2 border-[#8ecae6] rounded-lg"
                    : "w-[50px] flex justify-center items-center h-[34px] text-sm p-1 font-semibold text-white bg-[#219ebc] border-2 border-[#219ebc] rounded-lg"
                }
              >
                <FaSignOutAlt />
              </button>
            </>
          ) : (
            <button
            //   onClick={() => navigate("/sign-in")}
              className="w-[50px] flex justify-center items-center h-[34px] text-sm p-1 font-semibold text-white bg-[#219ebc] border-2 border-[#8ecae6] rounded-lg"
            >
              <FaSignInAlt />
            </button>
          )} */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
