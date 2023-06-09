import React from "react";
import {Link} from 'react-router-dom'

function Card({ topic }) {
  console.log(topic.link)
  return (
    <>
      <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
        <a href={topic.link} target="_blank">
          <h3 className="p-1">{topic.name}</h3>
          <p className="">{topic?.description}</p>
          <p className="">{topic?.category}</p>
        </a>
      </div>
    </>
  );
}

export default Card;
