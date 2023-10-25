export default function About() {
  return (
    <section id="about">
      <div className="w-full h-screen bg-bgSecondary py-10">
        <h1 className="text-center text-4xl text-primary">About me</h1>
        {/* about me*/}
        <div className="mt-5 mx-20">
          <p className="text-primary">
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
            <p className="text-primary text-3xl">Personal Detail</p>
            <div className="flex flex-col mt-4 space-y-3 text-primary">
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
            <button className="bg-bgPrimary h-8 px-3 py-1 border border-white relative group rounded-lg">
              <span className="absolute top-0 left-0 bottom-0 right-0 my-auto w-0 h-full z-0 bg-white group-hover:w-full group-hover:h-full transition-all duration-500 rounded-lg"></span>
              <span className="relative text-primary group-hover:text-bgPrimary duration-300 z-10">
                Download CV
              </span>
            </button>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}
