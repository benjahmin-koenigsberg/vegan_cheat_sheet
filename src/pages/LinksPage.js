/** @format */

import React from "react";
import { useState } from "react";
import { homeLinks } from "../data/home";
import { Link } from "react-router-dom";
import Card from "../compenents/FavoritesCard";

export const LinksPage = () => {
  const [links, setLinks] = useState(homeLinks);
  const [header, setHeader] = useState(null);

  console.log(links);
  return (
    <div>
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-2xl rajdhani">Header</h1>
      </header>

      <div>
        {links.map((link, index) => (
          <Card key={index} link={link} />
        ))}
      </div>
    </div>
  );
};
