import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

function ProgramsOverview() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        coursesData.sort((a: any, b: any) => {
          const orderA = a.order !== undefined ? a.order : 999;
          const orderB = b.order !== undefined ? b.order : 999;
          return orderA - orderB;
        });

        // Map colors for top 3 programs to maintain original design
        const colors = ["bg-primary-container", "bg-primary", "bg-secondary"];
        const topPrograms = coursesData.slice(0, 3).map((course, index) => ({
          ...course,
          barClass: colors[index % colors.length]
        }));

        setPrograms(topPrograms);
      } catch (error) {
        console.error("Error fetching programs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
          <div className="space-y-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
              Tailored Paths to Success
            </h2>
            <p className="text-secondary">
              Find the perfect program to accelerate your academic career.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8 text-secondary">Loading programs...</div>
        ) : programs.length === 0 ? (
          <div className="text-center py-8 text-secondary">No programs found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-surface rounded-xl overflow-hidden shadow-sm border border-surface-variant flex flex-col h-full hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 ${program.barClass}`} />

                <div className="p-lg flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-on-surface mb-md">
                    {program.title}
                  </h3>

                  <p className="text-secondary mb-lg flex-grow leading-relaxed">
                    {program.description}
                  </p>

                  <Link
                    to={`/courses/${program.id}`}
                    className="inline-flex items-center text-primary-container font-bold hover:underline gap-xs mt-auto"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProgramsOverview;