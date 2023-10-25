import Link from "next/link";

interface Frontend {
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
    title: "css",
    icon: "/frontend/css-3.png",
    href: "https://www.flaticon.com/free-icons/css",
  },
  {
    title: "Javascript",
    icon: "/frontend/java-script.png",
    href: "https://www.flaticon.com/free-icons/java",
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
export default function Skill() {
  return (
    <section id="skills">
      <div className="w-full h-screen bg-bgPrimary py-10">
        <h1 className="text-center text-4xl text-primary">Skills</h1>

        <div className="grid grid-cols-2 mt-10">
          {/* frontend */}
          <div className="text-primary">
            <h1 className="text-center text-2xl">frontend</h1>
            {/* frontend  skill */}
            <div className="grid grid-cols-3 gap-10 mt-10">
              {frontend.map((content, key) => {
                return (
                  <div
                    key={key}
                    className="flex justify-center items-center gap-5 group"
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
            {/* end */}
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}
