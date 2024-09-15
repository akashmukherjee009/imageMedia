import { useState, useEffect } from "react";
import "./App.css";
import { GlobalState } from "./context";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/Sidebar";
import axios from "axios";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [isLightMode, setIsLightMode] = useState(true);
  const [showSignOutButton, setShowSignOutButton] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);

  const [allEvents, setAllEvents] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const [currUserEmail, setCurrUserEmail] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (currentUser) {
      setCurrUserEmail(currentUser.email);
    } else {
      setCurrUserEmail("");
    }
  }, []);

  const getAllEventsHandler = async () => {
    try {
      // console.log("Fetching events for:", currUserEmail); // Debugging
      const email = {
        email: currUserEmail,
      };
      const response = await axios.post(
        `http://localhost:5000/events/get/`,
        email
      );
      // console.log("Response:", response.data); // Debugging

      setAllEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    getAllEventsHandler();
  }, []);

  return (
    <>
      <BrowserRouter>
        <GlobalState.Provider
          value={{
            isLightMode,
            showSignOutButton,
            setShowSignOutButton,
            isModalOpen,
            setIsModalOpen,
            allEvents,
            setAllEvents,
            showSidebar,
            setShowSidebar,
            openUploadModal,
            setOpenUploadModal,
          }}
        >
          <div className="App relative">
            <Navbar />
            {showSidebar && <Sidebar />}
            <Routing />
            <Footer />
          </div>
        </GlobalState.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
