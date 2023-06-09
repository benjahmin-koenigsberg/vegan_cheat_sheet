import React from 'react'

const NavBar = () => {
  return (
    <div className="w-screen h-15px bg-slate-300 p-3 position:fixed z-100">
      <ul className="flex justify-around">
        <li className="cursor-pointer">vh</li>
        <li className="cursor-pointer">categoires</li>
        <li className="cursor-pointer">donate</li>
      </ul>
    </div>
  );
}

export default NavBar
