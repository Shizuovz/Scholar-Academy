import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { Upload, Image as ImageIcon, Video } from 'lucide-react';

// Define the editable media slots
const MEDIA_SLOTS = [
  { key: 'home_hero_video', label: 'Home Page Hero Video', type: 'video' },
  { key: 'home_about_img', label: 'Home Page About Image', type: 'image' },
  { key: 'navbar_logo', label: 'Navbar Logo', type: 'image' },
  { key: 'footer_logo', label: 'Footer Logo', type: 'image' },
  { key: 'courses_hero_img', label: 'Courses Page Hero Image', type: 'image' },
  { key: 'about_hero_img', label: 'About Page Hero Image', type: 'image' },
  { key: 'about_campus_img', label: 'About Page Campus Image', type: 'image' },
  { key: 'about_classroom_img', label: 'About Page Classroom Image', type: 'image' },
  { key: 'about_lab_img', label: 'About Page Lab Image', type: 'image' },
  { key: 'about_library_img', label: 'About Page Library Image', type: 'image' },
  { key: 'about_reception_img', label: 'About Page Reception Image', type: 'image' },
  { key: 'admissions_hero_img', label: 'Admissions Page Hero Image', type: 'image' },
];

export const AdminMedia: React.FC = () => {
  const [mediaMap, setMediaMap] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'settings', 'media');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMediaMap(docSnap.data() as Record<string, string>);
      }
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadingKey(key);
    try {
      // Create a reference in Firebase Storage
      const storageRef = ref(storage, `media/${key}_${Date.now()}_${file.name}`);
      
      // Upload file
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress can be tracked here if needed
        },
        (error) => {
          console.error("Upload failed", error);
          alert("Failed to upload file.");
          setUploadingKey(null);
        },
        async () => {
          // Handle successful upload
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          // Update Firestore
          const newMap = { ...mediaMap, [key]: downloadURL };
          await setDoc(doc(db, 'settings', 'media'), newMap, { merge: true });
          
          setMediaMap(newMap);
          setUploadingKey(null);
          alert("Media updated successfully!");
        }
      );
    } catch (error) {
      console.error("Error in upload process:", error);
      setUploadingKey(null);
    }
  };

  if (loading) {
    return <div className="p-8 text-secondary">Loading media settings...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-on-surface">Global Media Manager</h2>
      </div>

      <div className="bg-surface rounded-xl border border-surface-variant shadow-sm p-6 max-w-5xl">
        <p className="text-secondary mb-8">
          Upload images or videos here to replace the default assets across the website. 
          If a slot is left empty, the website will automatically use the original default image.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDIA_SLOTS.map((slot) => {
            const currentUrl = mediaMap[slot.key];
            const isUploading = uploadingKey === slot.key;

            return (
              <div key={slot.key} className="border border-surface-variant rounded-lg p-4 flex flex-col bg-surface-container-lowest">
                <div className="flex items-center gap-2 mb-4">
                  {slot.type === 'video' ? <Video size={20} className="text-primary" /> : <ImageIcon size={20} className="text-primary" />}
                  <h3 className="font-semibold text-on-surface text-sm">{slot.label}</h3>
                </div>

                <div className="flex-1 bg-surface-container-low rounded-md mb-4 flex items-center justify-center overflow-hidden aspect-video border border-surface-variant">
                  {currentUrl ? (
                    slot.type === 'video' ? (
                      <video src={currentUrl} className="w-full h-full object-cover" muted playsInline />
                    ) : (
                      <img src={currentUrl} alt={slot.label} className="w-full h-full object-cover" />
                    )
                  ) : (
                    <span className="text-xs text-secondary px-4 text-center">Using default {slot.type}</span>
                  )}
                </div>

                <div className="mt-auto relative">
                  <input
                    type="file"
                    accept={slot.type === 'video' ? 'video/*' : 'image/*'}
                    onChange={(e) => handleFileUpload(e, slot.key)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isUploading}
                  />
                  <div className={`flex items-center justify-center gap-2 w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    isUploading ? 'bg-surface-variant text-secondary cursor-not-allowed' : 'bg-primary-container text-on-primary hover:bg-primary-container/90'
                  }`}>
                    <Upload size={16} />
                    {isUploading ? 'Uploading...' : 'Replace File'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
