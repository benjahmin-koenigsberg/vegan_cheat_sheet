import React from "react";
//import {Link} from 'react-router-dom'

function FavoritesCard({ topic }) {
  console.log(topic.link)
  return (
    <>
      <div className="w-50 h-auto border p-1 m-2 shadow-lg cursor-pointer text-center">
        <p>{topic?.category}</p>
        <h3 className="p-1">{topic?.name}</h3>
        <p>{topic?.type}</p>
        <p>{topic?.description}</p>

        {topic.link ? (
          <div>
            <a href={topic?.link}>
              <button className="bg-gray-200 text-black font-bold px-2 rounded m-1">
                Link
              </button>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FavoritesCard;