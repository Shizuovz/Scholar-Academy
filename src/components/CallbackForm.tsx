import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export const CallbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    program: 'IIT-JEE (Mains & Advanced)',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'callbacks'), {
        ...formData,
        createdAt: serverTimestamp(),
        type: 'general',
      });
      alert('Request received! We will call you back shortly.');
      setFormData({
        fullName: '',
        phoneNumber: '',
        program: 'IIT-JEE (Mains & Advanced)',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-xl bg-surface relative overflow-hidden" id="callback">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto px-gutter relative z-10">
        <div className="bg-surface-container-lowest border border-surface-container-highest rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-5">
          <div className="md:col-span-2 bg-primary-container p-8 text-on-primary flex flex-col justify-center">
            <h2 className="font-h3 text-h3 mb-4">Not sure which?</h2>
            <p className="mb-8 opacity-90">Free Academic Counselling Session. Our expert counsellors will guide you to the right course based on your goals, background, and exam timeline.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">forum</span>
                <span className="font-semibold cursor-pointer hover:underline">Chat on WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">call</span>
                <span className="font-semibold cursor-pointer hover:underline">Call Our Counsellor</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label-caps text-secondary uppercase tracking-tight">Full Name</label>
                  <input
                    className="w-full px-4 py-3 border border-surface-container-highest rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container"
                    placeholder="Student Name"
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-label-caps text-secondary uppercase tracking-tight">Phone Number</label>
                  <input
                    className="w-full px-4 py-3 border border-surface-container-highest rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container"
                    placeholder="10-digit number"
                    required
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-secondary uppercase tracking-tight">Program of Interest</label>
                <select
                  className="w-full px-4 py-3 border border-surface-container-highest rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container bg-white"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option>IIT-JEE Mains & Advanced</option>
                  <option>NEET Medical Preparation</option>
                  <option>Foundation Program</option>
                  <option>Repeaters / Droppers Batch</option>
                  <option>Crash Course</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-secondary uppercase tracking-tight">Message (Optional)</label>
                <textarea
                  className="w-full px-4 py-3 border border-surface-container-highest rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container"
                  placeholder="Tell us more about your goals"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary-container text-on-primary py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Request a Callback'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
