import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Academics from "@/components/Academics/Academics";
import Projects from "@/components/Projects/Projects";
// import AboutMe from "@/components/AboutMe/AboutMe";
import Footer from "@/components/Footer/Footer";


export default async function Home() {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden scroll-smooth">
      <Header />
      <Hero />
      <Skills />
      <Academics />
      <Projects />

      {/* <AboutMe /> */}

      <Footer />
      
    </div>

    <ButtonGradient />
  </>
  );
}
