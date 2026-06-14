import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatBar from "../components/StatBar";
import WhyChooseUs from "../components/WhyChooseUs";
import ProgramsOverview from "../components/ProgramsOverview";
import CTASection from "../components/CTASection";

import heroVideo from "../assets/video/hero.mp4";
import { useMedia } from "../hooks/useMedia";
import { Link } from "react-router-dom";

function Home() {
  const { getMedia } = useMedia();

  return (
    <div className="bg-background text-on-surface antialiased">
      <Navbar />

      <main className="mt-6">
        <section className="py-xl md:py-32 bg-gradient-to-br from-surface to-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
              <div className="space-y-lg max-w-2xl">
                <div className="inline-flex items-center gap-xs px-sm py-1 bg-primary-container/10 border border-primary-container/20 rounded text-primary-container font-bold text-sm tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-primary-container" />
                  Since 2022 in Dimapur
                </div>

                <div className="space-y-md">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-tight">
                    Nagaland&apos;s Premier Institute for{" "}
                    <span className="text-primary-container">
                      IIT-JEE & NEET
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-secondary leading-relaxed">
                    Established in 2022 in the heart of Dimapur, we provide a
                    rigorous academic environment and personalized mentorship to
                    shape the future of medical and engineering aspirants.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-md">
                  <Link
                    to="/courses"
                    className="bg-primary-container text-on-primary font-bold px-lg py-md rounded hover:scale-105 transition-transform shadow-lg text-lg text-center block"
                  >
                    Explore Programs
                  </Link>

                  <Link
                    to="/admissions"
                    className="border-2 border-primary-container text-primary-container font-bold px-lg py-md rounded hover:bg-primary-container/5 transition-colors text-lg text-center block"
                  >
                    Request a Callback
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-md pt-sm">
                  <div className="p-md rounded-xl bg-surface border border-surface-variant">
                    <p className="text-2xl font-bold text-primary-container">
                      500+
                    </p>
                    <p className="text-sm text-secondary">Students Guided</p>
                  </div>
                  <div className="p-md rounded-xl bg-surface border border-surface-variant">
                    <p className="text-2xl font-bold text-primary-container">
                      2022
                    </p>
                    <p className="text-sm text-secondary">Founded in Dimapur</p>
                  </div>
                  <div className="p-md rounded-xl bg-surface border border-surface-variant">
                    <p className="text-2xl font-bold text-primary-container">
                      IIT + NEET
                    </p>
                    <p className="text-sm text-secondary">Focused Tracks</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl bg-surface p-sm shadow-2xl border border-surface-variant">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={getMedia('home_hero_video', heroVideo)}
                    />
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-surface p-md rounded-xl shadow-lg border border-surface-variant hidden lg:flex items-center gap-sm">
                  <div className="bg-primary-container p-sm rounded-full">
                    <span className="material-symbols-outlined text-white">
                      verified_user
                    </span>
                  </div>

                  <div>
                    <p className="font-bold text-on-surface">
                      Trusted by 500+ Students
                    </p>
                    <p className="text-sm text-secondary">
                      Quality Coaching Guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatBar />
        <WhyChooseUs />
        <ProgramsOverview />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
