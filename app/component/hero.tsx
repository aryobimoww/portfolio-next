import Link from "next/link";

export default function Home() {
  return (
    <section id="hero">
      <div className="w-full h-screen bg-[url(/background.jpg)] bg-cover">
        <div className="bg-bgPrimary/60 absolute w-full h-screen"></div>
        <div className="w-full h-full flex items-center justify-center">
          {/* <div className="mt-10 z-0"> */}
          {/* card */}
          <div className="w-[230px] h-[240px] rounded-md relative bg-bgSecondary">
            {/* circle */}
            <div className="absolute z-30 bg-gray-600 top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] w-[230px] h-[230px] rounded-full bg-gray-800/70"></div>
            <div className="absolute z-40 bg-gray-600 top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] w-[180px] h-[180px] rounded-full border-8 border-gray-500">
              <img src="/FotoProfile.png" alt="foto" className="rounded-full" />
            </div>
            {/* end */}
            {/* content */}
            <div className="mt-36 text-primary">
              <h1 className=" text-center text-sm">
                Aryobimo Widodo Wicaksono
              </h1>
              <p className="text-xs text-center">Fullstack Web Developer</p>
              <div className="flex justify-center space-x-5 mt-3">
                <div className="w-7 h-7 rounded-full bg-white">
                  <Link href={"https://t.me/Arbimo"} target="blank">
                    <img src="/telegram.png" alt="icon" />
                  </Link>
                </div>
                <div className="w-7 h-7 rounded-full bg-white">
                  <Link
                    href={
                      "https://www.linkedin.com/in/aryobimo-widodo-wicaksono-86a3b8218/"
                    }
                    target="blank"
                  >
                    <img src="/linkedin.png" alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
          {/* end */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
