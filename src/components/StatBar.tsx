const stats = [
  {
    value: "95%",
    label: "Success Rate",
  },
  {
    value: "Expert",
    label: "Faculty",
  },
  {
    value: "Modern",
    label: "Tech",
  },
  {
    value: "Personalized",
    label: "Mentorship",
  },
];

function StatBar() {
  return (
    <section className="bg-surface-container-high py-lg border-y border-surface-variant">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-lg text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-xs">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-container">
                {stat.value}
              </p>
              <p className="text-secondary font-bold uppercase text-xs tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatBar;