import React from 'react';

interface FacultyCardProps {
  name: string;
  expertise: string;
  image: string;
  badge: string;
}

export const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  expertise,
  image,
  badge,
}) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-md border border-surface-container shadow-sm group-hover:shadow-lg transition-all duration-300">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-sm py-xs text-xs font-bold rounded">
          {badge}
        </div>
      </div>
      <h4 className="font-h3 text-h3 text-on-surface mb-xs">{name}</h4>
      <p className="text-secondary font-label-caps text-label-caps">{expertise}</p>
    </div>
  );
};
