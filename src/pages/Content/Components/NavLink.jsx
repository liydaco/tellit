import React from 'react';
import ReactDOM from 'react-dom';
import CardGrid from './CardGrid';
import '../../../assets/styles/tailwind.css';
import FilterMenu from './filters/FilterMenu';

const NavLink = () => (
  <a
    href="https://www.tellit.ai/"
    target="_blank"
    class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm shadow-purple-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7a15.53 15.53 0 01-.311.06 15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      ></path>
    </svg>
    <h1 class="font-extrabold text-transparent text-base bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Tellit Extension
    </h1>
  </a>
);

export default NavLink;
