import Link from "next/link";

interface NavItems {
  title: string;
  href: string;
}

export default function Navbar() {
  const navItems: NavItems[] = [
    {
      title: "about",
      href: "#about",
    },

    {
      title: "skills",
      href: "#skills",
    },
    {
      title: "portfolio",
      href: "#portfolio",
    },
    {
      title: "certification",
      href: "#certification",
    },
    {
      title: "contact",
      href: "#contact",
    },
  ];
  return (
    <div className="h-[64px] w-full sticky left-0 top-0 z-50 bg-gradient-to-r from-[#232526] to-[#414345] ">
      <div className=" flex items-center h-full">
        <div className="ml-5">
          <Link href={"#hero"}>
            <h1 className="text-4xl text-primary font-normal font-shadow cursor-default hover:scale-105 transition-transform duration-300">
              AW
            </h1>
          </Link>
        </div>
        <div className="flex w-full h-full justify-end items-center text-primary text-lg gap-10 mr-12">
          {navItems.map((item, key) => {
            return (
              <div
                key={key}
                className="h-full flex items-center group z-0 relative"
              >
                <Link href={item.href}>
                  <span className="absolute bottom-0 left-0 w-0 h-1 z-10 group-hover:w-full group-hover:h-1 bg-secondary transitiion-all duration-500"></span>
                  <p className="capitalize group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
