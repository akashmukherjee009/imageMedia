import React, { useContext, useState } from "react";
import { GlobalState } from "../context";
import CreateEventModal from "../components/CreateEventModal";

function Event() {
  const { isLightMode, isModalOpen, setIsModalOpen, allEvents } =
    useContext(GlobalState);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const createEventHandler = () => {
    if (currentUser) {
      setIsModalOpen(true);
    } else {
      alert("Sign in first");
    }
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full min-h-[85vh] flex flex-col md:flex-col lg:flex-row justify-between items-start">
          {/* {allEvents.length != 0 ? (
            <div></div>
          ) : ( */}
            <div className="empty-event-list w-[50%] h-[200px] m-auto text-center">
              <p data-aos="fade-in" className="text-lg">
                You don't have created any event till now
              </p>
              <button
                data-aos="fade-in"
                className="m-3 w-auto px-3 min-w-[120px] h-[40px] bg-[#00e0bf] rounded-md text-white"
                onClick={createEventHandler}
              >
                Create Your first Event
              </button>
            </div>
          {/* )} */}
          <button
            data-aos="fade-in"
            className="absolute bottom-5 right-5 m-3 w-[50px] h-[50px] text-4xl bg-[#00e0bf] rounded-lg text-gray-100"
            onClick={createEventHandler}
          >
            +
          </button>
        </div>

        {isModalOpen && <CreateEventModal />}
      </div>
    </>
  );
}

export default Event;
