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
import imgRobotics from '../assets/images/initiatives/students1.jpeg';
import { useMedia } from '../hooks/useMedia';

export const Courses: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { getMedia } = useMedia();
  const navigate = useNavigate();

  const heroImages = [
    getMedia('courses_hero_img_1', imgCourseHero),
    getMedia('courses_hero_img_2', imgCourse1),
    getMedia('courses_hero_img_3', imgCourseHero)
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData: any[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          image: doc.data().imageUrl || imgCourse1
        }));

        const exists = coursesData.some(c => c.id === 'robotics-ai' || c.title.toLowerCase().includes('robotics'));
        if (!exists) {
          coursesData.push({
            id: 'robotics-ai',
            title: 'Robotics & Artificial Intelligence (AI) Vocational Course',
            badge: 'Vocational',
            description: 'A future-focused skill development program to equip learners with practical technological skills, innovation-driven thinking, and industry-relevant knowledge.',
            duration: 'Flexible Schedule',
            eligibility: 'Class VI - XII & College Students',
            features: [
              'Hands-on robotics laboratory',
              'Coding & AI fundamentals',
              'Project-based experiential learning',
              'Future-ready technical skills'
            ],
            imageUrl: imgRobotics,
            image: imgRobotics,
            order: 1000
          });
        }

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
                Comprehensive programs designed for the highest level of rigor in IIT-JEE, NEET, Foundation studies, STEM Education, and our Robotics &amp; Artificial Intelligence (AI) Vocational Course. Join the institute that turns ambition into achievement.
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none"></div>

              {heroImages.map((src, index) => (
                <img
                  key={index}
                  alt={`Academic Environment ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 grayscale-[20%] sepia-[10%] ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  src={src}
                />
              ))}

              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-primary-container' : 'w-2 bg-white/70 hover:bg-white'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-5xl mx-auto">
                  {courses.map((course) => (
                    <CourseCard key={course.id} {...course} onDetailsClick={() => navigate(`/courses/${course.id}`)} />
                  ))}
                </div>

                {/* Counselling Call to Action Card */}
                <div className="max-w-5xl mx-auto mt-12">
                  <div className="bg-primary-container text-on-primary rounded-xl border border-primary-container overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 flex-grow">
                      <span className="material-symbols-outlined text-5xl opacity-90 shrink-0 md:mt-1">support_agent</span>
                      <div>
                        <p className="font-label-caps tracking-widest uppercase mb-2 opacity-80 text-sm">Not sure which?</p>
                        <h3 className="font-h3 text-h3 mb-2 md:mb-3">Free Academic Counselling Session</h3>
                        <p className="text-body-md opacity-90 max-w-2xl">
                          Our expert counsellors will guide you to the right course based on your goals, background, and exam timeline.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                      <a href="https://wa.me/917005650117" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-primary-container font-bold rounded hover:bg-surface transition-all flex items-center justify-center gap-2 shadow-sm">
                        <span className="material-symbols-outlined text-xl">forum</span>
                        Chat on WhatsApp
                      </a>
                      <a href="tel:+917005650117" className="px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-xl">call</span>
                        Call Our Counsellor
                      </a>
                    </div>
                  </div>
                </div>
              </>
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
