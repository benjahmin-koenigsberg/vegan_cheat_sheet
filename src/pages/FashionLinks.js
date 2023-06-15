/** @format */

import React from "react";
import { fashionLinks, fashionTopics } from "../data/fashion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinksPage } from "./LinksPage";
import { LinkCard } from "../compenents/LinkCard";

export const FashionLinks = () => {
  const [pageTopics, setPageTopics] = useState(fashionTopics);
  const [header, setHeader] = useState(null);

  const upDatePage = (e) => {
    if (!header) {
      // const selectedTopics = fashionLinks.filter(
      //   (topic) => topic.type === e.target.innerText
      // );
      const selectedTopics = fashionLinks;
      setHeader(e.target.innerText);
      setPageTopics(selectedTopics);
    } else {
      return;
    }
  };

  console.log(fashionLinks)

  const refreshTopics = () => {
    setPageTopics(fashionTopics);
    setHeader("");
  };

  return (
    <div className="min-h-[92vh] flex-col pb-10">
      <header className="w-screen h-10px bg-zinc-500 text-center p-2">
        <h1 className="text-2xl rajdhani">FASHION</h1>

        {header ? (
          <button
            onClick={refreshTopics}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
            Back
          </button>
        ) : (
          <Link to="/categories">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
              Back
            </button>
          </Link>
        )}
      </header>
      <div className="flex-col text-2xl text-center p-1 bg-slate-200">
        <h1 className="">{header}</h1>
      </div>
      <div onClick={upDatePage}>
        {pageTopics.map((topic, index) => (
          <LinkCard key={index} topic={topic} />
        ))}
      </div>
    </div>
  );
};
