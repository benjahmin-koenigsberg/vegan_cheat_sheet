import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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


export const CategoriesCopy = () => {

const allLinksArray = [ ...homeLinks, ...fashionLinks, ...studyLinks, ...mediaLinks, ...shoppingLinks, ...podcastLinks, ...forumLinks, ...faqTopics ]

//console.log(allLinksArray)

const [allLinks, setAllLinks] = useState([])

const updateSearch = (e) => {
const filtered = allLinksArray.filter((item) => {
  return (
    item.name.toLowerCase().includes(`${e.target.value.toLowerCase()}`) ||
    item.category.toLowerCase().includes(`${e.target.value.toLowerCase()}`) ||
    item.description.toLowerCase().includes(`${e.target.value.toLowerCase()}`)
  );
});
  setAllLinks(filtered)
}


  return (
    <div className="min-h-[92vh] flex-col">
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-3xl rajdhani">SEARCH</h1>
      </header>
      <div className="m-3">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
          <input
          onChange={updateSearch}
            type="text"
            name='search'
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-xl border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
          />
          <button
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
        <div >
          {allLinks.map((topic, index) => (
            <LinkCard key={index} topic={topic} />
          ))}
        </div>
      </main>
    </div>
  );
};
