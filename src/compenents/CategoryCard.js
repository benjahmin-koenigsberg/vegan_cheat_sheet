import React from "react";
//import {Link} from 'react-router-dom'

function CategoryCard({ topic }) {
  console.log(topic.link)
  return (
    <>
      <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
        <h3 className="p-1">{topic.name}</h3>
        <p className="">{topic?.description}</p>
        <p className="">{topic?.category}</p>

      </div>
    </>
  );
}

export default CategoryCard;
