import React from 'react'
import { Link } from 'react-router-dom';

export const Categories = () => {
  return (
    <div>
      <header className="w-screen h-10px bg-slate-500 text-center p-2">
        <h1 className="text-2xl rajdhani">Categories</h1>
      </header>
      <main>
        <Link to="/main">
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Main</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Studies</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Forums</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Books</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Media</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Fashion</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Podcasts</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>Shopping</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
        <Link >
          <div className="w-50 h-contain border p-1 m-2 shadow-lg cursor-pointer text-center">
            <h3>FAQ</h3>
            <p className="text-sm"></p>
          </div>
        </Link>
      </main>
    </div>
  );
}
