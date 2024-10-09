import React from "react";

const Footer = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;
  const footerLinks = data?.FieldWrapper.map((item) => {
    return {
      title: item.FieldTitle,
      links: item.ButtonText.map((item) => item.ButtonText),
    };
  });

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-8 md:mb-0">
            <img
              src={`http://localhost:1337${data?.Logo?.data?.attributes?.url}`}
              className=" text-white mb-4"
            />
          </div>
          {footerLinks.map((column, index) => (
            <div key={index} className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8 text-sm text-center">
          {data?.CopyRight.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
