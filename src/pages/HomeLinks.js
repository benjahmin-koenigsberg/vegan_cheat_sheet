import React from "react";
import { homeLinks, homeTopics } from "../data/home";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinksPage } from "./LinksPage";
import { LinkCard } from "../compenents/LinkCard";

export const HomeLinks = () => {
  const [pageTopics, setPageTopics] = useState(homeTopics);
  const [header, setHeader] = useState(null);

  const upDatePage = (e) => {
    if (!header) {
      const selectedTopics = homeLinks.filter(
        (topic) => topic.type === e.target.innerText
      );
         setHeader(e.target.innerText)
         if (selectedTopics.length > 0)
        setPageTopics(selectedTopics)
    } else {
      return;
    }
  };

  const refreshTopics = () => {
    setPageTopics(homeTopics);
    setHeader("");
  };

  return (
    <div className="min-h-[92vh] flex-col pb-10">
      <header className="w-screen h-10px bg-red-500 text-center p-2">
        <h1 className="text-2xl rajdhani">Home</h1>
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
          {pageTopics.length === 0 ? <h1>Loading...</h1> :
          pageTopics?.map((topic, index) => (
            <LinkCard key={index} topic={topic} />
          )) }
          {/* {
          pageTopics?.map((topic, index) => (
            <LinkCard key={index} topic={topic} />
          ))} */}
        </div>
      )}

      <div className="mt-10"></div>
    </div>
  );
};
