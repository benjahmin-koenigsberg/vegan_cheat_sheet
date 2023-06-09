/** @format */

import React from "react";

function Card({ link }) {
  return (
    <>
      <a href={link.link} target="_blank" rel="noreferrer">
        <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
          <h3>{link.name}</h3>
          <p className="text-sm">{link.category}</p>
        </div>
      </a>
    </>
  );
}

export default Card;
