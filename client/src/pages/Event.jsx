import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../context";
import CreateEventModal from "../components/CreateEventModal";
import axios from "axios";
function Event() {
  const  [ events, setEvents ] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const getAllEventsHandler = async () => {
    try {
      console.log("Fetching events for:", currentUser); // Debugging
      const email={
        email:  currentUser.email 

      }
      const response = await axios.post(
        `http://localhost:5000/events/get/`,email
      );
      console.log("Response:", response.data); // Debugging

      setEvents(response.data);
      // console.log(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    getAllEventsHandler();
  }, [events]);






  const { isLightMode, isModalOpen, setIsModalOpen, allEvents } =
    useContext(GlobalState);
  const [currUserEmail, setCurrUserEmail] = useState("");

  useEffect(() => {
    console.log(allEvents);
    
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      setCurrUserEmail(currentUser.userEmail);
    }
  }, []);

  const createEventHandler = () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      setIsModalOpen(true);
    } else {
      alert("Sign in first");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full min-h-[85vh] flex flex-col md:flex-col lg:flex-row justify-between items-start">
        {events && events.length !== 0 ? (
          <div className="w-full grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
            {events
              .map((event, index) => (
                <div key={index} className="bg-blue-200 p-5 m-5">
                  <div>{event.caption}</div>
                  <div>{event.date}</div>
                  <div>{event.description}</div>
                  <button className="underline">Explore</button>
                </div>
              ))}
          </div>
        ) : (
          <div className="empty-event-list w-[50%] h-[200px] m-auto text-center">
            <p data-aos="fade-in" className="text-lg">
              You haven't created any event yet
            </p>
            <button
              data-aos="fade-in"
              className="m-3 w-auto px-3 min-w-[120px] h-[40px] bg-[#00e0bf] rounded-md text-white"
              onClick={createEventHandler}
            >
              Create Event
            </button>
          </div>
        )}
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
  );
}

export default Event;
