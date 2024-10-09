import React from "react";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";

const ContactSession = ({ data, loading }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold mb-8">{data?.Heading}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 align-center justify-center">
        <ContactInfo data={data?.DetailBox} loading={loading} />
        <ContactForm data={data?.ContactForm} loading={loading} />
      </div>
    </div>
  );
};

export default ContactSession;
