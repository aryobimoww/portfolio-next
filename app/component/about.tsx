import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="scroll-mt-10">
      <div className="w-full h-screen dark:bg-bgPrimary py-10 bg-primary transition-colors duration-500">
        <h1 className="text-center text-4xl dark:text-primary text-secondary">
          About me
        </h1>
        {/* about me*/}
        <div className="mt-5 mx-20">
          <p className="dark:text-primary text-black transition-colors duration-500">
            <span className=" text-secondary font-semibold text-xl">
              Hello {"I'm"} Aryobimo Widodo Wicaksono
            </span>{" "}
            from Semarang Indonesia, graduate from Dian Nuswantoro University
            Bachelor Computer Scince,
            {"I'm"} Fullstack developer proficient javascript
            language,interested development web application.
          </p>
          {/* end */}
          {/* personal detail */}
          <div className="mt-5">
            <p className="dark:text-primary text-black text-3xl transition-colors duration-500">
              Personal Detail
            </p>
            <div className="flex flex-col mt-4 space-y-3 dark:text-primary text-black transition-colors duration-500">
              <div className="flex space-x-3">
                <label htmlFor="">Birthdate:</label>
                <p>19-10-1995</p>
              </div>
              <div className="flex space-x-3">
                <label htmlFor="">Email:</label>
                <p>aryobimoww19@gmail.com</p>
              </div>
              <div className="flex space-x-3">
                <label htmlFor="">Phone:</label>
                <p>+6281226261019</p>
              </div>
              <div className="flex space-x-3">
                <label htmlFor="">Github:</label>
                <p>github.com/aryobimoww?tab=repositories</p>
              </div>
            </div>
          </div>
          {/* end */}
          {/* cv download */}
          <div className="w-full flex justify-center mt-10">
            <a href={"/cv/cv.pdf"} download={true}>
              <button className="dark:bg-bgPrimary bg-secondary h-8 px-3 py-1 border dark:border-white border-black relative group rounded-lg transition-colors duration-500">
                <span className="absolute top-0 left-0 bottom-0 right-0 my-auto w-0 h-full z-0 bg-white group-hover:w-full group-hover:h-full transition-all duration-500 rounded-lg"></span>
                <span className="relative text-primary group-hover:text-secondary duration-300 z-10">
                  Download CV
                </span>
              </button>
            </a>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}
