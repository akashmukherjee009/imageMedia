import { useState, useEffect } from "react";
import "./App.css";
import { GlobalState } from "./context";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [isLightMode, setIsLightMode] = useState(true);
  const [showSignOutButton, setShowSignOutButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  const getAllEventsHandler = async () => {
    try {
      const response = await fetch("http://localhost:5000/events/");
      const data = await response.json();
      setAllEvents(data);
      console.log(data);
      
    } catch (error) {
      console.error(error);
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
          }}
        >
          <div className="App relative">
            <Navbar />
            <Routing />
            <Footer />
          </div>
        </GlobalState.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
