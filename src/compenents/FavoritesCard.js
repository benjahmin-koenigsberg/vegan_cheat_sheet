/** @format */
import {useState} from 'react'
import React from "react";
//import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import trash from "../trash.wav";

function FavoritesCard({ topic, setPageTopics }) {

const [readMore, setReadMore] = useState(false)



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
        window.location.reload();
      }
    };
    getStorage();
  };


  return (
    // <>
    //   <div className="w-50 h-auto border p-1 m-2 shadow-lg cursor-pointer text-center">
    //     <h3 className="p-1">{topic.name}</h3>
    //     <p className="">
    //       {topic.description && topic.description.length < 100 ? (
    //         <p>{topic.description}</p>
    //       ) : (
    //         <div>
    //           <p id="description">{ topic.description  }</p>
    //           <button
    //             className="text-red-500 cursor-pointer"
    //             onClick={() => {
    //               if (!readMore) {
    //                 setReadMore(true);
    //                 document.getElementById("description").innerHTML =
    //                   toString(topic.description).slice(0,100)
    //               } else {
    //                 setReadMore(false);
    //                 document.getElementById("description").innerHTML =
    //                   topic.description;
    //               }
    //             }}>
    //             ...read more
    //           </button>
    //         </div>
    //       )}
    //     </p>
    //     <p className="">{topic?.category}</p>
    //     <p className="">
    //       {topic.autor ? "By" : ""} {topic?.author}
    //     </p>

    //     {topic.link ? (
    //       <div className="flex justify-between px-2 pb-2">
    //         <a href={topic?.link} target="_blank">
    //           <button className="bg-gray-200 text-black font-bold px-8 rounded m-1">
    //             <FontAwesomeIcon icon={faLink} />
    //           </button>
    //         </a>
    //         <div>
    //           {/* <button
    //             className="bg-gray-200 text-black font-bold px-2 rounded m-1"
    //             onClick={addToFavorites}>
    //             {!isFavorite ? (
    //               <FontAwesomeIcon icon={faHeart} />
    //             ) : (
    //               <FontAwesomeIcon icon={faHeart} className="text-red-500" />
    //             )}
    //           </button> */}
    //           <div
    //             className="bg-gray-200 text-black font-bold px-2 rounded w-10 m-auto mt-2 mb-2"
    //             onClick={unFavorite}>
    //             <FontAwesomeIcon icon={faTrash} className="" />
    //           </div>
    //           ;
    //         </div>
    //       </div>
    //     ) : (
    //       ""
    //     )}
    //   </div>
    // </>
    <>
      <div className="w-50 h-auto border p-1 m-2 shadow-lg cursor-pointer text-center">
        <p>{topic?.type}</p>
        <h3 className="p-1">{topic?.name}</h3>

        {/* <p>{  (topic.description) ? topic.description.slice(0,200) : '' }</p> */}

        <p className="">
          {topic.description && topic.description.length < 100 ? (
            <p>{topic.description}</p>
          ) : (
            <div>
              <p id="description">
                {topic.description ? topic.description.slice(0, 100) : ""}
              </p>
              <button
                className="text-indigo-950 cursor-pointer rajdhani"
                onClick={() => {
                  if (!readMore) {
                    setReadMore(true);
                    document.getElementById("description").innerHTML =
                      topic.description;
                  } else {
                    setReadMore(false);
                    document.getElementById("description").innerHTML =
                      topic.description.slice(0, 100) + '...';
                  }
                }}>
                {!readMore ? "...read more" : "read less"}
              </button>
            </div>
          )}
        </p>

        <p>{topic?.category}</p>

        {topic.link ? (
          <div>
            <a href={topic?.link} target="_blank">
              <button className="bg-gray-200 text-black font-bold px-8 rounded m-1">
                <FontAwesomeIcon icon={faLink} />
              </button>
            </a>
            <div
              className="bg-gray-200 text-black font-bold px-2 rounded w-10 m-auto mt-2 mb-2"
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
