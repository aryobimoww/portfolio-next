import Image from "next/image";
import Hero from "./component/hero";
import About from "./component/about";
import Skill from "./component/skill";
import Contact from "./component/contact";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}
