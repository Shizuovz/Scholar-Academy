import { Link } from "react-router-dom";

const programs = [
  {
    title: "IIT-JEE",
    description:
      "Comprehensive coaching for JEE Mains and Advanced. Focus on conceptual clarity and problem-solving techniques.",
    route: "/courses/iit-jee",
    barClass: "bg-primary-container",
  },
  {
    title: "NEET-UG",
    description:
      "Specialized training for medical aspirants. In-depth biology coverage and rigorous testing modules.",
    route: "/courses/neet",
    barClass: "bg-primary",
  },
  {
    title: "Foundation Programs",
    description:
      "Building a strong base for students in classes 8-10. Prepare for NTSE, Olympiads, and competitive rigor early.",
    route: "/courses/foundation",
    barClass: "bg-secondary",
  },
];

function ProgramsOverview() {
  return (
    <section className="py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
          <div className="space-y-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
              Tailored Paths to Success
            </h2>
            <p className="text-secondary">
              Find the perfect program to accelerate your academic career.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-surface rounded-xl overflow-hidden shadow-sm border border-surface-variant flex flex-col h-full hover:shadow-xl transition-shadow"
            >
              <div className={`h-2 ${program.barClass}`} />

              <div className="p-lg flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-on-surface mb-md">
                  {program.title}
                </h3>

                <p className="text-secondary mb-lg flex-grow leading-relaxed">
                  {program.description}
                </p>

                <Link
                  to={program.route}
                  className="inline-flex items-center text-primary-container font-bold hover:underline gap-xs"
                >
                  View Details
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsOverview;