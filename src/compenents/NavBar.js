import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="w-screen  bg-slate-300 p-3 sticky top-[100vh] z-100">
      <ul className="flex justify-around">
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/categories">
          <li className="cursor-pointer">categoires</li>
        </Link>
        <a href="https://veganhacktivists.org/support" target="_blank">
          <li className="cursor-pointer">donate</li>
        </a>
      </ul>
    </div>
  );
}

export default NavBar
