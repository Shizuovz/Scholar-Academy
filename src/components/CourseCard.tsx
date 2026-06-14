import React from 'react';

interface CourseCardProps {
  title: string;
  badge: string;
  image: string;
  duration: string;
  eligibility?: string;
  description?: string;
  features: string[];
  onDetailsClick?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  badge,
  image,
  duration,
  eligibility,
  description,
  features,
  onDetailsClick,
}) => {
  return (
    <div className="program-card bg-surface-container-lowest rounded-xl border border-surface-container-highest overflow-hidden flex flex-col h-full">
      <div className="h-48 relative">
        <img
          alt={title}
          className="w-full h-full object-cover"
          src={image}
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary-container text-on-primary text-caption font-bold rounded shadow-sm">
          {badge}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-h3 text-h3 text-on-surface mb-4">{title}</h3>
        {description && <p className="text-body-md text-secondary mb-4">{description}</p>}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">schedule</span>
            <span className="text-secondary">{duration}</span>
          </div>
          {eligibility && (
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">school</span>
              <span className="text-secondary">{eligibility}</span>
            </div>
          )}
        </div>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary-container text-[20px]">
                check_circle
              </span>
              <span className="text-body-md text-on-surface-variant">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={onDetailsClick}
          className="w-full py-3 border-2 border-primary-container text-primary-container font-bold rounded hover:bg-primary-container hover:text-on-primary transition-all"
        >
          Program Details
        </button>
      </div>
    </div>
  );
};
