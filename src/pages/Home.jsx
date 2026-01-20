import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
