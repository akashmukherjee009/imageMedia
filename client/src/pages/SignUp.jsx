import React, { useContext, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../context";
import { FaGoogle } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

function SignUp() {
  const { isLightMode } = useContext(GlobalState);
  
  return (
    <div className="w-full min-h-screen">
      <div className="text-3xl text-[#219ebc] font-bold text-center pt-5">
        Sign Up
      </div>
      <div className="form w-[90%] md:w-[70%] lg:w-[50%] p-3 m-auto flex flex-col gap-2 items-start">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter your name..."
        //   onChange={(e) => {
        //     setName(e.target.value);
        //   }}
          className={
            isLightMode
              ? "w-full rounded border-2 border-gray-300 p-2 focus:outline-[#219ebc]"
              : "w-full rounded border-2 border-gray-600 p-2 focus:outline-[#219ebc] bg-transparent text-gray-300"
          }
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email..."
        //   onChange={(e) => {
        //     setEmail(e.target.value);
        //   }}
          className={
            isLightMode
              ? "w-full rounded border-2 border-gray-300 p-2 focus:outline-[#219ebc]"
              : "w-full rounded border-2 border-gray-600 p-2 focus:outline-[#219ebc] bg-transparent text-gray-300"
          }
        />
        <p className="text-red-600">User should enter a valid email only *</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password..."
        //   onChange={(e) => {
        //     setPassword(e.target.value);
        //   }}
          className={
            isLightMode
              ? "w-full rounded border-2 border-gray-300 p-2 focus:outline-[#219ebc]"
              : "w-full rounded border-2 border-gray-600 p-2 focus:outline-[#219ebc] bg-transparent text-gray-300"
          }
        />
        <p className="text-red-600">User should enter 6 digit password *</p>

        <button
        //   onClick={createUser}
          className="w-full mt-0 rounded border-2 border-[#219ebc] bg-[#219ebc] text-white p-2 flex justify-center items-center gap-3"
        >
          <IoMailOutline size={20} />  Sign up with email 
        </button>
        <button
        //   onClick={createUserWithGoogleAccount}
          className="w-full mt-0 rounded border-2 border-[#219ebc] bg-[#219ebc] text-white p-2 flex justify-center items-center gap-3"
        >
          <FaGoogle />  Continue with Google
        </button>
        <div className={isLightMode ? "text-black w-full text-center" : "text-white w-full text-center"}>
          Already have account ?{" "}
          <Link to="/sign-in" className="text-[#219ebc]">
            Sign in
          </Link>{" "}
          <br />
          <span className={isLightMode ? "text-black" : "text-white"}> Or </span>
          <br />
          <Link to="/" className="text-[#219ebc]">
            Go back to home page
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
