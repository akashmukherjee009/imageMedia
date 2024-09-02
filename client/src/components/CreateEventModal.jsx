import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../context";

function CreateEventModal() {
  const { isModalOpen, setIsModalOpen } =
    useContext(GlobalState);

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // Retrieve current user email from localStorage
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []);

  const createEventHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/events/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          description: eventDescription,
          caption: eventTitle,
          date: eventDate,
        }),
      });
      const data = await response.json();
      console.log(data);

      // Optionally close the modal after successful event creation
      if (data.success) {
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-[90%] md:w-[70%] lg:w-[50%]">
          <h2 className="text-2xl font-bold mb-4">Create Event</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Event Title
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
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
                required
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
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                onClick={closeModalHandler}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  createEventHandler();
                  closeModalHandler();
                }}
                className="px-4 py-2 bg-[#00e0bf] text-white rounded-md"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default CreateEventModal;
