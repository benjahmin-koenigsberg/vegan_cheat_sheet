import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
//import SearchBar from '../compenents/SearchBar'
import { homeLinks } from "../data/home";
import { faqTopics } from "../data/faq";
import {forumLinks} from '../data/forums'
import {mediaLinks } from '../data/media'
import {podcastLinks} from '../data/podcasts'
import {shoppingLinks} from '../data/shopping'
import { studyLinks } from "../data/studies";
import { fashionLinks } from "../data/fashion";
import { LinkCard } from "../compenents/LinkCard";
import { CategoryCards } from "../compenents/CategoryCards";
//import { CategoryCards } from "../compenents/CategoryCards";

export const Search = () => {

const allLinksArray = [ ...homeLinks, ...fashionLinks, ...studyLinks, ...mediaLinks, ...shoppingLinks, ...podcastLinks, ...forumLinks, ...faqTopics ]

const [ allLinks, setAllLinks] = useState([])
const [ input , setInput] = useState('')
const [ isSearching, setIsSearching ] = useState(false)

const handleInput = (e) => {
setInput(e.target.value)
}

const updateSearch = (e) => {

const filtered = allLinksArray.filter( (item) => {

if (
  // item.name.toLowerCase().includes(`${e.target.value.toLowerCase()}`) ||
  // item.category.toLowerCase().includes(`${e.target.value.toLowerCase()}`) ||
  // item.description.toLowerCase().includes(`${e.target.value.toLowerCase()}`) ||
  // item.type.toLowerCase().includes(`${e.target.value.toLowerCase()}`)

  item.name.toLowerCase().includes(`${input.toLowerCase()}`) ||
  item.category.toLowerCase().includes(`${input.toLowerCase()}`) ||
  item.description.toLowerCase().includes(`${input.toLowerCase()}`) ||
  item.type.toLowerCase().includes(`${input.toLowerCase()}`)

  ) {
    return true;
  }
});
  setAllLinks(filtered)
  setIsSearching(true)
}

  return (
    <div className="min-h-[92vh] flex-col overflow-scroll">
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-3xl rajdhani">CATEGORIES</h1>
      </header>
      <div className="m-3 ">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm  font-bold py-3 px-4 rounded-l my-auto"
            onClick={() => {
              setIsSearching(false);
            }}>
            <FontAwesomeIcon icon={faArrowLeft} className="text-lg"/>
          </button>
          <input
            onChange={handleInput}
            type="text"
            name="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <button
            onClick={updateSearch}
            className="relative z-[2] flex items-center rounded-r-xl bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light">
            <FontAwesomeIcon className="text-black text-lg" icon={faSearch} />
          </button>
        </div>
      </div>
      <main>
        {isSearching ? (
          <div>
            {allLinks.map((topic, index) => (
              <LinkCard key={index} topic={topic} />
            ))}
          </div>
        ) : (
          <>
            <CategoryCards />
          </>
        )}
      </main>
      <div className="mt-16"></div>
    </div>
  );
};
