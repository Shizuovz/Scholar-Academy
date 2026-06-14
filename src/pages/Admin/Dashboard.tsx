import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { Plus, Edit2, Trash2, X, ArrowUp, ArrowDown } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<any>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [badge, setBadge] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      coursesData.sort((a: any, b: any) => {
        const orderA = a.order !== undefined ? a.order : 999;
        const orderB = b.order !== undefined ? b.order : 999;
        return orderA - orderB;
      });
      
      setCourses(coursesData);
    } catch (err) {
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const openAddForm = () => {
    setEditingCourse(null);
    setTitle('');
    setBadge('');
    setDuration('');
    setDescription('');
    setFeatures('');
    setImageFile(null);
    setIsFormOpen(true);
  };

  const openEditForm = (course: any) => {
    setEditingCourse(course);
    setTitle(course.title || '');
    setBadge(course.badge || '');
    setDuration(course.duration || '');
    setDescription(course.description || '');
    setFeatures(Array.isArray(course.features) ? course.features.join('\n') : (course.features || ''));
    setImageFile(null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    let uploadedImageUrl = editingCourse?.imageUrl || '';

    try {
      if (imageFile) {
        const storageRef = ref(storage, `courses/${Date.now()}_${imageFile.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, imageFile);
        uploadedImageUrl = await getDownloadURL(uploadTask.ref);
      }

      const courseData = {
        title,
        badge,
        duration,
        description,
        features: features.split('\n').filter(f => f.trim() !== ''),
        ...(uploadedImageUrl ? { imageUrl: uploadedImageUrl } : {}),
        order: editingCourse && editingCourse.order !== undefined ? editingCourse.order : courses.length
      };

      if (editingCourse) {
        await updateDoc(doc(db, "courses", editingCourse.id), courseData);
      } else {
        await addDoc(collection(db, "courses"), courseData);
      }
      closeForm();
      fetchCourses();
    } catch (err) {
      console.error("Error saving course:", err);
      alert("Failed to save course. Check console for details.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleMove = async (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === courses.length - 1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const updatedCourses = [...courses];
    
    const temp = updatedCourses[index];
    updatedCourses[index] = updatedCourses[newIndex];
    updatedCourses[newIndex] = temp;
    
    try {
      setLoading(true);
      await Promise.all(updatedCourses.map((c, idx) => 
        updateDoc(doc(db, "courses", c.id), { order: idx })
      ));
      fetchCourses();
    } catch (err) {
      console.error("Error reordering courses:", err);
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await deleteDoc(doc(db, "courses", id));
        fetchCourses();
      } catch (err) {
        console.error("Error deleting course:", err);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-on-surface">Manage Courses</h2>
        <button onClick={openAddForm} className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90">
          <Plus size={20} />
          Add Course
        </button>
      </div>

      <div className="bg-surface rounded-xl border border-surface-variant shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-secondary">Loading courses...</div>
        ) : courses.length === 0 ? (
          <div className="p-8 text-center text-secondary">
            No courses found. Click "Add Course" to create one.
          </div>
        ) : (
          <table className="min-w-full divide-y divide-surface-variant">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Badge</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-surface divide-y divide-surface-variant">
              {courses.map((course, index) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface">{course.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">{course.badge}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">{course.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleMove(index, 'up')} disabled={index === 0} className="text-secondary hover:text-on-surface disabled:opacity-30 mx-1">
                      <ArrowUp size={18} />
                    </button>
                    <button onClick={() => handleMove(index, 'down')} disabled={index === courses.length - 1} className="text-secondary hover:text-on-surface disabled:opacity-30 mx-1">
                      <ArrowDown size={18} />
                    </button>
                    <button onClick={() => openEditForm(course)} className="text-primary hover:text-primary/80 mx-1">
                      <Edit2 size={18} />
                    </button>
                    <button onClick={() => handleDelete(course.id)} className="text-red-600 hover:text-red-900 mx-1">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-surface rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-surface-variant">
              <h3 className="text-xl font-bold text-on-surface">{editingCourse ? 'Edit Course' : 'Add Course'}</h3>
              <button onClick={closeForm} className="text-secondary hover:text-on-surface">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Course Title</label>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">Badge (e.g. "Early Start")</label>
                  <input type="text" value={badge} onChange={e => setBadge(e.target.value)} className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">Duration</label>
                  <input type="text" value={duration} onChange={e => setDuration(e.target.value)} className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Course Image</label>
                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] || null)} className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary" />
                {editingCourse?.imageUrl && !imageFile && (
                  <p className="text-xs text-secondary mt-1">Current image will be kept if no new file is selected.</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Description</label>
                <textarea required value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-on-surface mb-1">Features (One per line)</label>
                <textarea required value={features} onChange={e => setFeatures(e.target.value)} rows={4} placeholder="Feature 1&#10;Feature 2" className="w-full px-3 py-2 border border-surface-variant rounded-md focus:ring-primary focus:border-primary"></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={closeForm} disabled={isUploading} className="px-4 py-2 border border-surface-variant rounded-md text-on-surface hover:bg-surface-container">Cancel</button>
                <button type="submit" disabled={isUploading} className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50">
                  {isUploading ? 'Saving...' : 'Save Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
