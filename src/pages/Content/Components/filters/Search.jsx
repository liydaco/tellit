import React from 'react';

export default function Search() {
  return (
    <form className="relative w-full col-span-2 md:col-span-1 ">
      <div className="relative mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Prompts"
          className="relative w-full  cursor-pointer pl-12 opacity-80 hover:opacity-70  rounded-md border border-gray-300 bg-white py-2  pr-10  focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm transition ease-in-out duration-200 h-12 col-span-1 text-left text-opacity-80"
        />
      </div>
    </form>
  );
}
