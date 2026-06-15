import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CourseCard } from '../components/CourseCard';
import { CallbackForm } from '../components/CallbackForm';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import imgCourse1 from '../assets/images/class.jpeg';
import imgCourseHero from '../assets/images/students.jpeg';
import { useMedia } from '../hooks/useMedia';

export const Courses: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { getMedia } = useMedia();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          image: doc.data().imageUrl || imgCourse1
        }));

        coursesData.sort((a: any, b: any) => {
          const orderA = a.order !== undefined ? a.order : 999;
          const orderB = b.order !== undefined ? b.order : 999;
          return orderA - orderB;
        });

        setCourses(coursesData);
      } catch (err) {
        console.error("Error fetching courses from Firebase:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow mt-20">
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
                src={getMedia('courses_hero_img', imgCourseHero)}
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

            {loading ? (
              <div className="text-center py-12 text-secondary">Loading courses...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-5xl mx-auto">
                {courses.map((course) => (
                  <CourseCard key={course.id} {...course} onDetailsClick={() => navigate(`/courses/${course.id}`)} />
                ))}

                {/* Counselling Call to Action Card */}
                <div className="program-card bg-primary-container text-on-primary rounded-xl border border-primary-container overflow-hidden flex flex-col h-full p-8 justify-center items-center text-center">
                  <span className="material-symbols-outlined text-5xl mb-4 opacity-90">support_agent</span>
                  <p className="font-label-caps tracking-widest uppercase mb-2 opacity-80">Not sure which?</p>
                  <h3 className="font-h3 text-h3 mb-4">Free Academic Counselling Session</h3>
                  <p className="text-body-md mb-8 opacity-90">
                    Our expert counsellors will guide you to the right course based on your goals, background, and exam timeline.
                  </p>
                  <div className="flex flex-col gap-4 w-full mt-auto">
                    <a href="https://wa.me/917005650117" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-white text-primary-container font-bold rounded hover:bg-surface transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-xl">forum</span>
                      Chat on WhatsApp
                    </a>
                    <a href="tel:+917005650117" className="w-full py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-xl">call</span>
                      Call Our Counsellor
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Callback Form Section */}
        <CallbackForm />
      </main>
      <Footer />
    </div>
  );
};
