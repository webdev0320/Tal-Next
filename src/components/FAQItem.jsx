import React from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="accordion-item border-0 mb-3 bg-white shadow-sm rounded-4">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen ? 'collapsed' : ''} bg-transparent text-brand-dark fw-bold px-4 py-3`}
          type="button"
          onClick={onClick}
          style={{ boxShadow: 'none' }}
        >
          {question}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
        <div className="accordion-body px-4 pb-4 pt-0 text-secondary" style={{ lineHeight: 1.8 }}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
