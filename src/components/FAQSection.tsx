'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the dental implant procedure like?",
      answer: "The procedure involves placing a titanium implant into the jawbone, allowing it to fuse with the bone over time. This serves as a stable foundation for a prosthetic tooth. The process includes a consultation, implant placement, a healing period, and finally, the attachment of a customized crown."
    },
    {
      question: "Am I a suitable candidate for dental implants?",
      answer: "Your overall health, bone density, and oral hygiene will be assessed to determine your candidacy for dental implants. A thorough examination will help us understand if implants are viable for you."
    },
    {
      question: "Are there any risks or complications associated with dental implants?",
      answer: "Like any surgical procedure, there are potential risks, such as infection or implant failure. However, these occurrences are rare. We will discuss these risks and take necessary precautions to minimize potential complications."
    },
    {
      question: "What is the expected recovery time, and how should I care for the implant afterward?",
      answer: "Immediate recovery times varies generally between 24-48 hrs depending on procedure. It's crucial to follow post-operative care instructions, including oral hygiene, a soft diet, and any prescribed medications to ensure a successful recovery."
    },
    {
      question: "Is the dental implant procedure painful?",
      answer: "No, the procedure is performed under local anesthesia, ensuring you won't feel pain during the surgery. Any discomfort afterward can typically be managed with prescribed pain medication."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold text-center mb-6">
        Frequently Asked Questions about Dental Implants
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-left font-bold hover:bg-gray-50 flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openFAQ === index && (
              <div className="p-4 border-t bg-gray-50">
                <p className="text-gray-700 italic">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 