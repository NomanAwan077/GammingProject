import React from "react";

const FAQ = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;
  const faqs = data?.QuestionWrapper;

  return (
    <section className="py-12 bg-white text-left grid grid-cols-2 gap-6 py-[96px] max-w-[1072px] mx-auto">
      <div className="flex flex-col items-start justify-start text-start py-12 gap-6">
        <h2 className="text-2xl font-semibold text-center">{data?.Title}</h2>
        <p className="text-xl">{data?.Description}</p>
        <div className="flex gap-6">
          {data?.BtnText?.map((button) => (
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg"
              key={button?.id}
            >
              {button?.ButtonText}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs?.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <h3 className="font-bold">{faq.Question}</h3>
            <p>{faq.Answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
