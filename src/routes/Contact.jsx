import Hero from "../components/Hero/Hero";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer/Footer";
import Navbar from "./../components/Navbar/Navbar";
import ContactForm from "../components/Contact/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact US!"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
