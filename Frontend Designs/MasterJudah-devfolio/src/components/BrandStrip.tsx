const BrandStrip = () => {
  const brands = [
    { name: "Google", logo: "Google" },
    { name: "Yahoo", logo: "yahoo!" },
    { name: "Dribbble", logo: "dribbble" },
    { name: "Pinterest", logo: "Pinterest" },
    { name: "Behance", logo: "Bēhance" },
  ];

  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="text-2xl md:text-3xl font-display font-semibold text-muted-foreground/40 hover:text-foreground transition-colors duration-300 cursor-default"
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
