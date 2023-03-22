import Hero from "../components/Hero/Hero";
import Navbar from "./../components/Navbar/Navbar";
import AboutImg from "./../assets/25.jpg";
import Footer from "../components/Footer/Footer";
import Trip from "../components/Trip/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
