import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CallbackForm } from '../components/CallbackForm';
import imgRobotics from '../assets/images/initiatives/govt teachers training program.jpeg'; // Using the lab image for robotics

export const RoboticsCourseDetails: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <section className="relative bg-surface py-xl">
          <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-primary text-label-caps uppercase tracking-widest rounded-sm">
                Vocational
              </span>
              <h1 className="font-h1 text-h1 text-on-surface">Robotics & Artificial Intelligence (AI) Vocational Course</h1>
              <h3 className="text-xl text-primary-container font-semibold">Empowering the Next Generation of Innovators</h3>
              <p className="text-body-lg text-secondary">
                The Robotics & Artificial Intelligence (AI) Vocational Course is a future-focused skill development program designed for students from Class VI to Class XII, as well as college students pursuing higher education across various disciplines. The program aims to equip learners with practical technological skills, innovation-driven thinking, and industry-relevant knowledge required in the rapidly evolving digital world.
              </p>
              <p className="text-body-lg text-secondary">
                Offered in collaboration with educational institutions and colleges, this vocational course introduces students to the exciting fields of robotics, artificial intelligence, automation, coding, machine learning fundamentals, and emerging technologies through a highly practical and engaging learning approach.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  className="bg-primary-container text-on-primary px-8 py-3 rounded-lg font-bold shadow-md hover:bg-opacity-90 transition-all inline-block"
                  href="#callback"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-surface-variant">
              <img
                alt="Robotics and AI Course"
                className="w-full h-full object-cover"
                src={imgRobotics}
              />
            </div>
          </div>
        </section>

        {/* Details Sections */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-gutter space-y-12">

            {/* Who Can Enroll */}
            <div className="bg-surface p-8 rounded-xl border border-surface-variant shadow-sm">
              <h3 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-3xl">groups</span>
                Who Can Enroll?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Students from Class VI to Class X",
                  "Students of Class XI and XII from any stream (Science, Commerce, or Arts)",
                  "Undergraduate and higher education students from various academic backgrounds",
                  "Young learners interested in technology, innovation, and future careers"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                    <span className="text-on-surface-variant leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Students Learn */}
            <div className="bg-surface p-8 rounded-xl border border-surface-variant shadow-sm">
              <h3 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-3xl">menu_book</span>
                What Students Learn
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Fundamentals of Robotics and Automation",
                  "Coding and Programming Concepts",
                  "Artificial Intelligence & Machine Learning Basics",
                  "Sensors, Electronics, and Smart Systems",
                  "Design Thinking and Innovation",
                  "Computational and Logical Reasoning",
                  "Problem Solving Techniques",
                  "Real-World Technology Applications",
                  "Future Technologies and Digital Skills"
                ].map((item, index) => (
                  <div key={index} className="bg-surface-container-lowest p-4 rounded-lg border border-surface-variant flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">lightbulb</span>
                    <span className="text-sm font-medium text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hands-On Practical Learning */}
            <div className="bg-surface p-8 rounded-xl border border-surface-variant shadow-sm">
              <h3 className="text-2xl font-bold text-on-surface mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container text-3xl">construction</span>
                Hands-On Practical Learning
              </h3>
              <p className="text-secondary leading-relaxed mb-6">
                The program is designed around experiential learning, ensuring that students gain practical exposure rather than only theoretical knowledge. Participants actively engage in:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Robotics laboratory sessions",
                  "AI-based practical activities",
                  "Robot design and assembly projects",
                  "Coding and automation exercises",
                  "Technology demonstrations and workshops",
                  "Innovation and project-based learning",
                  "Prototype development and presentations",
                  "Team-based problem-solving challenges"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 bg-surface-container-low p-3 rounded-md">
                    <span className="material-symbols-outlined text-primary">play_arrow</span>
                    <span className="text-on-surface-variant text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits of the Program */}
            <div className="bg-primary-container text-on-primary-container p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">star</span>
                Benefits of the Program
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Develop future-ready technical skills",
                  "Strengthen creativity and innovation capabilities",
                  "Improve analytical and critical thinking",
                  "Build confidence in using modern technologies",
                  "Enhance teamwork, communication, and leadership skills",
                  "Gain early exposure to AI and robotics careers",
                  "Prepare for higher education and emerging technology-driven professions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5">verified</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparing Students */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-on-surface">Preparing Students for Tomorrow’s World</h3>
              <p className="text-secondary leading-relaxed text-lg">
                As artificial intelligence, automation, and smart technologies continue to reshape industries across the globe, students must be equipped with skills that extend beyond traditional classroom education. This vocational program bridges the gap between academic learning and real-world technological applications by providing meaningful exposure to cutting-edge technologies from an early stage.
              </p>
              <p className="text-secondary leading-relaxed text-lg">
                Through hands-on learning, innovation-driven projects, and practical experience, students become creators, problem-solvers, and future leaders capable of thriving in the digital economy and the technology-powered world of tomorrow.
              </p>
            </div>

          </div>
        </section>

        <CallbackForm />
      </main>
      <Footer />
    </div>
  );
};
