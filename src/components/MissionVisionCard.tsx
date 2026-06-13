import React from 'react';

interface MissionVisionCardProps {
  icon: string;
  title: string;
  description: string;
}

export const MissionVisionCard: React.FC<MissionVisionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-surface-container-lowest p-lg rounded-xl border border-surface-container card-shadow">
      <span className="material-symbols-outlined text-primary text-5xl mb-md" style={{ fontVariationSettings: "'FILL' 1" }}>
        {icon}
      </span>
      <h3 className="font-h3 text-h3 text-on-surface mb-sm">{title}</h3>
      <p className="font-body-md text-body-md text-secondary">{description}</p>
    </div>
  );
};
