import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div className="w-screen  bg-slate-300 p-4 h-fit sticky top-auto z-100">
      <ul className="flex justify-around">
        <Link to="/">
          <div className="flex-col">
            <li>
              <FontAwesomeIcon
                icon={faHome}
                className=" text-xl"></FontAwesomeIcon>
            </li>
          </div>
        </Link>
        <Link to="/categories">
          <div className="flex-col">
            <li>
              <FontAwesomeIcon icon={faList} className="text-2xl"></FontAwesomeIcon>
            </li>
          </div>
        </Link>
        <a href="https://veganhacktivists.org/support" target="_blank">
          <div className="flex-col">
            <li>
              <FontAwesomeIcon
                icon={faDollar}
                className="text-2xl text-yellow-700 font-bold"></FontAwesomeIcon>
            </li>
          </div>
        </a>
        <Link to="/favorites">
          <div className="flex-col">
            <li>
              <FontAwesomeIcon icon={faHeart} className=" text-red-500 text-2xl"></FontAwesomeIcon>
            </li>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar
