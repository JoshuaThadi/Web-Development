const TrustedBy = () => {
  const companies = [
    { name: "Databricks", color: "text-foreground" },
    { name: "Slack", color: "text-foreground" },
    { name: "Intercom", color: "text-foreground" },
    { name: "DocuSign", color: "text-foreground" },
    { name: "Google", color: "text-foreground" },
  ];

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="container mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by <span className="text-accent font-semibold">Productive People</span>
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {companies.map((company) => (
            <div key={company.name} className={`text-2xl font-semibold ${company.color} opacity-60 hover:opacity-100 transition-opacity`}>
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
