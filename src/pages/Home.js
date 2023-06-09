import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../veganCheatSheet.png'

export const Home = () => {
  return (
    <div>
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <img className="m-auto" src={logo} />
        <h1 className="text-2xl rajdhani">The Vegan Cheat Sheet</h1>
      </header>
      <main>
        <Link to="/categories">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>categoires</h3>
            <p className="text-sm">
              440 links for vegan studies, movies, books, & more!
            </p>
          </div>
        </Link>
        <Link>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>vegan hacktivists</h3>
            <p className="text-sm">
              🦆 This sheet is maintained by VeganHacktivists.org
            </p>
          </div>
        </Link>
        <Link>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>donate</h3>
            <p className="text-sm">
              Please support this project and our others for saving animals and
              supporting new vegans!
            </p>
          </div>
        </Link>
        <Link>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>submit a link</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link to="https://www.instagram.com/veganhacktivists/?hl=en" target='_blank'>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>follow on IG</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
      </main>
    </div>
  );
}
