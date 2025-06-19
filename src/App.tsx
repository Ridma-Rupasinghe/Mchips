import "./App.css";
import Home from "./pages/Home";

import bgD from "../src/assets/Images/bg.webp";

import { Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <div
        className="  w-full h-auto    bg-black"
        
      >
        <div className="max-w-[1920px] mx-auto h-full  overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${window.innerWidth <= 640 ? bgD : bgD})`,
        }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
