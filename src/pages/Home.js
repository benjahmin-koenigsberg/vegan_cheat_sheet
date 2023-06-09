import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-xl">The Vegan Cheat Sheet</h1>
      </header>
      <main>
        <Link to="/categories">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>categoires</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>vegan hacktivists</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>donate</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>submit a link</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link>
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>follow on IG</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
      </main>
    </div>
  );
}
