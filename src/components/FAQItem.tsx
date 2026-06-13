import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-surface-container-highest rounded-lg overflow-hidden transition-all duration-300">
      <button
        className="w-full text-left p-lg flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-h3 text-[20px] text-on-surface">{question}</span>
        <span
          className="material-symbols-outlined text-primary transition-transform duration-300"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          expand_more
        </span>
      </button>
      {isOpen && (
        <div className="px-lg bg-surface-container-low">
          <div className="py-md text-secondary border-t border-surface-container-highest">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};
