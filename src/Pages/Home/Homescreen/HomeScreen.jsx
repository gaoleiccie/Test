import AboutMe from "../../../Pages/AboutMe/AboutMe";
import MySkills from "../../../Pages/MySkills/MySkills";
import Achievements from "../../../Pages/Achievements/Achievements";
import Footer from "../../../components/Footer/Footer";
import ContactMe from "../../ContactMe/ContactMe";
import HeroSection from "../../HeroSection/HeroSection";
import MyPortfolio from "../../MyPortfolio/MyPortfolio";

import classes from "./HomeScreen.module.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Achievements />
      <ContactMe />
      <Footer />
    </>
  );
}
