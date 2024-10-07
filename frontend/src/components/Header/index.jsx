import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ href, label }) => (
  <Link to={href} className="btn btn-primary">
    {label}
  </Link>
);

const Header = ({ data }) => {
  function generateLinkFromString(str) {
    return str.replace(/\s+/g, "").toLowerCase();
  }
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src={`http://localhost:1337${data?.Logo?.data?.attributes?.url}`}
            alt="Logo"
          />
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        {data?.Link?.map((item, idx) => (
          <>
            {console.log(item)}
            <NavItem
              key={idx}
              href={generateLinkFromString(item?.ButtonText)}
              label={item?.ButtonText}
            />
          </>
        ))}
      </nav>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
        Get Started
      </button>
    </header>
  );
};

export default Header;
