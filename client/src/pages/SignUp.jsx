import React, { useContext, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../context";
import { FaGoogle } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import signUp from "../assets/signUp.jpg";

function SignUp() {
  const { isLightMode } = useContext(GlobalState);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setSuccessMessage("User registered successfully!");
        setErrorMessage("");
        setTimeout(() => {
          navigate("/sign-in");
        }, 2000); // Navigate after 2 seconds
      } else {
        setErrorMessage(data.message || "An error occurred.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-between items-center">

      {errorMessage && (
        <div className="error absolute top-5 right-5 p-5 w-[25%] rounded bg-orange-300 text-orange-600">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="success absolute top-5 right-5 p-5 w-[25%] rounded bg-green-300 text-green-600">
          {successMessage}
        </div>
      )}

      <div
        data-aos="fade-down"
        className="hidden md:hidden w-[65%] h-full image overflow-hidden lg:flex justify-center items-center"
      >
        <img src={signUp} className="w-full h-[95%]" alt="" />
      </div>

      <div
        data-aos="fade-left"
        className="form w-[90%] md:w-[70%] lg:w-[50%] p-12 m-auto flex flex-col gap-2 items-start"
      >
        <div className="text-3xl text-[#00e0bf] font-bold text-center pt-5">
          Sign Up
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter your name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          className={
            isLightMode
              ? "w-full rounded border-2 border-gray-300 p-2 focus:outline-[#00e0bf]"
              : "w-full rounded border-2 border-gray-600 p-2 focus:outline-[#00e0bf] bg-transparent text-gray-300"
          }
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          className={
            isLightMode
              ? "w-full rounded border-2 border-gray-300 p-2 focus:outline-[#00e0bf]"
              : "w-full rounded border-2 border-gray-600 p-2 focus:outline-[#00e0bf] bg-transparent text-gray-300"
          }
        />
        <p className="text-red-600">User should enter a valid email only *</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          className={
            isLightMode
              ? "w-full rounded border-2 border-gray-300 p-2 focus:outline-[#00e0bf]"
              : "w-full rounded border-2 border-gray-600 p-2 focus:outline-[#00e0bf] bg-transparent text-gray-300"
          }
        />
        <p className="text-red-600">User should enter 6 digit password *</p>

        <button
            onClick={handleSignUp}
          className="w-full mt-0 rounded border-2 border-[#00e0bf] bg-[#00e0bf] text-white p-2 flex justify-center items-center gap-3"
        >
          <IoMailOutline size={20} /> Sign up with email
        </button>
        {/* <button
          //   onClick={createUserWithGoogleAccount}
          className="w-full mt-0 rounded border-2 border-[#00e0bf] bg-[#00e0bf] text-white p-2 flex justify-center items-center gap-3"
        >
          <FaGoogle /> Continue with Google
        </button> */}
        <div
          className={
            isLightMode
              ? "text-black w-full text-center"
              : "text-white w-full text-center"
          }
        >
          Already have account ?{" "}
          <Link to="/sign-in" className="text-[#00e0bf]">
            Sign in
          </Link>{" "}
          <br />
          <span className={isLightMode ? "text-black" : "text-white"}>
            {" "}
            Or{" "}
          </span>
          <br />
          <Link to="/" className="text-[#00e0bf]">
            Go back to home page
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
