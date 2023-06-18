/** @format */
import {useState} from 'react'
import React from "react";
//import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import trash from "../trash.wav";

function FavoritesCard({ topic, setPageTopics, pageTopics }) {

  const [readMore, setReadMore] = useState(false);
  const abrieve = topic?.description.slice(0, 100) + '...';
  const [description, setDescription] = useState(abrieve);

  const audio = new Audio(trash);


  const unFavorite = () => {
    audio.play();
    localStorage.removeItem(topic.name);

    const getStorage = () => {
      let favArr = [];
      for (let i = 0; i <= localStorage.length; i++) {
        let favObj = localStorage.getItem(localStorage.key(i));
        if (favObj !== "INFO") favArr.push(JSON.parse(favObj));
        setPageTopics(favArr);
      document.location.reload();
      }
    };
    getStorage();

  };

  return (
    <>
      <div className="w-50 h-auto border p-1 m-2 px-3 shadow-lg cursor-pointer text-center">
        <p>{topic?.type}</p>
        <h3 className="p-1">{topic?.name}</h3>

        {topic?.description && topic?.description.length > 100 ? (
          <>
            <div>
              <p>{description}</p>
              <button
                className="text-indigo-700 cursor-pointer rajdhani"
                onClick={() => {
                  if (!readMore) {
                    setReadMore((prev) => !prev);
                    // document.getElementById("description").innerText =
                    //   topic?.description;
                    setDescription(topic?.description);
                  } else {
                    setReadMore((prev) => !prev);
                    // document.getElementById("description").innerText =
                    //   topic?.description.slice(0, 100);
                    // const abrieve = topic.description.slice(1, 100);
                    setDescription(abrieve);
                  }
                }}>
                {!readMore ? "...read more" : "read less"}
                {/* {!readMore ? (
                  <FontAwesomeIcon icon={faArrowDown} />
                ) : (
                  <FontAwesomeIcon icon={faArrowUp} />
                )} */}
              </button>
            </div>
          </>
        ) : (
          <p>{topic?.description}</p>
        )}

        <p>{topic?.category}</p>

        {topic?.link ? (
          <div className="flex justify-between px-2 pb-2">
            <a href={topic?.link} target="_blank">
              <button className="bg-gray-200 text-black font-bold px-8 rounded m-1">
                <FontAwesomeIcon icon={faLink} />
              </button>
            </a>
            <div
              className="bg-gray-200 text-black font-bold px-2 rounded w-10 mt-2 mb-2"
              onClick={unFavorite}>
              <FontAwesomeIcon icon={faTrash} className="" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FavoritesCard;
