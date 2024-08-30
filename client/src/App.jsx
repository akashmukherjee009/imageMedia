import { useState } from "react";
import "./App.css";
import { GlobalState } from "./context";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <>
      <BrowserRouter>
        <GlobalState.Provider value={{ isLightMode }}>
          <div className="App">
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
