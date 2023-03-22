import Hero from "../components/Hero/Hero";
import Navbar from "./../components/Navbar/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
