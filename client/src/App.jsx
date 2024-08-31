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

  return (
    <>
      <BrowserRouter>
        <GlobalState.Provider
          value={{ isLightMode, showSignOutButton, setShowSignOutButton }}
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
