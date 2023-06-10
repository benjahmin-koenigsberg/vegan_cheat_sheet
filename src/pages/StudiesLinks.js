import React from "react";
//import Card from "../compenents/CategoryCard";
import { homeLinks, homeTopics } from "../home";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinksPage } from "./LinksPage";
import { LinkCard } from "../compenents/LinkCard";

export const StudiesLinks = () => {
  const [pageTopics, setPageTopics] = useState(homeTopics);
  const [header, setHeader] = useState(null);

  const upDatePage = (e) => {
    const selectedTopics = homeLinks.filter(
      (topic) => topic.type === e.target.innerText
    );
    setHeader(e.target.innerText);
    setPageTopics(selectedTopics);
  };

  const refreshTopics = () => {
    setPageTopics(homeTopics);
    setHeader("");
  };

  return (
    <div>
      <header className="w-screen h-10px  bg-green-500 text-center p-2">
        <h1 className="text-2xl rajdhani">STUDIES</h1>

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