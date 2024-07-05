// AccordionItem.jsx
import React from "react";

const AccordionItem = ({ id, isOpen, toggleItem, title, children }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button flex items-center justify-between w-full p-5 font-medium text-black border border-b-0 bg-white focus:ring-0 duration-300 hover:bg-sky-100"
          onClick={toggleItem}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          <svg className={`w-3 h-3 shrink-0 rotate-180 text-sky-600 transform ${isOpen ? "rotate-[360deg]" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      {isOpen && <div className="accordion-collapse border-x bg-white p-5">{children}</div>}
    </div>
  );
};

export default AccordionItem;
