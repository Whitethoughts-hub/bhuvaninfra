import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTopPage from "./components/ScrollTopPage";
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
