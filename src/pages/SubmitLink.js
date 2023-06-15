/** @format */

import {useState} from "react";
//import { Link } from "react-router-dom";
import logo from "../veganCheatSheet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";



export const SumbmitLink = () => {

  const [submission, setSubmission] = useState({
    category: "",
    name: "",
    description: "",
    link: "",
  });

  function handleChange(evt) {
    evt.preventDefault()
  const value = evt.target.value;
  setSubmission({
   ...submission, [evt.target.name]: value
  });
}

  return (
    <div className="min-h-[92vh] flex-col pb-10">
      <header className="w-screen h-10px bg-indigo-950 text-center p-2">
        <img className="m-auto h-35" src={logo} />
        <h1 className="text-2xl rajdhani bg-white">The Vegan Cheat Sheet</h1>
      </header>
      <main>
        <div className="flex-col p-5">
          <form className="flex-col" action="magnanimousplayer@gmail.com">
            <div className="mb-6 p-3">
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                required
                name="category"
                value={submission.category}
                onChange={handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected hidden>
                  Choose a category
                </option>
                <option value="activism">Activism</option>
                <option value="studies">Studies</option>
                <option value="forums">Forums</option>
                <option value="books">Books</option>
                <option value="media">Media</option>
                <option value="fashion">Fashion</option>
                <option value="podcasts">Podcasts</option>
                <option value="shopping">Shopping</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6 p-3">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                required
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
                required
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
                placeholder="https://veganlink.org"
                required
                type="url"
                name="link"
                value={submission.link}
                onChange={handleChange}
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <a
              href={`mailto:cheatsheet@veganhacktivists.org?subject=Link%20Submission%20for%20Vegan%20Cheat%20Sheet&body=${
                "CATEGORY :  " +
                submission.category +
                "  " +
                "  NAME :  " +
                submission.name +
                "  " +
                "  DESCRIPTION :   " +
                submission.description +
                "  " +
                "  URL :   " +
                submission.link
              }`}
              //   href="mailto:cheatsheet@veganhacktivists.org"
              className="bg-gray-200 text-black font-bold px-3 py-2 rounded  ml-3">
              Submit Link
              {/* <button className="bg-gray-200 text-black font-bold p-2 rounded mb-5 cursor-pointer ml-3">
                Submit Link
              </button> */}
            </a>
          </form>
        </div>
      </main>
    </div>
  );
};
