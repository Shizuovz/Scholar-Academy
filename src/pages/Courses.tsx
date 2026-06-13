import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CourseCard } from '../components/CourseCard';
import { CallbackForm } from '../components/CallbackForm';

export const Courses: React.FC = () => {
  const courses = [
    {
      id: 'iit-jee',
      title: 'IIT-JEE (Mains & Advanced)',
      badge: 'Jee Specialist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfkaLZ2TmvPEvrQOCvIyzVRRFFMwKOQ0NbRqS9_BoHfFlL60A3wLH_JtfBv2EtZ_eSY3vBnU84WZ4iAL1ja0toWPZtY4178N4GHkqyqffmkYFzFo6blJtVNtfKNX5NxjPW5Ie9qpxFtlpaZuCunCHajpjwuDcbkgqdIPkVbS8iOh2uYuvK_0KRwB5x6S1Je0yM7pxBRk_XqrxcYy8H3Dq2Qv9V9iIiE3AHVyiD3vEKSTKH38rCYzG8jp7-IpvJsjuki4CwJ0NQcEc',
      duration: '2-Year & 1-Year Programs',
      eligibility: 'Eligibility: Class 11 & 12',
      features: [
        'Daily Practice Problems (DPPs)',
        'Weekly Computer-Based Tests',
        'Personalized Mentorship for Advanced',
      ],
    },
    {
      id: 'neet',
      title: 'NEET-UG',
      badge: 'Medical Path',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBtrNFPpXEviRKP_ylhywqtpa1335S4IsopZBEAV0USH_Ju5uorV0wuZGafrR8s4AtFnfxCYtrGHN0DCO6ItB-AYsGbBO7w64MalzihqgZQNKz7YBO1jlwyt3QFToM442m02E5aixCxT7GLXi4D022HgTDiqaDCQ17nL9xr2zIIUKG2WNbjVsU2nVVy55W4kTbqpvaDSGWlY42e3iWkE3JD2Aa_4JtKajWTw7xcCN_SEOVyahFna7mAyJ_NhFckc88Z1ID_YBmMQs',
      duration: 'Comprehensive Preparation',
      eligibility: 'Eligibility: Class 11 & 12',
      features: [
        'Biology-centric Intensive Modules',
        'NCERT Pattern Based Testing',
        'Regular Doubt Clearing Sessions',
      ],
    },
    {
      id: 'foundation',
      title: 'Foundation Programs',
      badge: 'Early Start',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc_C-kX88kwA4CoBjJ3Wt_IHelhEA9nUN5TpxjtE1oX-PgLUY4MhXCesMdz6OMKQyKeGobPjZ8rIQ4oRJxZ7MhSIMIsvJMWzShzHbG6j3f9nNDhJVKTBjzGhJ2ngh-cqlevVZgYi81g6y9G2sGO3SsEs2LHEiXfd65XR5FCIBogdw15_kNG5cArXhPjFazJFvPgqUr0N9Vta5cD0_JrefjaB2eJd9YJCNBp_gytqYsYyt8QAr154aRVdM1vuIhpUsclIPquEPxWeY',
      duration: 'Concept Building',
      eligibility: 'Eligibility: Class 8, 9 & 10',
      features: [
        'Focus on NTSE & Olympiads',
        'Advanced Math & Logic Mastery',
        'Stress-Free Competitive Edge',
      ],
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-surface py-xl">
          <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-primary-fixed text-primary text-label-caps uppercase tracking-widest rounded-sm">
                Academic Excellence
              </span>
              <h1 className="font-h1 text-h1 text-on-surface">Shape Your Future with Elite Coaching</h1>
              <p className="text-body-lg text-secondary">
                Comprehensive programs designed for the highest level of rigor in IIT-JEE, NEET, and Foundation studies. Join the institute that turns ambition into achievement.
              </p>
              <div className="flex gap-4">
                <a
                  className="bg-primary-container text-on-primary px-8 py-3 rounded-lg font-bold shadow-md hover:bg-opacity-90 transition-all inline-block"
                  href="#courses"
                >
                  Explore Programs
                </a>
                <a
                  className="border-2 border-primary-container text-primary-container px-8 py-3 rounded-lg font-bold hover:bg-primary-container/5 transition-all inline-block"
                  href="#callback"
                >
                  Request Info
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
              <img
                alt="Academic Environment"
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKKn4rKAaKRV00jQNccaGFyhTq4VHMOdAlJMLj9WV4ZAwyZ_VzEcKXfGkcqKzP9bviPYBbLVIFxOmDy6wZdzJZmxQFwSSGtN40OQObbH2NJ2PopJILEcqSP5PkwSQ_hW760JB-ONqNvEXoRu6k3VuPbHMdi-xrkkoN3Oskmr81PMz-LNsoJHgG80QxN2c7TO707F2LB2z-RJvqHzn9V0_AVHYvRC_v0gpZNIwmN0EflZ596KPlPzMtqVQz7Btppc74X-mPT1ByVE"
              />
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-xl bg-surface-container-low" id="courses">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-h2 text-h2 text-on-surface mb-4">Our Specialized Programs</h2>
              <div className="h-1 w-20 bg-primary-container mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-5xl mx-auto">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Callback Form Section */}
        <CallbackForm />
      </main>
      <Footer />
    </div>
  );
};
