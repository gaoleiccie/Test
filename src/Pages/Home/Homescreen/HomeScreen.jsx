import AboutMe from "../../../Pages/AboutMe/AboutMe";
import MySkills from "../../../Pages/MySkills/MySkills";
import Testimonals from "../../../Pages/Testimonals/Testimonals";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/NavBar/NavBar";
import ContactMe from "../../ContactMe/ContactMe";
import HeroSection from "../../HeroSection/HeroSection";
import MyPortfolio from "../../MyPortfolio/MyPortfolio";

import classes from "./HomeScreen.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MySkills />
      <AboutMe /> 
      <MyPortfolio />
      <Testimonals /> 
      <ContactMe />
      <Footer />
    </>
  )
}
