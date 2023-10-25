import Image from "next/image";
import Hero from "./component/hero";
import About from "./component/about";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
    </div>
  );
}
