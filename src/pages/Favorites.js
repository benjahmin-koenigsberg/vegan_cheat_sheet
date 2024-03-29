/** @format */

import React from "react";
import { homeLinks, homeTopics } from "../data/home";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LinksPage } from "./LinksPage";
import { LinkCard } from "../compenents/LinkCard";
import { faV } from "@fortawesome/free-solid-svg-icons";
import FavoritesCard from "../compenents/FavoritesCard";

export const Favorites = () => {
  const [pageTopics, setPageTopics] = useState([]);
  const [header, setHeader] = useState(null);

useEffect(()=>{
  const getStorage = () => {
    let favArr = [];
    for (let i = 0; i < localStorage.length; i++) {
      let favObj = localStorage.getItem(localStorage.key(i));
      if (favObj !== 'INFO')
      favArr.push(JSON.parse(favObj));
      setPageTopics(favArr);
    }
  };

  getStorage();


}, [])


  const upDatePage = (e) => {
    const selectedTopics = homeLinks.filter(
      (topic) => topic.type === e.target.innerText
    );
    //setHeader(e.target.innerText);
    setPageTopics(selectedTopics);
  };

  const refreshTopics = () => {
    setPageTopics(homeTopics);
    setHeader("");
  };

  const clearFavs = () => {
    localStorage.clear()
    setPageTopics([])
  };

  return (
    <div className="min-h-[92vh] flex-col pb-10">
      <header className="w-screen h-10px bg-red-500 text-center p-2">
        <h1 className="text-2xl rajdhani">FAVORITES</h1>
        <div className=" flex flex-col justify-center">
          {header ? (
            <button
              onClick={refreshTopics}
              className="bg-blue-500 mb-2 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
              Back
            </button>
          ) : (
            <Link to="/search">
              <button className="bg-blue-500 mb-2 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
                Back
              </button>
            </Link>
          )}
          <button
            onClick={clearFavs}
            className="bg-slate-500 w-32 m-auto hover:bg-blue-700 text-white text-sm font-bold py-1  rounded-full">
            Clear All
          </button>
        </div>
      </header>

      <div className="flex-col text-2xl text-center p-1 bg-slate-200">
        <h1 className="">{header}</h1>
      </div>

      {pageTopics.length === 0 ? (
        <h1 className="text-3xl rajdhani text-center">No Favorites</h1>
      ) : (
        <div
        //onClick={upDatePage}
        >
          {pageTopics.map((topic, index) => (
            <FavoritesCard
              key={index}
              topic={topic}
              setPageTopics={setPageTopics}
              pageTopics={pageTopics}
            />
          ))}
        </div>
      )}

      {/* <button
        onClick={clearFavs}
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full justify-center m-auto w-fit mb-2">
        Clear Favorites
      </button> */}
      <div className="mt-10"></div>
    </div>
  );
};
