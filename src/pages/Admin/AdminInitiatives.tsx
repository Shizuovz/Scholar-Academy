import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const AdminInitiatives: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // States for text areas (storing arrays as newline-separated strings for easy editing)
  const [facultyAreas, setFacultyAreas] = useState('');
  const [assessmentBenefits, setAssessmentBenefits] = useState('');
  
  // Robotics Course states
  const [whoCanEnroll, setWhoCanEnroll] = useState('');
  const [whatStudentsLearn, setWhatStudentsLearn] = useState('');
  const [handsOnLearning, setHandsOnLearning] = useState('');
  const [benefits, setBenefits] = useState('');

  const fetchInitiatives = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "pages", "initiatives");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        
        setFacultyAreas((data.facultyAreas || []).join('\n'));
        setAssessmentBenefits((data.assessmentBenefits || []).join('\n'));
        
        if (data.roboticsCourse) {
          setWhoCanEnroll((data.roboticsCourse.whoCanEnroll || []).join('\n'));
          setWhatStudentsLearn((data.roboticsCourse.whatStudentsLearn || []).join('\n'));
          setHandsOnLearning((data.roboticsCourse.handsOnLearning || []).join('\n'));
          setBenefits((data.roboticsCourse.benefits || []).join('\n'));
        }
      } else {
        // Provide some default dummy values if the document doesn't exist yet
        setFacultyAreas('Effective Utilization of Science Laboratories\nMathematics Laboratory Activities');
        setAssessmentBenefits('Helps students understand their unique strengths\nImproves self-awareness');
        setWhoCanEnroll('Students from Class VI to Class X\nUndergraduate students');
        setWhatStudentsLearn('Fundamentals of Robotics\nCoding and Programming');
        setHandsOnLearning('Robotics laboratory sessions\nAI-based activities');
        setBenefits('Develop technical skills\nStrengthen creativity');
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
        assessmentBenefits: stringToArray(assessmentBenefits),
        roboticsCourse: {
          whoCanEnroll: stringToArray(whoCanEnroll),
          whatStudentsLearn: stringToArray(whatStudentsLearn),
          handsOnLearning: stringToArray(handsOnLearning),
          benefits: stringToArray(benefits),
        }
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

          <div className="border-t border-surface-variant pt-6 space-y-4">
            <h3 className="text-lg font-semibold text-primary">Robotics & AI Course</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Who Can Enroll (One per line)</label>
                <textarea 
                  value={whoCanEnroll} 
                  onChange={e => setWhoCanEnroll(e.target.value)} 
                  rows={4} 
                  className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">What Students Learn (One per line)</label>
                <textarea 
                  value={whatStudentsLearn} 
                  onChange={e => setWhatStudentsLearn(e.target.value)} 
                  rows={4} 
                  className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Hands-On Learning (One per line)</label>
                <textarea 
                  value={handsOnLearning} 
                  onChange={e => setHandsOnLearning(e.target.value)} 
                  rows={4} 
                  className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Benefits (One per line)</label>
                <textarea 
                  value={benefits} 
                  onChange={e => setBenefits(e.target.value)} 
                  rows={4} 
                  className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" 
                />
              </div>
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
