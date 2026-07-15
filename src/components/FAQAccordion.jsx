import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-bold text-navy hover:text-brandorange hover:bg-gray-50/50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-brandorange flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-steel flex-shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed bg-gray-50/30 border-t border-gray-100 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}
