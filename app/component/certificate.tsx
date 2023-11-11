"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const defaultLightBox = {
  image: "",
  open: false,
};

interface CeriticationContent {
  title: string;
  image: string;
  pdf: string;
}
const certificationContetn: CeriticationContent[] = [
  {
    title: "web developer certificate",
    image: "/certificate/web_developer.png",
    pdf: "/certificate/web_developer.pdf",
  },
  {
    title: "data structure certificate",
    image: "/certificate/data_structure.png",
    pdf: "/certificate/data_structure.pdf",
  },
  {
    title: "react js certificate",
    image: "/certificate/react_js.png",
    pdf: "/certificate/react_js.pdf",
  },
];
export default function Certificate() {
  const [lightBox, setLightBox] = useState(defaultLightBox);

  const handleLightBox = (pdf: string) => {
    setLightBox({ ...lightBox, ["image"]: pdf, ["open"]: true });
  };
  const closeLightBox = () => {
    setLightBox({ ...lightBox, ["open"]: false });
  };
  return (
    <section
      id="certification"
      className="w-full h-screen bg-secondary dark:bg-bgSecondary py-10 transition-colors duration-500"
    >
      <div
        className={`fixed left-0 top-0 w-full h-full z-50 ${
          lightBox.open ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-full flex justify-center items-center bg-black/90">
          <div
            className="absolute top-5 right-5 text-white cursor-pointer"
            onClick={closeLightBox}
          >
            <AiOutlineClose size={24} />
          </div>
          <img src={lightBox.image} className="w-1/2 h-[480px]" />
        </div>
      </div>
      <h1 className="text-center text-4xl text-white"> Certification</h1>
      <div className="grid grid-cols-3 w-full gap-5 mt-10">
        {certificationContetn.map((content, key) => {
          return (
            <div
              key={key}
              className="flex flex-col justify-center items-center gap-3 text-white group"
            >
              <div
                className="w-[280px] cursor-pointer group-hover:scale-110 transition-transform duration-300"
                onClick={() => handleLightBox(content.image)}
              >
                <img src={content.image} alt={content.title} />
              </div>
              <h1 className="text-lg capitalize group-hover:text-gray-200 dark:group-hover:text-secondary transition-colors duration-300">
                {content.title}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
