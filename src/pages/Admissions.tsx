import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FAQItem } from '../components/FAQItem';
import { AdmissionsCallbackForm } from '../components/AdmissionsCallbackForm';

export const Admissions: React.FC = () => {
  const faqs = [
    {
      question: 'How do I register for the scholarship test?',
      answer:
        'Registration can be done online through our admissions portal or by visiting our Dimapur center. Students must provide their previous academic records and pay a nominal registration fee of ₹500 for the Scholar Admission Test (SAT).',
    },
    {
      question: 'What is the criteria for fee concessions?',
      answer:
        'We offer up to 100% scholarships based on performance in our SAT exam. Additionally, we provide direct concessions to toppers of state boards and students with high percentiles in previous competitive exams. Special sibling discounts are also available.',
    },
    {
      question: 'Can I join in the middle of an academic session?',
      answer:
        'Yes, we offer "Fast-Track" crash courses and mid-session bridge batches. However, availability is limited. Please contact our admissions desk for current vacancy details and tailored curriculum plans for late joiners.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-xl bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-lg items-center relative z-10">
            <div>
              <span className="inline-block bg-[#FFF2E5] text-primary px-3 py-1 rounded text-label-caps mb-md">
                ADMISSIONS 2024-25 OPEN
              </span>
              <h1 className="font-h1 text-h1-mobile md:text-h1 text-on-surface mb-md">
                Shape Your Future with Academic Excellence.
              </h1>
              <p className="font-body-lg text-secondary mb-lg">
                Join Dimapur's premier institute for IIT-JEE and NEET preparation. We don't just teach subjects; we build
                foundations for a lifetime of success.
              </p>
              <div className="flex flex-wrap gap-md">
                <a
                  className="bg-primary-container text-white px-lg py-sm font-bold rounded-lg hover:bg-[#de741d] transition-all inline-block"
                  href="#enroll-form"
                >
                  Secure Your Seat
                </a>
                <a
                  className="border-2 border-primary text-primary px-lg py-sm font-bold rounded-lg hover:bg-[#FFF2E5] transition-all inline-block"
                  href="#faqs"
                >
                  View FAQs
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-surface-container-highest">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFCbQYGjJibkSC8wMQh9WeTgnAh6mjqYvL9hYyFHnKF4yYdkfoz52oV7dy6aITC7JPJGHuMcRYVY0Kk6Uu5pEY62rEu4RuUi9IKLcAFQw7lZ4lLmlJulEZSsMQ-XHOo8sKnWqwKRhafbwTZJDR-_jSCUfLAhQDaXrHKm1spWTqsWtCN8EwagB_nEX6cKGza5446ZlZpVHy8xuNqEzX86DnFlvB4GSAeooO3EqJqo3bcSZHPl-Ds2y8o9vtTANQALxItvZhnYcSW7c"
                  alt="Scholar Academy Classroom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section className="py-xl bg-white">
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="font-h2 text-h2 text-center mb-xl">Get in Touch with Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Contact Details Card */}
              <div className="bg-white rounded-xl border border-surface-container-highest scholar-card p-lg flex flex-col justify-between">
                <div>
                  <h3 className="font-h3 text-h3 text-on-surface mb-lg">Direct Reach</h3>
                  <div className="space-y-lg">
                    <div className="flex items-start gap-md">
                      <div className="bg-primary-container/10 p-sm rounded-lg">
                        <span className="material-symbols-outlined text-primary">call</span>
                      </div>
                      <div>
                        <p className="font-label-caps text-secondary uppercase tracking-wider">Call Us</p>
                        <p className="font-body-lg font-bold">+91 3862 234567</p>
                        <p className="font-body-lg font-bold">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-md">
                      <div className="bg-primary-container/10 p-sm rounded-lg">
                        <span className="material-symbols-outlined text-primary">mail</span>
                      </div>
                      <div>
                        <p className="font-label-caps text-secondary uppercase tracking-wider">Email Us</p>
                        <p className="font-body-lg font-bold">admissions@scholar.edu</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-lg border-t border-surface-container-highest">
                  <p className="font-label-caps text-secondary mb-xs">Working Hours</p>
                  <p className="text-on-surface">Mon - Sat: 08:00 AM - 06:00 PM</p>
                </div>
                <div className="mt-lg bg-surface-dim relative grayscale hover:grayscale-0 transition-all duration-500 rounded-lg overflow-hidden h-48">
                  <div className="absolute inset-0 flex items-center justify-center bg-surface-container-highest">
                    <div className="w-full h-full bg-[#f0f0f0] flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-4xl mb-md">map</span>
                      <p className="font-label-caps text-secondary text-center px-md">Circular Road, Near Clock Tower, Dimapur, Nagaland - 797112</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callback Form Card */}
              <AdmissionsCallbackForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-xl bg-surface" id="faqs">
          <div className="max-w-3xl mx-auto px-gutter">
            <h2 className="font-h2 text-h2 text-center mb-xl">Frequently Asked Questions</h2>
            <div className="space-y-md">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-xl bg-white border-y border-surface-container-highest">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <p className="font-label-caps text-secondary mb-lg">RECOGNIZED FOR EXCELLENCE BY</p>
            <div className="flex flex-wrap justify-center items-center gap-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-h3 text-on-surface-variant font-bold">IIT COUNCIL</span>
              <span className="font-h3 text-on-surface-variant font-bold">NTA AFFILIATE</span>
              <span className="font-h3 text-on-surface-variant font-bold">EDU-CORE</span>
              <span className="font-h3 text-on-surface-variant font-bold">NAGALAND ACADEMIC BOARD</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
