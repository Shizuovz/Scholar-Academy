import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MissionVisionCard } from '../components/MissionVisionCard';
import { FacultyCard } from '../components/FacultyCard';
import akangshya from '../assets/faculty/Akangshya Duari.jpeg';
import bapi from '../assets/faculty/Bapi Saha.jpeg';
import kishitimoni from '../assets/faculty/Kishitimoni Gogoi.jpeg';
import ritupan from '../assets/faculty/Ritupan Baruah.jpeg';
import sayeda from '../assets/faculty/Sayeda Hasbiya Sirin.jpeg';
import logo2 from "../assets/logo2.png";
import imgCampus from '../assets/images/students.jpeg';
import imgClassroom from '../assets/images/class.jpeg';
import imgLab from '../assets/images/exam.jpeg';
import imgLibrary from '../assets/images/students1.jpeg';
import imgReception from '../assets/images/counselling.jpeg';
import { useMedia } from '../hooks/useMedia';

export const About: React.FC = () => {
  const { getMedia } = useMedia();
  const facultyMembers = [
    {
      name: 'Akangshya Duari',
      expertise: 'Biology Teacher | M.Sc Biology | 4+ Years',
      badge: 'Biology',
      image: akangshya,
    },
    {
      name: 'Ritupan Baruah',
      expertise: 'Mathematics Teacher | M.Sc Mathematics | 3+ Years',
      badge: 'Mathematics',
      image: ritupan,
    },
    {
      name: 'Bapi Saha',
      expertise: 'Chemistry Teacher | M.Sc Chemistry | 6+ Years',
      badge: 'Chemistry',
      image: bapi,
    },
    {
      name: 'Sayeda Hasbiya Sirin',
      expertise: 'Physics Teacher | M.Sc Physics | 3+ Years',
      badge: 'Physics',
      image: sayeda,
    },
    {
      name: 'Kishitimoni Gogoi',
      expertise: 'Vocational (AI & Robotics) | B.Tech ECE | 1+ Years',
      badge: 'AI & Robotics',
      image: kishitimoni,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <header className="relative overflow-hidden pt-xl pb-lg md:pt-xl md:pb-xl scholar-gradient-bg mt-20">
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="max-w-3xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-base block">
                ESTABLISHED 2022 • DIMAPUR, NAGALAND
              </span>
              <h1 className="font-h1 text-h1-mobile md:text-h1 text-on-surface mb-md">
                Pioneering Academic Excellence in the Heart of Nagaland.
              </h1>
              <p className="font-body-lg text-body-lg text-secondary mb-lg leading-relaxed">
                Scholar Academy was founded with a singular vision: to bridge the gap between local talent and global
                standards of competitive education for JEE and NEET aspirants.
              </p>
              <div className="flex flex-wrap gap-md">
                <div className="flex items-center gap-sm bg-surface-container-lowest p-sm rounded-xl border border-surface-container shadow-sm">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">Premier Faculty</p>
                    <p className="text-caption">Industry Experts</p>
                  </div>
                </div>
                <div className="flex items-center gap-sm bg-surface-container-lowest p-sm rounded-xl border border-surface-container shadow-sm">
                  <span
                    className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    school
                  </span>
                  <div>
                    <p className="font-bold text-on-surface">Modern Tech</p>
                    <p className="text-caption">Digital Classrooms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute py-12 right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
            <img
              alt="Background watermark logo"
              className="w-full h-full object-contain rotate-12 scale-125"
              src={logo2}
            />
          </div>
        </header>

        {/* Our Story Section */}
        <section className="py-xl bg-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="md:col-span-7 space-y-md">
                <h2 className="font-h2 text-h2 text-on-surface">The Story of Scholar Academy</h2>
                <div className="w-20 h-1 bg-primary mb-md"></div>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  In late 2021, a group of dedicated educators recognized a growing challenge: thousands of brilliant
                  students from Nagaland were forced to travel far away from home to find quality coaching for national
                  competitive exams.
                </p>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  Established in 2022 in the vibrant city of Dimapur, Scholar Academy emerged as the answer to this need.
                  We didn't just build a coaching center; we built a sanctuary for ambition. Starting with a small cohort
                  of 50 students, we have rapidly evolved into Nagaland's most trusted name for IIT-JEE and NEET
                  preparation.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="relative rounded-xl overflow-hidden aspect-square h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={getMedia('about_campus_img', imgCampus)}
                    alt="Scholar Academy Campus"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-lg bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="font-h3 text-h3">Our Headquarters</p>
                    <p className="text-caption opacity-80">Dimapur, Nagaland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter text-center mb-lg">
            <h2 className="font-h2 text-h2 text-on-surface">Driven by Purpose</h2>
          </div>
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-lg">
            <MissionVisionCard
              icon="rocket_launch"
              title="Our Mission"
              description="To democratize access to elite coaching by providing world-class educational resources, personalized mentorship, and a competitive environment right here in Nagaland."
            />
            <MissionVisionCard
              icon="visibility"
              title="Our Vision"
              description="To be recognized as the intellectual hub of Northeast India, producing the next generation of engineers, doctors, and innovators who will lead the country's progress."
            />
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-xl bg-white">
          <div className="max-w-container-max mx-auto px-gutter mb-lg">
            <h2 className="font-h2 text-h2 text-on-surface">The Architects of Success</h2>
            <p className="text-secondary mt-xs">Meet our experienced faculty members dedicated to your growth.</p>
          </div>
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
            {facultyMembers.map((member, index) => (
              <FacultyCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-xl bg-surface-container">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-md">
                <div className="space-y-md">
                  <img
                    className="w-full aspect-[4/3] object-cover rounded-xl border border-surface-container-highest"
                    src={getMedia('about_classroom_img', imgClassroom)}
                    alt="Digital Classroom"
                  />
                  <img
                    className="w-full aspect-[4/5] object-cover rounded-xl border border-surface-container-highest"
                    src={getMedia('about_lab_img', imgLab)}
                    alt="Physics Lab"
                  />
                </div>
                <div className="space-y-md pt-lg">
                  <img
                    className="w-full aspect-[4/5] object-cover rounded-xl border border-surface-container-highest"
                    src={getMedia('about_library_img', imgLibrary)}
                    alt="Library"
                  />
                  <img
                    className="w-full aspect-[4/3] object-cover rounded-xl border border-surface-container-highest"
                    src={getMedia('about_reception_img', imgReception)}
                    alt="Reception Area"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-md">
              <h2 className="font-h2 text-h2 text-on-surface">Modern Infrastructure</h2>
              <div className="w-20 h-1 bg-primary mb-md"></div>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Learning happens best in an environment designed for focus. Our Dimapur campus features:
              </p>
              <ul className="space-y-sm">
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-on-surface">
                    <strong>Smart Classrooms:</strong> Interactive boards and hybrid learning capabilities.
                  </span>
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-on-surface">
                    <strong>Fully Equipped Labs:</strong> Practical learning for Physics, Chemistry, and Biology.
                  </span>
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-on-surface">
                    <strong>Resource Center:</strong> A library stocked with national-level coaching modules.
                  </span>
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-on-surface">
                    <strong>Safe & Secure:</strong> 24/7 CCTV surveillance and student safety protocols.
                  </span>
                </li>
              </ul>
              <div className="pt-md">
                <button className="border-2 border-primary text-primary px-lg py-base font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                  Request a Campus Tour
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
