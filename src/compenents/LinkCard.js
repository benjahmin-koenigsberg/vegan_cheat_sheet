import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
//import { v4 as uuidv4 } from "uuid";
import click from "../game-click.wav";


export const LinkCard = ({ topic }) => {

const audio = new Audio(click);

const [isFavorite, setIsFavorite] = useState(false)
const [ readMore, setReadMore ] = useState(false)

const addToFavorites = () => {

if(!topic.description) topic.description = '  ';

const favObj = {
  name: topic.name,
  link: topic.link,
  type: topic.type,
  category: topic.category,
  description: topic.description,
};

localStorage.setItem(topic.name, JSON.stringify(favObj))

if (!isFavorite) {
setIsFavorite(true);
audio.play();
}
else {
  return
// setIsFavorite(false)
}
}

  return (
    <>
      <div className="w-50 h-auto border p-1 m-2 shadow-lg cursor-pointer text-center">
        <h3 className="p-1">{topic.name}</h3>
        <p className="">
          {topic.description.length < 100 ? (
            <p>{topic.description}</p>
          ) : (
            <div>
              <p id="description" className='px-4'>{topic.description.slice(0, 100)}</p>
              <button
                className="text-indigo-950 cursor-pointer rajdhani"
                onClick={() => {
                  if (!readMore) {
                    setReadMore(true);
                    document.getElementById("description").innerHTML =
                      topic?.description;
                  } else {
                    setReadMore(false);
                    document.getElementById("description").innerHTML =
                      topic?.description.slice(0, 100) + '...';
                  }
                }}>
                {!readMore ? "...read more" : "read less"}
              </button>
            </div>
          )}
        </p>
        <p className="">{topic?.category}</p>
        <p className="">
          {topic.autor ? "By" : ""} {topic?.author}
        </p>

        {topic.link ? (
          <div className="flex justify-between px-2 pb-2">
            <a href={topic?.link} target="_blank">
              <button className="bg-gray-200 text-black font-bold px-8 rounded m-1">
                <FontAwesomeIcon icon={faLink} />
              </button>
            </a>
            <div>
              <button
                className="bg-gray-200 text-black font-bold px-2 rounded m-1"
                onClick={addToFavorites}>
                {!isFavorite ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} className="text-red-500" />
                )}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
