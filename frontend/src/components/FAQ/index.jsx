import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does TLF Fundraising Solutions work?",
      answer:
        "TLF helps nonprofits raise funds through engaging fundraising games such as 50/50 and Chase the Ace.",
    },
    {
      question: "How does payment processing work?",
      answer:
        "Payment processing is handled securely through our platform, ensuring safe transactions for your donors.",
    },
    {
      question: "Are there any transaction fees?",
      answer:
        "Yes, TLF charges a small transaction fee based on the volume of tickets sold.",
    },
  ];

  return (
    <section className="py-12 bg-white text-left grid grid-cols-2 gap-6 py-[96px] max-w-[1072px] mx-auto">
      <div className="flex flex-col items-start justify-start text-start py-12 gap-6">
        <h2 className="text-2xl font-semibold text-center">FAQ</h2>
        <p className="text-xl">
          The purpose of a FAQ is generally to provide information on frequent
          questions or concerns. however, the format is a useful means of
          organizing information, and text
        </p>
        <div className="flex gap-6">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
          <button className="bg-white underline text-black px-6 py-3 rounded-lg">
            Contact us
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <h3 className="font-bold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
