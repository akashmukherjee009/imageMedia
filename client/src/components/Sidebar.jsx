import React, { useContext, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { GlobalState } from "../context";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Sidebar() {
  const { showSidebar, setShowSidebar } = useContext(GlobalState);
  const navigate = useNavigate();
  const [userSignedIn, setUserSignedIn] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (currentUser) {
      setUserSignedIn(true);
    }
  }, []);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };
  return (
    <div className="fixed top-0 right-0 w-full h-full z-50 bg-black bg-opacity-50">
      <motion.div
        className="fixed  h-full w-[50%] bg-[#00e0bf] text-white p-6"
        initial="closed"
        animate={showSidebar ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div
          className="w-full flex justify-end text-end"
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          {" "}
          <IoClose size={24} />{" "}
        </div>
        <div className="w-12 h-12 flex justify-center items-center font-bold bg-white text-[#00e0bf] rounded-full">
          {userSignedIn && currentUser.name[0]}
        </div>
        <div className="my-2 text-xl">{userSignedIn && currentUser.name}</div>
        <ul>
          <li
            className="mb-2 cursor-pointer"
            onClick={() => {
              navigate("/");
              setShowSidebar(false);
            }}
          >
            Home
          </li>
          <li
            className="mb-2 cursor-pointer"
            onClick={() => {
              navigate("/create-event");
              setShowSidebar(false);
            }}
          >
            Event
          </li>
          <li
            className="mb-2 cursor-pointer"
            onClick={() => {
              navigate("/pricing");
              setShowSidebar(false);
            }}
          >
            Pricing
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Sidebar;
