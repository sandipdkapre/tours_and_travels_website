import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "./../components/Navbar/Navbar";
import Trip from "../components/Trip/Trip";
import NavbarImg from "../assets/12.jpg";
import Destination from "../components/Destination/Destination";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={NavbarImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
