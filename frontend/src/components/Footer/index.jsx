import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Fundraising Products",
      links: [
        "Progressive Online 50/50",
        "Classic Online 50/50",
        "Chase the Ace",
        "Prize Raffles",
      ],
    },
    {
      title: "Support",
      links: ["Troubleshooting", "FAQ's"],
    },
    {
      title: "Company",
      links: ["About us", "Pricing", "Contact Us"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 mt-[96px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-8 md:mb-0">
            <svg
              className="w-12 h-12 text-white mb-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h2 className="text-xl font-bold text-white">
              Fundraising Solutions
            </h2>
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
          © 2023 TLF. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
