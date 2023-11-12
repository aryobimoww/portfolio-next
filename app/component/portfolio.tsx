interface PortfolioContent {
  title: string;
  img: string;
}

const portfolioContent: PortfolioContent[] = [
  {
    title: "facerecognition",
    img: "/portfolio/project1.png",
  },
  {
    title: "web shopping",
    img: "/portfolio/project2.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full h-screen dark:bg-bgPrimary bg-primary py-10 scroll-mt-10"
    >
      <h1 className="text-center text-4xl dark:text-white text-secondary">
        Portfolio
      </h1>
      <div className="w-full h-full grid grid-cols-2 gap-5 items-center">
        {portfolioContent.map((content, key) => {
          return (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-5 group dark:text-white text-secondary"
            >
              <div className="w-[500px] overflow-hidden">
                <img
                  src={content.img}
                  alt={content.title}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h1 className="text-lg capitalize group-hover:text-gray-400 dark:group-hover:text-secondary">
                {content.title}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
}
