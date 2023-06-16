import React from "react";
import { faqTopics } from "../data/faq";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinksPage } from "./LinksPage";
import { LinkCard } from "../compenents/LinkCard";

export const FaqLinks = () => {
  const [pageTopics, setPageTopics] = useState(faqTopics);
  const [header, setHeader] = useState(null);

  const upDatePage = (e) => {
    if (!header) {
      // const selectedTopics = shoppingLinks.filter(
      //   (topic) => topic.type === e.target.innerText
      // );
     // setHeader(e.target.innerText);
      setPageTopics(faqTopics);
    } else {
      return;
    }
  };

  const refreshTopics = () => {
    setPageTopics(faqTopics);
    setHeader("");
  };

  return (
    <div className="min-h-[92vh] flex-col ">
      <header className="w-screen h-10px bg-yellow-500 text-center p-2">
        <h1 className="text-2xl rajdhani">FAQ</h1>

        {header ? (
          <button
            onClick={refreshTopics}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
            Back
          </button>
        ) : (
          <Link to="/search">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">
              Back
            </button>
          </Link>
        )}
      </header>
      <div className="flex-col text-2xl text-center p-1 bg-slate-200">
        <h1 className="">{header}</h1>
      </div>

      <div className="w-50 h-contain border p-2 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">
            🍓 I have a link I'd like to share / contribute! How do I tell you
            about it?"
          </h3>
          <p className="text-md">
            Email us at hello@veganhacktivists.org with your link and we'll take
            a look!
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-2 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">
            🍍 I found a broken or inappropriate link! How do I report it to you?
          </h3>
          <p className="text-md">
            Email us at hello@veganhacktivists.org with your link and we'll take
            a look!
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-3 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">
            🍌 Will you add my link / why was my link rejected?
          </h3>
          <p className="text-md">
            We have very strict guidelines on what we add to the list.
          </p>
          <p>Some of the things we look at are:</p>
          <ul className="flex-col m-1 ">
            <li>Is it updated often or maintained well?</li>
            <li>How useful is the resource?</li>
            <li>
              {" "}
              Do we have similar resources already / does it add anything more
              than those resources?
            </li>
            <li>
              Is it well designed and easy to browse? is it littered with ads
              and affiliate links?
            </li>
            <li>
              Is it worth adding to the list that we're trying to keep somewhat
              reasonable sized?
            </li>
          </ul>
          <p>
            In most cases we reject new links that don't meet those standards -
            sorry!"
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-2 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">
            🥝 I submitted a link! How long does it take until it goes live?
          </h3>
          <p className="text-md">
            We'll typically decide on a link within 48 hours. If it's been
            longer it's likley been rejected!
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-2 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">
            🥔 Do you email us back when a link is approved or rejected?
          </h3>
          <p className="text-md">
            Because we reject so many links and get so many submissions, we
            don't email on rejections.\nWe do however email you back if a link
            has been accepted as part of the adding process!
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-2 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">
            🥦 Can I request or become a contributor to this sheet?
          </h3>
          <p className="text-md">
            Right now we have 5 dedicated contributors so we're unable to accept
            any more, sorry!
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-2 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">
            🍑 Who's maintaining the list of links on this sheet?
          </h3>
          <p className="text-md">
            The folks maintaining this sheet are from
            <a href="https://VeganHacktivists.org">
              https://VeganHacktivists.org
            </a>
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-2 m-2 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg">🐙 Notes</h3>
          <p className="text-md">
            'We\'ll be updating "Environmental Statistics of Animal Agriculture"
            with direct sources soon!',
          </p>
        </div>
      </div>

      <div className="w-50 h-contain border p-2 m-2 mt-10 shadow-lg text-center py-3 flex justify-center">
        <div className="flex justify-start flex-col">
          <h3 className="justify-center m-auto text-lg"></h3>
          <p className="text-md"></p>
        </div>
      </div>
      {/* <div onClick={upDatePage}>
        {pageTopics.map((topic, index) => (
          <LinkCard key={index} topic={topic} />
        ))}
      </div> */}
    </div>
  );
};
