/** @format */

import React from "react";

function Card({ links }) {
  return (
    <>
      <a href={links.link} target="_blank">
        <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
          <h3>{links.name}</h3>
          <p className="text-sm">{links.category}</p>
        </div>
      </a>
    </>
  );
}

export default Card;
