import Link from "next/link";

interface Frontend {
  title: string;
  icon: string;
  href: string;
}

interface Backend {
  title: string;
  icon: string;
  href: string;
}

const frontend: Frontend[] = [
  {
    title: "Html",
    icon: "/frontend/html-5.png",
    href: "https://www.flaticon.com/free-icons/html",
  },
  {
    title: "Css",
    icon: "/frontend/css-3.png",
    href: "https://www.flaticon.com/free-icons/css",
  },
  {
    title: "Javascript",
    icon: "/frontend/java-script.png",
    href: "https://www.flaticon.com/free-icons/java",
  },
  {
    title: "Typescript",
    icon: "/frontend/typescript.svg",
    href: "",
  },
  {
    title: "React",
    icon: "/frontend/react.png",
    href: "https://www.flaticon.com/free-icons/react",
  },
  {
    title: "Next Js",
    icon: "/frontend/nextjs.png",
    href: "",
  },
  {
    title: "Tailwind",
    icon: "/frontend/Tailwind CSS.png",
    href: "",
  },
  {
    title: "Sass",
    icon: "/frontend/sass.png",
    href: "",
  },
];

const backend: Backend[] = [
  {
    title: "Node Js",
    icon: "/backend/nodejs.svg",
    href: "https://www.vectorlogo.zone/logos/nodejs/index.html",
  },
  {
    title: "Express Js",
    icon: "/backend/expressjs.svg",
    href: "https://www.vectorlogo.zone/logos/expressjs/index.html",
  },
  {
    title: "Nest Js",
    icon: "/backend/nestjs.svg",
    href: "https://www.vectorlogo.zone/logos/nestjs/index.html",
  },
  {
    title: "MongoDB",
    icon: "/backend/mongodb.svg",
    href: "https://www.vectorlogo.zone/logos/mongodb/index.html",
  },
  {
    title: "Mysql",
    icon: "/backend/mysql.svg",
    href: "https://www.vectorlogo.zone/logos/mysql/index.html",
  },
  {
    title: "Postgesql",
    icon: "/backend/postgresql.svg",
    href: "https://www.vectorlogo.zone/logos/postgresql/index.html",
  },
  {
    title: "Firebase",
    icon: "/backend/firebase.svg",
    href: "https://www.vectorlogo.zone/logos/firebase/index.html",
  },
];

export default function Skill() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="w-full h-screen dark:bg-bgSecondary bg-secondary py-10 transition-colors duration-500">
        <h1 className="text-center text-4xl text-primary transition-colors duration-500">
          Skills
        </h1>

        <div className="grid grid-cols-2 gap-3 mt-10">
          {/* frontend */}
          <div className="text-primary">
            <h1 className="text-center text-2xl">Frontend</h1>
            {/* frontend  skill */}
            <div className="grid grid-cols-3 gap-5 mt-10">
              {frontend.map((content, key) => {
                return (
                  <div
                    key={key}
                    className="flex flex-col justify-center items-center gap-1 group"
                  >
                    <Link href={`${content.href}`}>
                      <img
                        src={content.icon}
                        alt={content.title}
                        className=" w-9 group-hover:scale-125 transition-transform duration-300"
                      />
                    </Link>
                    <p className="text-lg">{content.title}</p>
                  </div>
                );
              })}
            </div>
            {/* end frontend skill*/}
          </div>
          {/* end frontend*/}

          {/* backend */}
          <div className="text-primary">
            <h1 className="text-center text-2xl">Backend</h1>
            {/* backend skill */}
            <div className="grid grid-cols-3 gap-4 mt-7">
              {backend.map((content, key) => {
                return (
                  <div
                    key={key}
                    className="flex flex-col justify-center items-center gap-2 group"
                  >
                    <Link href={`${content.href}`}>
                      <img
                        src={content.icon}
                        alt={content.title}
                        className="w-24 group-hover:scale-125 transition-transform duration-300"
                      />
                    </Link>
                    <p className="text-lg">{content.title}</p>
                  </div>
                );
              })}
            </div>
            {/* end */}
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}
