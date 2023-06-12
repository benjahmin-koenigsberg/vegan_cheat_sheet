/** @format */

import {useState} from "react";
//import { Link } from "react-router-dom";
import logo from "../veganCheatSheet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export const SumbmitLink = () => {

  const [submission, setSubmission] = useState({
    category: '',
    name: '',
    description: '',
    link: '',
  });


  function handleChange(evt) {
    evt.preventDefault()
  const value = evt.target.value;
  setSubmission({
   ...submission, [evt.target.name]: value
  });
}

  return (
    <div>
      <header className="w-screen h-10px bg-indigo-950 text-center p-2">
        <img className="m-auto h-35" src={logo} />
        <h1 className="text-2xl rajdhani bg-white">The Vegan Cheat Sheet</h1>
      </header>
      <main>
        <div className="flex-col">
          <form className="flex-col" action="magnanimousplayer@gmail.com">
            <div className="mb-6 p-3">
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={submission.category}
                onChange={handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6 p-3">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={submission.name}
                onChange={handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6 p-3">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <input
                type="textarea"
                name="description"
                value={submission.description}
                onChange={handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6 p-3">
              <label
                for="link"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Link URL
              </label>
              <input
                type="text"
                name="link"
                value={submission.link}
                onChange={handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <a
              href={`mailto:magnanimousplayer@gmail.com?subject=Link%Submission%20for%20Vegan%20Cheat%20Sheet&body=${submission}`}
              >
              <button className="bg-gray-200 text-black font-bold p-2 rounded mb-5 cursor-pointer ml-3" >
                Submit Link
              </button>
            </a>
          </form>
        </div>
      </main>
    </div>
  );
};
