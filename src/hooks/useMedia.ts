import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const useMedia = () => {
  const [mediaMap, setMediaMap] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const docRef = doc(db, 'settings', 'media');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMediaMap(docSnap.data() as Record<string, string>);
        }
      } catch (error) {
        console.error('Error fetching global media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  // Helper to get media by key with a fallback
  const getMedia = (key: string, fallbackUrl: string) => {
    return mediaMap[key] || fallbackUrl;
  };

  return { mediaMap, getMedia, loading };
};
