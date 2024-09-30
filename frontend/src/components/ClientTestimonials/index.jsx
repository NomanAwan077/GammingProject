import React from "react";

const ClientTestimonials = () => {
  return (
    <section className="py-12 bg-white text-center gap-6 flex flex-col">
      <h2 className="text-2xl font-semibold">
        What our clients think about TLF services
      </h2>
      <div className="flex flex-col gap-4">
        <blockquote className="italic">
          "I use TLF to help me succeed" – Felix Lee, ADPList
        </blockquote>
        <div>
          <p className="font-bold text-lg">
            91% of customers recommend TLF Services
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
