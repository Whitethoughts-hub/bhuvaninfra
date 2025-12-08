import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
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
