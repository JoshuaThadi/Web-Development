import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolio1,
      title: "3D Brand Identity",
      category: "Branding",
    },
    {
      image: portfolio2,
      title: "Luxury Cosmetics",
      category: "Product Design",
    },
    {
      image: portfolio3,
      title: "Food Photography",
      category: "Photography",
    },
    {
      image: portfolio4,
      title: "Mobile App UI",
      category: "UI/UX Design",
    },
    {
      image: portfolio5,
      title: "Abstract Art",
      category: "Digital Art",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground font-medium mb-4 tracking-wide uppercase text-sm">
            Recent Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="col-span-1 group overflow-hidden rounded-2xl relative shadow-md">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-xs text-background/70">{projects[0].category}</p>
                <p className="font-display font-semibold text-background">{projects[0].title}</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 group overflow-hidden rounded-2xl relative shadow-md">
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-xs text-background/70">{projects[1].category}</p>
                <p className="font-display font-semibold text-background">{projects[1].title}</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 row-span-2 group overflow-hidden rounded-2xl relative shadow-md">
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-full min-h-[250px] md:min-h-[340px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-xs text-background/70">{projects[2].category}</p>
                <p className="font-display font-semibold text-background">{projects[2].title}</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 group overflow-hidden rounded-2xl relative shadow-md">
            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-xs text-background/70">{projects[3].category}</p>
                <p className="font-display font-semibold text-background">{projects[3].title}</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-2 group overflow-hidden rounded-2xl relative shadow-md">
            <img
              src={projects[4].image}
              alt={projects[4].title}
              className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="text-xs text-background/70">{projects[4].category}</p>
                <p className="font-display font-semibold text-background">{projects[4].title}</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 group overflow-hidden rounded-2xl relative bg-foreground flex items-center justify-center shadow-md">
            <div className="text-center p-6">
              <p className="font-display text-2xl font-bold text-background mb-2">20+</p>
              <p className="text-background/70 text-sm">More Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
