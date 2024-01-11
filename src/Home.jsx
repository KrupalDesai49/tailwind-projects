import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bottom-0 top-0 flex flex-wrap justify-center bg-slate-200 ">
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/mini1"
        >
          Mini 1
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/mini2"
        >
          Mini 2
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/mini3"
        >
          Mini 3
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/mini4"
        >
          Mini 4
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/mini5"
        >
          Mini 5
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/pr1"
        >
          Project 1
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/pr2"
        >
          Project 2
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/pr3"
        >
          Project 3
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/pr4"
        >
          Project 4
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/pr5"
        >
          Project 5
        </Link>
        <Link
          className="m-6 w-64 transition-all hover:-translate-y-0.5 rounded-xl bg-white p-20 text-center text-2xl font-semibold text-stone-900 duration-500 hover:scale-105 hover:font-semibold hover:text-purple-800 hover:shadow-lg"
          to="/pr6"
        >
          Project 6
        </Link>
      </div>
    </div>
  );
};

export default Home;
