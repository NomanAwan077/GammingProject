import React from "react";

const ContactForm = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <form>
        <div className="grid md:grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Paresh Srichandan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Paresh@pixeto.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
              placeholder="For web design work Enquire"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organisation Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Tkxel"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Provinces
            </label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm">
              <option>Manitoba</option>
              <option>Ontario</option>
              <option>Alberta</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm"
              placeholder="Type your Message"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center"
          >
            {data?.SubmitBtn.ButtonText}
            <img
              src={`http://localhost:1337${data?.SubmitBtn.Icon.data.attributes.url}`}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
