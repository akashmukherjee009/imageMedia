import React, { useContext, useEffect } from "react";
import { GlobalState } from "../context";

function Event() {
  const { isLightMode } = useContext(GlobalState);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const createEventHandler = () => {
    if (currentUser) {
      console.log("Ok!");
    } else {
      alert("Sign in fisrt");
    }
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-col lg:flex-row justify-between">
        <div className="pl-5 event-form-wrapper w-full md:w-[55%] lg:w-[55%] flex flex-col md:flex-col lg:flex-col">
          <div className="m-3 text-3xl text-[#00e0bf] font-bold pt-5">
            Create Event
          </div>

          <div className="eventform m-3 flex flex-col gap-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email..."
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
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
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
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
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              className={
                isLightMode
                  ? "w-full rounded border-2 border-gray-300 p-2 focus:outline-[#00e0bf]"
                  : "w-full rounded border-2 border-gray-600 p-2 focus:outline-[#00e0bf] bg-transparent text-gray-300"
              }
            />
          </div>
          <button
            className="m-3 w-[120px] h-[40px] bg-[#00e0bf] rounded-md text-white"
            onClick={createEventHandler}
          >
            Create Event
          </button>
        </div>

        <div className="event-list-wrapper w-full overflow-y-scroll mt-10 h-full lg:w-[35%] flex flex-col gap-4 items-center">
          <div className="w-[90%] h-[200px] rounded-lg bg-blue-300"></div>
          <div className="w-[90%] h-[200px] rounded-lg bg-blue-300"></div>
        </div>
      </div>
    </>
  );
}

export default Event;
