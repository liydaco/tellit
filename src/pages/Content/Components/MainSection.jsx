import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { AlgoliaSearch } from './CardGrid';
import '../../../assets/styles/tailwind.css';
import FilterMenu from './filters/FilterMenu';

export function MainSection() {
  return (
    <>
      <div className="flex w-full h-full p-4 flex-col ">
        <div className="grid grid-cols-2 w-full gap-3 mb-10">
          <button className="relative cursor-pointer w-full opacity-80 hover:opacity-100 rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10  focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm hover:text-base transition ease-in-out duration-200 h-12 col-span-1 text-center text-opacity-80 ">
            Public Prompts
          </button>
          <button className="relative w-full  cursor-pointer opacity-80 hover:opacity-100  rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10  focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm hover:text-base transition ease-in-out duration-200 h-12 col-span-1 text-center text-opacity-80 ">
            Private Prompts
          </button>
        </div>
        {/* <FilterMenu /> */}
        <AlgoliaSearch />
      </div>
    </>
  );
}

export function NewTextArea() {
  selectedPrompt
    ? console.log(selectedPrompt)
    : console.log('no prompt selected');
  return (
    <div class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient">
      <form class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6 max-auto">
        <div class="relative flex h-full flex-1 md:flex-col">
          <div class="flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
          <div class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-900 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            <div className="flex flex-row m-1 gap-3">
              <select
                id="location"
                name="location"
                className="mt-1 bg-gray-800 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Output Language"
              >
                <option>Choose Output Language</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <select
                id="location"
                name="location"
                className="mt-1 bg-gray-800 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <select
                id="location"
                name="location"
                className="mt-1 bg-gray-800 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue="Canada"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
            <textarea
              tabindex="0"
              data-id="root"
              rows="1"
              //   value={selectedPrompt?.Title}
              class="m-0 w-full resize-none border-0 bg-gray-900 p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0 max-h-96 h-7 overflow-y-hidden"
            ></textarea>
            <button class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4 mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
