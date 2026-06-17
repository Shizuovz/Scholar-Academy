import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import teacherTrainingImg from '../assets/images/initiatives/govt teachers training program.jpeg';
import studentCounselingImg from '../assets/images/initiatives/student_counseling.jpeg';

export const Initiatives: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({
    facultyAreas: [],
    assessmentBenefits: []
  });

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const docRef = doc(db, "pages", "initiatives");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const fetchedData = docSnap.data();
          setData({
            facultyAreas: fetchedData.facultyAreas?.length > 0 ? fetchedData.facultyAreas : [
              'Effective Utilization of Science Laboratories',
              'Mathematics Laboratory Activities and Demonstrations',
              'Activity-Based and Experiential Learning Approaches',
              'Practical Teaching Methodologies',
            ],
            assessmentBenefits: fetchedData.assessmentBenefits?.length > 0 ? fetchedData.assessmentBenefits : [
              'Helps students understand their unique strengths and abilities',
              'Identifies suitable academic and career pathways',
              'Improves self-awareness and confidence',
            ]
          });
        } else {
          // Fallback static data if not set up in CMS yet
          setData({
            facultyAreas: [
              'Effective Utilization of Science Laboratories',
              'Mathematics Laboratory Activities and Demonstrations',
              'Activity-Based and Experiential Learning Approaches',
              'Practical Teaching Methodologies',
            ],
            assessmentBenefits: [
              'Helps students understand their unique strengths and abilities',
              'Identifies suitable academic and career pathways',
              'Improves self-awareness and confidence',
            ]
          });
        }
      } catch (err) {
        console.error("Error fetching initiatives:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitiatives();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-secondary">Loading initiatives...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const { facultyAreas } = data;

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* Header Section */}
        <section className="py-xl bg-gradient-to-br from-surface to-surface-container-low border-b border-surface-variant">
          <div className="max-w-container-max mx-auto px-gutter text-center space-y-md">
            <span className="inline-block px-3 py-1 bg-primary-container/10 border border-primary-container/20 text-primary-container font-bold text-sm tracking-wider uppercase rounded">
              Outreach & Initiatives
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-on-surface">
              Empowering the Educational Ecosystem
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              Scholar Academy goes beyond classroom coaching to actively build teacher capacity and provide crucial career guidance across Nagaland.
            </p>
          </div>
        </section>

        {/* Faculty Development Program */}
        <section className="py-xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
              <div className="space-y-md">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">
                  Teacher Training
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                  Faculty Development Program on STEM Education
                </h2>
                <h3 className="text-xl text-primary-container font-semibold">
                  Strengthening Teaching Through Practical Learning
                </h3>
                <p className="text-secondary leading-relaxed">
                  Scholar Academy had the privilege of conducting a One-Day Faculty Development and Training Program for government school teachers under Samagra Shiksha, focusing on the effective utilization of Science and Mathematics Laboratories for enhanced classroom learning.
                </p>
                <p className="text-secondary leading-relaxed">
                  The training program was designed to equip educators with practical methodologies, hands-on laboratory techniques, and innovative teaching strategies that promote experiential learning among students. Through interactive demonstrations and activity-based sessions, participants gained valuable insights into transforming theoretical concepts into engaging practical experiences.
                </p>
                <p className="text-secondary leading-relaxed">
                  The workshop emphasized the importance of laboratory-based education in improving conceptual understanding, scientific temperament, analytical thinking, and problem-solving abilities among students. Teachers were provided with guidance on conducting experiments, utilizing laboratory resources effectively, and integrating practical learning into everyday classroom instruction.
                </p>
              </div>

              <div className="space-y-lg">
                <div className="rounded-xl overflow-hidden shadow-md border border-surface-variant">
                  <img src={teacherTrainingImg} alt="Teacher Training Laboratory" className="w-full h-auto object-cover aspect-video" />
                </div>

                <div className="bg-primary-container/10 border border-primary-container/20 rounded-xl p-lg shadow-sm">
                  <h4 className="text-xl font-bold text-primary-container mb-xs">Impact of the Training</h4>
                  <p className="text-secondary leading-relaxed text-sm mb-sm">
                    The program enabled participating teachers to strengthen their practical teaching skills and gain confidence in delivering laboratory-based instruction. By empowering educators with modern pedagogical approaches, the initiative contributes towards creating more interactive, engaging, and outcome-oriented learning environments in schools.
                  </p>
                  <p className="text-secondary leading-relaxed text-sm font-semibold">
                    Scholar Academy remains committed to supporting educational institutions, teachers, and students through capacity-building initiatives that promote quality education, innovation, and skill development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Psychometric Assessment Program */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-xl space-y-md max-w-4xl mx-auto">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">
                Student Guidance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
                Psychometric Assessment & Student Counseling Program
              </h2>
              <h3 className="text-xl text-primary-container font-semibold">
                Discovering Potential. Guiding Futures.
              </h3>
              <p className="text-secondary leading-relaxed">
                Scholar Academy, in association with Samagra Shiksha Dimapur, Nagaland Department of School Education, conducts comprehensive Psychometric Assessment and Student Counseling Programs across schools to help students gain a deeper understanding of their abilities, interests, personality traits, learning styles, emotional intelligence, and career potential.
              </p>
              <p className="text-secondary leading-relaxed">
                The program is designed to assist students in making informed academic and career decisions through a scientific and structured assessment process. By evaluating various cognitive, emotional, and behavioral parameters, we help students identify their strengths, areas for improvement, and future opportunities.
              </p>
              <div className="rounded-xl overflow-hidden shadow-md mt-lg mx-auto border border-surface-variant">
                <img src={studentCounselingImg} alt="Student Counseling Session" className="w-full h-auto object-cover aspect-video" />
              </div>
            </div>

            {/* Assessment Process Steps */}
            <div className="mb-xl">
              <h3 className="text-2xl font-bold text-center text-on-surface mb-lg">Our Assessment Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">

                {/* Step 1 */}
                <div className="bg-surface rounded-xl p-lg border border-surface-variant shadow-sm relative scholar-card">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold shadow-md">1</div>
                  <h4 className="text-lg font-bold text-on-surface mb-md mt-2">Psychometric Assessment</h4>
                  <p className="text-secondary text-sm mb-md">Evaluates multiple dimensions including:</p>
                  <ul className="text-secondary text-sm space-y-1">
                    <li>• IQ & EQ</li>
                    <li>• Aptitude & Learning Ability</li>
                    <li>• Personality Traits & Interests</li>
                    <li>• Career Orientation</li>
                    <li>• Decision-Making & Leadership</li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div className="bg-surface rounded-xl p-lg border border-surface-variant shadow-sm relative scholar-card">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold shadow-md">2</div>
                  <h4 className="text-lg font-bold text-on-surface mb-md mt-2">Analysis & Profile Generation</h4>
                  <p className="text-secondary text-sm mb-md">Detailed individual profile providing insights into:</p>
                  <ul className="text-secondary text-sm space-y-1">
                    <li>• Academic strengths & weaknesses</li>
                    <li>• Learning preferences</li>
                    <li>• Emotional competencies</li>
                    <li>• Career suitability</li>
                    <li>• Areas for development</li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div className="bg-surface rounded-xl p-lg border border-surface-variant shadow-sm relative scholar-card">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold shadow-md">3</div>
                  <h4 className="text-lg font-bold text-on-surface mb-md mt-2">Personalized Counseling</h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    Trained counselors visit schools for one-on-one sessions. Students receive personalized guidance based on their reports to help them make informed decisions regarding their education and future pathways.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-surface rounded-xl p-lg border border-surface-variant shadow-sm relative scholar-card">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold shadow-md">4</div>
                  <h4 className="text-lg font-bold text-on-surface mb-md mt-2">Parent & School Support</h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    Where required, guidance and recommendations are also provided to parents and educational institutions to support students in achieving their academic and personal goals.
                  </p>
                </div>

              </div>
            </div>

            {/* Benefits & Conclusion Grid */}
            <div className="max-w-4xl mx-auto bg-inverse-surface rounded-xl p-lg shadow-lg text-white mt-md">
              <h4 className="text-2xl font-bold mb-md text-primary-container text-center">Building Confident & Future-Ready Students</h4>
              <p className="text-on-inverse-surface/90 leading-relaxed mb-sm text-sm text-center">
                Every student possesses unique talents and potential. Through our Psychometric Assessment and Counseling Program, we help students discover those strengths, overcome uncertainties, and develop a clearer vision for their future.
              </p>
              <p className="text-on-inverse-surface/90 leading-relaxed text-sm text-center">
                By combining scientific assessment with personalized counseling, Scholar Academy empowers students to make confident choices, achieve their goals, and unlock their full potential.
              </p>
            </div>

          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Initiatives;
