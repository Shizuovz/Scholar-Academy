import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const AdminInitiatives: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // States for text areas (storing arrays as newline-separated strings for easy editing)
  const [facultyAreas, setFacultyAreas] = useState('');
  const [assessmentBenefits, setAssessmentBenefits] = useState('');
  

  const fetchInitiatives = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "pages", "initiatives");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        
        const defaultFacultyAreas = 'Effective Utilization of Science Laboratories\nMathematics Laboratory Activities and Demonstrations\nActivity-Based and Experiential Learning Approaches\nPractical Teaching Methodologies';
        const defaultAssessmentBenefits = 'Helps students understand their unique strengths and abilities\nIdentifies suitable academic and career pathways\nImproves self-awareness and confidence';

        setFacultyAreas((data.facultyAreas && data.facultyAreas.length > 0) ? data.facultyAreas.join('\n') : defaultFacultyAreas);
        setAssessmentBenefits((data.assessmentBenefits && data.assessmentBenefits.length > 0) ? data.assessmentBenefits.join('\n') : defaultAssessmentBenefits);
      } else {
        // Provide some default dummy values if the document doesn't exist yet
        setFacultyAreas('Effective Utilization of Science Laboratories\nMathematics Laboratory Activities');
        setAssessmentBenefits('Helps students understand their unique strengths\nImproves self-awareness');
      }
    } catch (err) {
      console.error("Error fetching initiatives:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitiatives();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const stringToArray = (str: string) => str.split('\n').map(s => s.trim()).filter(s => s !== '');
      
      const updatedData = {
        facultyAreas: stringToArray(facultyAreas),
        assessmentBenefits: stringToArray(assessmentBenefits)
      };

      await setDoc(doc(db, "pages", "initiatives"), updatedData);
      alert("Initiatives data saved successfully!");
    } catch (err) {
      console.error("Error saving initiatives:", err);
      alert("Failed to save. Check console for errors.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-secondary">Loading initiatives data...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-on-surface">Manage Initiatives Page</h2>
      </div>

      <div className="bg-surface rounded-xl border border-surface-variant shadow-sm overflow-hidden p-6 max-w-4xl">
        <form onSubmit={handleSave} className="space-y-8">
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Faculty Development Program</h3>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Key Areas Covered (One per line)</label>
              <textarea 
                value={facultyAreas} 
                onChange={e => setFacultyAreas(e.target.value)} 
                rows={5} 
                className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" 
              />
            </div>
          </div>

          <div className="border-t border-surface-variant pt-6 space-y-4">
            <h3 className="text-lg font-semibold text-primary">Psychometric Assessment</h3>
            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Benefits of the Program (One per line)</label>
              <textarea 
                value={assessmentBenefits} 
                onChange={e => setAssessmentBenefits(e.target.value)} 
                rows={5} 
                className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" 
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-surface-variant">
            <button 
              type="submit" 
              disabled={saving}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
