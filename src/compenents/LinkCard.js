import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from "uuid";


export const LinkCard = ({ topic }) => {

const [isFavorite, setIsFavorite] = useState(false)
const id = uuidv4()
const addToFavorites = () => {

const favObj = {
  name: topic.name,
  link: topic.link
}

localStorage.setItem(id, JSON.stringify(favObj))

if (!isFavorite) {
setIsFavorite(true);
} else {
setIsFavorite(false)
}
}

console.log()
  return (
    <>
      <div className="w-50 h-auto border p-1 m-2 shadow-lg cursor-pointer text-center">
        <h3 className="p-1">{topic?.name}</h3>
        <p className="">{topic?.description}</p>
        <p className="">{topic?.category}</p>
        {topic.link ? (
          <div>
            <a href={topic?.link}>
              <button className="bg-gray-200 text-black font-bold px-2 rounded m-1">
                Link
              </button>
            </a>
            <button className="bg-gray-200 text-black font-bold px-2 rounded m-1" onClick={addToFavorites} >
              <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
               {(!isFavorite) ? 'Add to Favorites' : 'Added to Favorites'}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
