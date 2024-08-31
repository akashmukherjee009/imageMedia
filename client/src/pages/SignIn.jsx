import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../context";
import { FaGoogle } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import signIn from "../assets/signIn.avif";

function SignIn() {
  const { isLightMode, showSignOutButton, setShowSignOutButton } = useContext(GlobalState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 201) {
        // Store token in localStorage or sessionStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect to another page, e.g., dashboard
        navigate("/create-event");
        setShowSignOutButton(true)
      } else {
        setErrorMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      setErrorMessage("Incorrect Password.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-between items-center">
      <div
        data-aos="fade-down"
        className="hidden md:hidden w-[65%] h-full image overflow-hidden lg:flex justify-center items-center"
      >
        <img src={signIn} className="w-full h-[95%]" alt="" />
      </div>
      <div
        data-aos="fade-left"
        className="form w-[90%] md:w-[70%] lg:w-[50%] p-12 m-auto flex flex-col gap-3 items-start"
      >
        <div className="text-3xl text-[#00e0bf] font-bold pt-5">Sign in</div>
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

        <button
          onClick={handleLogin}
          className="w-full mt-2 rounded border-2 bg-[#00e0bf] border-[#00e0bf] text-white p-2 flex justify-center items-center gap-3"
        >
          <IoMailOutline size={20} /> Sign in with email
        </button>
        {/* <button
          //   onClick={signInWithGoogle}
          className="w-full mt-0 rounded border-2 border-[#00e0bf] bg-[#00e0bf] text-white p-2 flex justify-center items-center gap-3"
        >
          <FaGoogle /> Continue with Google{" "}
        </button> */}
        <div
          className={
            isLightMode
              ? "text-black w-full text-center"
              : "text-white w-full text-center"
          }
        >
          Do not have an account ?{" "}
          <Link to="/sign-up" className="text-[#00e0bf]">
            Sign Up
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

      {errorMessage && (
        <div className="error absolute top-5 right-5 p-5 w-[25%] rounded bg-orange-300 text-orange-600">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default SignIn;
