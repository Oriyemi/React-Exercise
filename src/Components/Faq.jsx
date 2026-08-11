// Accordion / FAQ — conditional rendering by index
import React, { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, especially applications where the page needs to update dynamically.",
    },
    {
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language used to add logic and interactivity to websites and web applications.",
    },
    {
      question: "What is TypeScript?",
      answer:
        "TypeScript is a superset of JavaScript that adds static typing, helping developers catch certain errors before the code runs.",
    },
  ];
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleClick = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center px-4 py-16 ">
      <div className="w-full max-w-md bg-blue-400 p-5 rounded-3xl">
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">
          FAQ'S
        </h1>

        <div className="w-full max-w-xl divide-y divide-slate-200 border-t border-b border-slate-200">
          {faqs.map((item, index) => (
            <div key={index} className="py-4">
              <h2
                onClick={() => {
                  handleClick(index);
                }}
                className="text-sm font-medium text-slate-800 cursor-pointer select-none hover:text-slate-950 transition-colors"
              >
                {item.question}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {index === openAccordion && item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
