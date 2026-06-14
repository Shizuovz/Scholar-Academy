import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Trash2, PhoneCall, BookOpen } from 'lucide-react';

export const AdminCallbacks: React.FC = () => {
  const [callbacks, setCallbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCallbacks = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "callbacks"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCallbacks(data);
    } catch (err) {
      console.error("Error fetching callbacks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCallbacks();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      try {
        await deleteDoc(doc(db, "callbacks", id));
        fetchCallbacks();
      } catch (err) {
        console.error("Error deleting request:", err);
      }
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate();
    return date.toLocaleString();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-on-surface">Application Requests</h2>
        <button onClick={fetchCallbacks} className="text-primary hover:underline">
          Refresh List
        </button>
      </div>

      <div className="mt-4">
        {loading ? (
          <div className="p-8 text-center text-secondary bg-surface rounded-xl border border-surface-variant">Loading requests...</div>
        ) : callbacks.length === 0 ? (
          <div className="p-8 text-center text-secondary bg-surface rounded-xl border border-surface-variant">
            No application requests found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {callbacks.map((req) => (
              <div key={req.id} className="bg-surface rounded-xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 ${req.type === 'admission' ? 'bg-[#E8F5E9] text-[#2E7D32]' : 'bg-[#E3F2FD] text-[#1565C0]'}`}>
                      {req.type === 'admission' ? 'Admission' : 'General'}
                    </span>
                    <h3 className="text-xl font-bold text-on-surface">{req.fullName}</h3>
                    <p className="text-sm text-secondary mt-1">{formatDate(req.createdAt)}</p>
                  </div>
                  <button onClick={() => handleDelete(req.id)} className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors" title="Delete Request">
                    <Trash2 size={20} />
                  </button>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-4 text-sm text-on-surface bg-surface-container-lowest p-3 rounded-lg border border-surface-variant">
                    <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
                      <PhoneCall size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-secondary font-semibold uppercase tracking-wider mb-0.5">Phone</span>
                      <a href={`tel:${req.phoneNumber}`} className="font-bold hover:text-primary transition-colors text-base">{req.phoneNumber}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-on-surface bg-surface-container-lowest p-3 rounded-lg border border-surface-variant">
                    <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
                      <BookOpen size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-secondary font-semibold uppercase tracking-wider mb-0.5">Program</span>
                      <span className="font-bold text-base">{req.program || req.targetExam || 'N/A'}</span>
                    </div>
                  </div>

                  {req.message && (
                    <div className="mt-6 p-4 bg-primary-container/5 border border-primary-container/20 rounded-lg">
                      <span className="block text-xs text-primary font-bold uppercase tracking-wider mb-2">Message</span>
                      <p className="text-sm text-on-surface whitespace-pre-wrap leading-relaxed">{req.message}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
