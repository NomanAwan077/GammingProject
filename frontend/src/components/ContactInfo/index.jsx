import React from "react";

const ContactInfo = ({ data }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      {data?.map((item, idx) => (
        <div key={idx}>
          <h3 className="text-gray-600 font-semibold mt-6 mb-1">
            {item?.FieldTitle}
          </h3>
          <p className="text-gray-700">{item?.FieldDetail}</p>
          {item?.SubTitle && <p className="text-gray-400">{item?.SubTitle}</p>}
        </div>
      ))}

      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
