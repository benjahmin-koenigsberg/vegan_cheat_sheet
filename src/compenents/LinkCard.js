import React from 'react'

export const LinkCard = ({topic}) => {
  return (
    <>
      <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
        <h3 className="p-1">{topic.name}</h3>
        <p className="">{topic?.description}</p>
        <p className="">{topic?.category}</p>
        {topic.link ? (
          <a href={topic?.link} >
            <button className="bg-gray-200 text-black font-bold px-2 rounded m-1">
              Link
            </button>
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
