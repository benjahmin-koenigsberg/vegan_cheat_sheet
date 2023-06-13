import React from "react";
import { Link } from "react-router-dom";
import logo from "../veganCheatSheet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import IgLogo from "../instagram.svg";

export const Donate = () => {
  return (
    <div className="min-h-[92vh] flex-col">
      <header className="w-screen h-10px bg-indigo-950 text-center p-2">
        <img className="m-auto h-35" src={logo} />
        <h1 className="text-2xl rajdhani bg-white">The Vegan Cheat Sheet</h1>
      </header>
      <main>
        <div className="flex-col justify-center text-center p-4 w-85">
          <h1 className="text-3xl">
            Please support this project and our others to help save animals! 🐓
            💕
          </h1>
          <br />
          <a href="https://veganhacktivists.org/support">
            <button className="bg-gray-200 text-black font-bold px-2 rounded m-1">
              Donate Now!
            </button>
          </a>
          <br />
          <br />
          <h2 className="">
            We’re a group of passionate Vegan Activists that volunteer our time
            and skills towards vegan projects worth supporting. Every project we
            build or volunteer for aims to help spread compassion through
            Veganism by supporting both vegans, non-vegans and activists in some
            shape, way, or form.
          </h2>
          <br />

          <h2>
            🐤 Every project we release is 100% free to use for everyone, we
            don’t do premium versions, microtransactions, sell user data, or do
            advertisments whatsoever. 🐟
          </h2>
          <br />

          <h2>
            We do this for the animals, we do this because coding is our way of
            doing our part for activism. If you want to support us, please
            consider a small donation via our Patreon, it means the world to us
            and the animals to have your support. 🐮
          </h2>
          <br />
          <a href="https://veganhacktivists.org/support">
            <button className="bg-gray-200 text-black font-bold px-2 rounded m-1">
              Donate Now!
            </button>
          </a>
        </div>
      </main>
    </div>
  );
};
