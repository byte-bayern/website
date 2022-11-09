/*import React, { useState, useEffect } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const Language = ({ title }) => {
  const { languages, originalPath } = useI18next();
  const handleClick = (lng) => {
    localStorage.setItem("settings.language", lng);
  };

  return (
    <>
      <p>
        {localStorage.getItem("settings.language")
          ? localStorage.getItem("settings.language")
          : "DE"}
      </p>
      <ul className="nav-dropdown-menu">
        {languages.map((lng) => (
          <li
            onClick={() => handleClick(lng)}
            className="nav-dropdown-item"
            key={lng}
          >
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Language;
*/