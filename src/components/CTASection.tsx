import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-xl">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="bg-inverse-surface rounded-2xl p-lg md:p-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-xl text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container opacity-10 rounded-full -ml-24 -mb-24" />

          <div className="relative z-10 space-y-md max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Start Your Journey with Us
            </h2>
            <p className="text-on-inverse-surface/80 text-lg md:text-xl">
              Join hundreds of successful students and transform your academic
              potential into reality. Admissions are now open.
            </p>
          </div>

          <div className="relative z-10">
            <Link
              to="/admissions"
              className="inline-block bg-primary-container text-on-primary font-bold px-xl py-md rounded-lg text-xl hover:scale-105 transition-transform shadow-xl"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;