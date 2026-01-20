import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import {Helmet} from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Bhuvan Infra | Trusted Real Estate Developers & Infrastructure Company
        </title>
        <meta
          name="description"
          content="Bhuvan Infra is a trusted real estate and infrastructure company delivering quality residential and commercial projects with transparency, innovation, and customer satisfaction."
        />
        <meta name="keywords" content="Bhuvan Infra, real estate developers, infrastructure company, property developers, residential projects, commercial projects, real estate investment, construction company"/>
      </Helmet>
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
