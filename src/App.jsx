import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTopPage from "./components/ScrollTopPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <ScrollToTopPage />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}
export default App;
