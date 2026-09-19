const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      text: "Aid Connect exists to close the gap between medical supplies and the people who need them. We connect donors, healthcare providers, and organizations on one platform — making it simple to see what's needed, contribute what's available, and track where support is going.",
    },
    {
      title: "What We Do",
      text: "Providers post real needs — from everyday essentials to urgent, time-sensitive supplies. Donors and partner organizations can browse, filter, and respond directly, without the delays that usually come with traditional donation channels.",
    },
    {
      title: "Who It's For",
      text: "Clinics, community health workers, nonprofits, and individual donors who want their contribution to reach the right hands quickly and transparently.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-surface/20 to-black -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-health-accent mb-3">
            About us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-foreground tracking-tight">
            About Aid Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="glass rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-surface-foreground mb-3">
                {section.title}
              </h3>
              <p className="text-sm text-surface-foreground/70 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
