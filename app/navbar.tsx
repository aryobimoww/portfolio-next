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
      title: "contact",
      href: "#contact",
    },
  ];
  return (
    <div className="h-[64px] w-full sticky bg-gradient-to-r from-[#232526] to-[#414345] ">
      <div className=" flex items-center h-full">
        <div className="ml-5">
          <h1 className="text-4xl text-primary font-normal font-shadow cursor-default">
            AW
          </h1>
        </div>
        <div className="flex w-full justify-end text-primary text-lg gap-10 mr-12">
          {navItems.map((item, key) => {
            return (
              <Link key={key} href={item.href}>
                <p className="capitalize hover:text-white">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
