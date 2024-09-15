import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../context";
import CreateEventModal from "../components/CreateEventModal";
import axios from "axios";
import { SlCalender } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useParams } from "next/navigation";

function Event() {
  const [events, setEvents] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const getAllEventsHandler = async () => {
    try {
      const email = {
        email: currentUser.email,
      };
      const response = await axios.post(
        `http://localhost:5000/events/get/`,
        email
      );
      setEvents(response.data);
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

  const navigate = useNavigate();

  

  const deleteEvent = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/events/${id}`);
      console.log(response.data);
      alert("Event deleted successfully");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Event not found");
      } else {
        alert("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full min-h-[85vh] flex flex-col md:flex-col lg:flex-row justify-between items-start">
        {events && events.length !== 0 ? (
          <div className="w-full grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center min-h-[280px] max-h-fit">
            {events.map((event, index) => (
              <div
                // data-aos="fade-down"
                key={index}
                className="bg-[#FFFFFFCC] border-2 p-5 m-5 rounded-md flex flex-col justify-evenly shadow-md"
              >
                <div className="flex gap-3 justify-start items-center font-normal px-3 w-[50%] h-9 rounded-3xl bg-[#00e0bf] text-white">
                  <SlCalender />{" "}
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="my-0 text-lg font-normal px-3">
                  {event.caption}
                </div>

                <div className="text-md font-normal px-3">
                  {event.description}
                </div>
                <div className="flex justify-start items-center">
                  <button
                    onClick={() => {
                      navigate(`/upload-image/${event._id}`);
                    }}
                    className="underline flex justify-start items-center px-3 bg-[#00e0bf] w-12 h-10 mx-3 rounded-lg text-white"
                  >
                    <GoArrowRight size={24} />{" "}
                  </button>
                  <button
                    className="underline flex justify-start items-center px-3 bg-[#00e0bf] w-12 h-10 mx-3 rounded-lg text-white"
                    onClick={() => {
                      deleteEvent(event._id)
                    }}
                  >
                    <AiOutlineDelete size={24} />
                  </button>
                </div>
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
