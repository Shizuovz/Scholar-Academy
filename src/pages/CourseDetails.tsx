import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CallbackForm } from '../components/CallbackForm';
import { RoboticsCourseDetails } from './RoboticsCourseDetails';

export const CourseDetails: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) return;
      try {
        const docRef = doc(db, 'courses', courseId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCourse({ id: docSnap.id, ...docSnap.data() });
        } else {
          setCourse(null);
        }
      } catch (err) {
        console.error("Error fetching course:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-secondary text-lg">Loading course details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (courseId === 'robotics-ai') {
    return <RoboticsCourseDetails />;
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-bold text-on-surface mb-4">Course Not Found</h1>
          <p className="text-secondary mb-8">We couldn't find the program you were looking for.</p>
          <Link to="/courses" className="bg-primary-container text-on-primary px-6 py-3 rounded-lg font-bold">
            Browse All Courses
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <section className="relative bg-surface py-xl">
          <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {course.badge && (
                <span className="inline-block px-3 py-1 bg-primary-fixed text-primary text-label-caps uppercase tracking-widest rounded-sm">
                  {course.badge}
                </span>
              )}
              <h1 className="font-h1 text-h1 text-on-surface">{course.title}</h1>
              <p className="text-body-lg text-secondary whitespace-pre-wrap">
                {course.description}
              </p>
              <div className="flex gap-4">
                <a
                  className="bg-primary-container text-on-primary px-8 py-3 rounded-lg font-bold shadow-md hover:bg-opacity-90 transition-all inline-block"
                  href="#callback"
                >
                  Enroll Now
                </a>
              </div>
            </div>
            {course.imageUrl && (
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl border border-surface-variant">
                <img
                  alt={course.title}
                  className="w-full h-full object-cover"
                  src={course.imageUrl}
                />
              </div>
            )}
          </div>
        </section>

        {/* Details Section */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-gutter">
            <h2 className="text-3xl font-bold text-on-surface mb-8 text-center">Program Details</h2>

            <div className="bg-surface p-8 rounded-xl border border-surface-variant shadow-sm mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-surface-variant pb-8">
                {course.duration && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <p className="text-xs text-secondary uppercase tracking-widest font-bold">Duration</p>
                      <p className="font-medium text-on-surface">{course.duration}</p>
                    </div>
                  </div>
                )}

                {course.eligibility && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container shrink-0">
                      <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                      <p className="text-xs text-secondary uppercase tracking-widest font-bold">Eligibility</p>
                      <p className="font-medium text-on-surface">{course.eligibility}</p>
                    </div>
                  </div>
                )}
              </div>

              {course.features && course.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {course.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary-container mt-0.5">
                          check_circle
                        </span>
                        <span className="text-on-surface-variant">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <CallbackForm />
      </main>
      <Footer />
    </div>
  );
};
