import Contact from "../components/Contact/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
