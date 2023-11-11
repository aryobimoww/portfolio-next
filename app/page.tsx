import Image from "next/image";
import Hero from "./component/hero";
import About from "./component/about";
import Skill from "./component/skill";
import Contact from "./component/contact";
import Certificate from "./component/certificate";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skill />
      <Certificate />
      <Contact />
    </div>
  );
}
