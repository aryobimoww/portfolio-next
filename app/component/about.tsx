export default function About() {
  return (
    <section>
      <div className="w-full h-screen bg-bgSecondary py-10">
        <h1 className="text-center text-4xl text-primary">About me</h1>
        <div className="mt-5 mx-20">
          <p className="text-primary">
            <span className=" text-blue-800">
              Hello {"I'm"} Aryobimo Widodo Wicaksono
            </span>{" "}
            from Semarang Indonesia, graduate from Dian Nuswantoro University
            Bachelor Computer Scince,
            {"I'm"} Fullstack developer proficient javascript
            language,interested development web application.
          </p>
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
                <label htmlFor="">Phone</label>
                <p>+6281226261019</p>
              </div>
              <div className="flex space-x-3">
                <label htmlFor="">Github</label>
                <p>github.com/aryobimoww?tab=repositories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
