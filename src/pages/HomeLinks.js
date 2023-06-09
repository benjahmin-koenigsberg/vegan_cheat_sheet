import React from 'react'
import Card from '../compenents/Card';
import { homeLinks, homeTopics } from "../home";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeLinks = () => {

const [pageTopics, setPageTopics] = useState(homeTopics)

const upDateLinks = (e) => {
const selectedTopics = homeLinks.filter((topic)=>topic.type === e.target.innerText)
setPageTopics(selectedTopics)
  }

  return (
    <div>
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-2xl rajdhani">Main</h1>
      </header>
      <>
        <Link onClick={upDateLinks}>
          <div>
            {pageTopics.map((topic, index) => (
              <Card key={index} topic={topic} />
            ))}
          </div>
        </Link>
      </>
    </div>
  );
}
