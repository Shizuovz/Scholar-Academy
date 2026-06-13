const features = [
  {
    icon: "apartment",
    title: "World-class Infrastructure",
    description:
      "Modern classrooms equipped with high-tech interactive displays and a resource-rich library designed for deep focus.",
  },
  {
    icon: "school",
    title: "Expert Mentors",
    description:
      "Our faculty consists of experienced educators and alumni from premier institutes who are dedicated to student growth.",
  },
  {
    icon: "trending_up",
    title: "Proven Success",
    description:
      "A history of consistent top ranks and high selection rates in competitive national entrance examinations.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl space-y-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
            Why Choose Scholar Academy?
          </h2>
          <div className="w-20 h-1 bg-primary-container mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-lg bg-surface border border-surface-variant rounded-xl hover:shadow-md transition-shadow group"
            >
              <div className="bg-primary-container/10 w-14 h-14 rounded-lg flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-primary-container group-hover:text-white">
                  {feature.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-sm">{feature.title}</h3>

              <p className="text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;