import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Settings, Save } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const [heroTag, setHeroTag] = useState('');
  const [heroTitle, setHeroTitle] = useState('');
  const [heroTitleHighlight, setHeroTitleHighlight] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'media');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setHeroTag(data.heroTag || 'Admissions Open');
          setHeroTitle(data.heroTitle || 'Nagaland\'s Premier Institute for ');
          setHeroTitleHighlight(data.heroTitleHighlight || 'IIT-JEE & NEET');
          setHeroDescription(data.heroDescription || 'Established in 2022 in the heart of Dimapur, we provide a rigorous academic environment and personalized mentorship to shape the future of medical and engineering aspirants.');
        } else {
          setHeroTag('Admissions Open');
          setHeroTitle('Nagaland\'s Premier Institute for ');
          setHeroTitleHighlight('IIT-JEE & NEET');
          setHeroDescription('Established in 2022 in the heart of Dimapur, we provide a rigorous academic environment and personalized mentorship to shape the future of medical and engineering aspirants.');
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const docRef = doc(db, 'settings', 'media');
      await setDoc(docRef, { 
        heroTag,
        heroTitle,
        heroTitleHighlight,
        heroDescription
      }, { merge: true });
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-secondary">Loading settings...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-on-surface">Site Settings</h2>
      </div>

      <div className="bg-surface rounded-xl border border-surface-variant shadow-sm p-6 max-w-3xl">
        <div className="flex items-center gap-2 mb-6 border-b border-surface-variant pb-4">
          <Settings size={24} className="text-primary" />
          <h3 className="text-xl font-semibold text-on-surface">General Text Configuration</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Home Page Hero Tag
            </label>
            <p className="text-sm text-secondary mb-3">
              This is the small text tag displayed at the top of the hero section on the Home page.
            </p>
            <input
              type="text"
              value={heroTag}
              onChange={(e) => setHeroTag(e.target.value)}
              placeholder="e.g., Admissions Open"
              className="w-full px-4 py-2 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Home Page Hero Title
            </label>
            <p className="text-sm text-secondary mb-3">
              The main heading text.
            </p>
            <input
              type="text"
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
              placeholder="e.g., Nagaland's Premier Institute for "
              className="w-full px-4 py-2 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Home Page Hero Title (Highlighted)
            </label>
            <p className="text-sm text-secondary mb-3">
              The colored portion at the end of the heading.
            </p>
            <input
              type="text"
              value={heroTitleHighlight}
              onChange={(e) => setHeroTitleHighlight(e.target.value)}
              placeholder="e.g., IIT-JEE & NEET"
              className="w-full px-4 py-2 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-on-surface mb-2">
              Home Page Hero Paragraph
            </label>
            <p className="text-sm text-secondary mb-3">
              The descriptive paragraph below the main heading.
            </p>
            <textarea
              value={heroDescription}
              onChange={(e) => setHeroDescription(e.target.value)}
              placeholder="Description text..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-surface-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={handleSave}
              disabled={saving}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium text-white transition-colors ${
                saving ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'
              }`}
            >
              <Save size={20} />
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
