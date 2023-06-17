import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../veganCheatSheet.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faList } from "@fortawesome/free-solid-svg-icons";
import IgLogo from '../instagram.svg'

export const Landing = () => {
  return (
    <div className="min-h-[92vh] flex-col pb-10">
      <header className="w-screen h-10px bg-indigo-950 text-center p-2">
        <img className="m-auto h-35" src={logo} />
        <h1 className="text-3xl rajdhani bg-white">The Vegan Cheat Sheet</h1>
      </header>
      <main>
        <Link to="/search">
          <div className="w-50 h-contain border m-2 shadow-lg cursor-pointer text-center p-3  border-black border-dashed ">
            <h3 className="text-4xl ">
              <FontAwesomeIcon icon={faList} className="h-5 mb-1.5 mr-2" />
              Categoires
            </h3>
            <h2 className="text-2xl font-bold categories">
              <FontAwesomeIcon icon={faLink} className="mr-1" />
              440 links for vegan studies, movies, books, & more!
            </h2>
          </div>
        </Link>
        <a href="https://www.veganhacktivists.org" target="_blank">
          <div className="w-50 h-contain border m-2 shadow-lg cursor-pointer text-center p-3">
            <h3 className="text-4xl">Vegan hacktivists</h3>
            <p className="text-lg">
              🦆 This sheet is maintained by VeganHacktivists.org
            </p>
          </div>
        </a>
        <Link to="/donate">
          <div className="w-50 h-contain border m-2 shadow-lg cursor-pointer text-center p-3">
            <h3 className="text-4xl">Donate</h3>
            <p className="text-lg">
              Please support our projects for saving animals and supporting new
              vegans!
            </p>
          </div>
        </Link>
        <a href="https://veganhacktivists.org/grants" target="_blank">
          <div className="w-50 h-contain border m-2 shadow-lg cursor-pointer text-center p-3">
            <h3 className="text-4xl">Get Funding for your Activism!</h3>
            <p className="text-lg">
              Up to $1000 USD in grants for animal rights activism! 🌱🐤💕
            </p>
          </div>
        </a>
        <Link to="/submit">
          <div className="w-50 h-contain border m-2 shadow-lg cursor-pointer text-center p-3 flex justify-center">
            <FontAwesomeIcon
              icon={faLink}
              className="my-auto mr-1 text-xl"></FontAwesomeIcon>
            <h3 className="text-4xl">Submit a link</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link
          to="https://www.instagram.com/veganhacktivists/?hl=en"
          target="_blank">
          <div className="w-50 h-contain border m-2 shadow-lg cursor-pointer text-center p-4 flex justify-center">
            <img src={IgLogo} className="w-6 h-6 my-auto mr-1" />
            <h3 className="text-4xl">Follow on IG</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
      </main>
      <div className="mt-5"></div>
    </div>
  );
}
