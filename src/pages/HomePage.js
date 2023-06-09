import React from 'react'
import Card from '../compenents/Card';
import { homeLinks } from "../home";

export const HomePage = () => {

const documentaries = homeLinks.filter(
  (links) => links.type === "documentaries"
);
console.log(documentaries)

  return (
    <div>{documentaries.map((links, index)=><Card key={index} links={links} />)}</div>
  )
}
