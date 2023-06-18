import React from "react";
import { forumLinks, forumTopics } from "../data/forums";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinksPage } from "./LinksPage";
import { LinkCard } from "../compenents/LinkCard";

export const ForumLinks = () => {
  const [pageTopics, setPageTopics] = useState(forumTopics);
  const [header, setHeader] = useState(null);

  const upDatePage = (e) => {
    if (!header) {
      const selectedTopics = forumLinks.filter(
        (topic) => topic.type === e.target.innerText
      );
      setHeader(e.target.innerText);
      setPageTopics(selectedTopics);
    } else {
      return;
    }
  };

  const refreshTopics = () => {
    setPageTopics(forumTopics);
    setHeader("");
  };

  return (
    <div className="min-h-[92vh] flex-col pb-10">
      <header className="w-screen h-10px bg-red-500 text-center p-2">
        <h1 className="text-2xl rajdhani">FORUMS</h1>

        {header ? (
          <button
            onClick={refreshTopics}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
            Back
          </button>
        ) : (
          <Link to="/search">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
              Back
            </button>
          </Link>
        )}
      </header>
      <div className="flex-col text-2xl text-center p-1 bg-slate-200">
        <h1 className="">{header}</h1>
      </div>
      {pageTopics.length === 0 ? (
        ""
      ) : (
        <div onClick={upDatePage}>
          {pageTopics?.map((topic, index) => (
            <LinkCard key={index} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};
