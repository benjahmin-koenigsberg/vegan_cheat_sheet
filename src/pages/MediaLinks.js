/** @format */

import React from "react";
//import Card from "../compenents/CategoryCard";
import { homeLinks, homeTopics } from "../home";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinksPage } from "./LinksPage";
import { LinkCard } from "../compenents/LinkCard";

export const MediaLinks = () => {
  const [pageTopics, setPageTopics] = useState(homeTopics);
  const [header, setHeader] = useState(null);

  const upDatePage = (e) => {
    const selectedTopics = homeLinks.filter(
      (topic) => topic.type === e.target.innerText
    );
    setHeader(e.target.innerText);
    setPageTopics(selectedTopics);
  };

  return (
    <div>
      <header className="w-screen h-10px bg-red-500 text-center p-2">
        <h1 className="text-2xl rajdhani">Home</h1>
      </header>
      <h1 className="text-2xl text-center p-1 bg-slate-200">{header}</h1>
      <div onClick={upDatePage}>
        {pageTopics.map((topic, index) => (
          <LinkCard key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
};
