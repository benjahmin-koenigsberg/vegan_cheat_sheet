import React from 'react'
//import Card from '../compenents/Card';
import { homeLinks, homeTopics } from "../home";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeLinks = () => {

  const [pageTopics, setPageTopics] = useState(homeTopics)

  const upDateLinks = (e) => {
console.log(e.target.innerText)
const selectedTopics = homeLinks.filter((topic)=>topic.type === e.target.innerText)
setPageTopics(selectedTopics)
  }

  return (
    <div>
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-2xl rajdhani">Main</h1>
      </header>
      {pageTopics.map((topic, index) => (
        <>
          <Link onClick={upDateLinks}>
            <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
              <h3 className="p-1">{topic.name}</h3>
              <p className="">{topic?.description}</p>
              <p className="">{topic?.category}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
}
