import React from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export const Categories = () => {
  return (
    <div>
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-3xl rajdhani">CATEGORIES</h1>
      </header>
      <main>
        <Link to="/home">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-red-700 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">HOME</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/studies">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-green-500 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">STUDIES</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/forums">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-orange-400 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">FORUMS</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/books">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-blue-500 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">BOOKS</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/media">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-purple-400 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">MEDIA</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/fashion">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-zinc-300 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">FASHION</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/podcasts">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-amber-900 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">PODCASTS</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/shopping">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-slate-700 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">SHOPPING</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <Link to="/faq">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <div className="h-5 w-5 rounded-3xl bg-yellow-300 flex m-auto mr-2 "></div>
              <h3 className="justify-center m-auto text-xl">FAQ</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </Link>
        <a href="https://veganhacktivists.org/support" target='_blank'>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center py-3 flex justify-center">
            <div className="flex justify-start">
              <FontAwesomeIcon icon={faHeart} className='m-auto mr-2 text-red-500 text-2xl'>
              </FontAwesomeIcon>
              <h3 className="justify-center m-auto text-xl">DONATE</h3>
              <p className="text-sm"></p>
            </div>
          </div>
        </a>
      </main>
    </div>
  );
}
