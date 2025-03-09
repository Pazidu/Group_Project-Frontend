import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Foods from "./Pages/Foods/Home/Home.jsx";
import Rooms from "./Pages/Rooms/Home/Home.jsx";
import Menu from "./Pages/Foods/Menu/Menu.jsx";
import Gallery from "./Pages/Foods/Gallery/Gallery.jsx";
import ContactUs from "./Pages/Foods/ContactUs/ContactUs.jsx";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/foods/" element={<Foods />} />
          <Route path="/rooms/" element={<Rooms />} />
          <Route path="/foods/menu" element={<Menu />} />
          <Route path="/foods/gallery" element={<Gallery />} />
          <Route path="/foods/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
