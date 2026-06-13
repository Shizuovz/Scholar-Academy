import React, { useState } from 'react';

export const AdmissionsCallbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    targetExam: 'IIT-JEE Mains & Adv',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Application submitted! Our counselor will get back to you within 24 hours.');
    setFormData({
      fullName: '',
      phoneNumber: '',
      targetExam: 'IIT-JEE Mains & Adv',
    });
  };

  return (
    <div className="bg-inverse-surface rounded-xl p-lg text-white scholar-card" id="enroll-form">
      <h3 className="font-h3 text-h3 mb-md">Request a Callback</h3>
      <p className="text-surface-container-highest mb-lg font-caption">
        Leave your details and our counselor will get back to you within 24 hours.
      </p>
      <form className="space-y-md" onSubmit={handleSubmit}>
        <div>
          <label className="block font-label-caps text-surface-container mb-xs">FULL NAME</label>
          <input
            className="w-full bg-white/10 border border-white/20 rounded-lg px-md py-sm focus:outline-none focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container text-white placeholder-white/30 transition-all"
            placeholder="e.g. John Doe"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-label-caps text-surface-container mb-xs">PHONE NUMBER</label>
          <input
            className="w-full bg-white/10 border border-white/20 rounded-lg px-md py-sm focus:outline-none focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container text-white placeholder-white/30 transition-all"
            placeholder="+91"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-label-caps text-surface-container mb-xs">TARGET EXAM</label>
          <select
            className="w-full bg-white/10 border border-white/20 rounded-lg px-md py-sm focus:outline-none focus:ring-2 focus:ring-primary-container/50 focus:border-primary-container text-white appearance-none transition-all"
            name="targetExam"
            value={formData.targetExam}
            onChange={handleChange}
          >
            <option className="bg-inverse-surface text-white">IIT-JEE Mains & Adv</option>
            <option className="bg-inverse-surface text-white">NEET-UG</option>
            <option className="bg-inverse-surface text-white">Foundation (IX-X)</option>
          </select>
        </div>
        <button
          className="w-full bg-primary-container text-white font-bold py-md rounded-lg mt-lg hover:shadow-lg hover:bg-[#de741d] transition-all transform active:scale-95"
          type="submit"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};
