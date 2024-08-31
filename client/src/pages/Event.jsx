import React, { useContext, useState } from "react";
import { GlobalState } from "../context";

function Event() {
  const { isLightMode } = useContext(GlobalState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const createEventHandler = () => {
    if (currentUser) {
      setIsModalOpen(true);
    } else {
      alert("Sign in first");
    }
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="relative w-full min-h-[85vh] flex flex-col md:flex-col lg:flex-row justify-between items-start">
          <div className="empty-event-list w-[50%] h-[200px] m-auto text-center">
            <p data-aos="fade-in" className="text-lg">You don't have created any event till now</p>
            <button
            data-aos="fade-in"
            className="m-3 w-auto px-3 min-w-[120px] h-[40px] bg-[#00e0bf] rounded-md text-white"
            onClick={createEventHandler}
          >
            Create Your first Event
          </button>
          </div>
          <button
            data-aos="fade-in"
            className="absolute bottom-5 right-5 m-3 w-[50px] h-[50px] text-4xl bg-[#00e0bf] rounded-lg text-gray-100"
            onClick={createEventHandler}
          >
            +
          </button>
        </div>

        

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] md:w-[70%] lg:w-[50%]">
              <h2 className="text-2xl font-bold mb-4">Create Event</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Event Description
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                  onClick={closeModalHandler}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-[#00e0bf] text-white rounded-md"
                  onClick={() => {
                    // Handle event creation logic here
                    console.log({
                      eventTitle,
                      eventDate,
                      eventDescription,
                    });
                    closeModalHandler();
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Event;
