import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
// import { ExtensionProvider } from '../context/ExtensionContext';
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  HeartIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';

// Scripts
import { setTextarea } from '../../Content/Scripts';

// import ExtensionContext from '../context/ExtensionContext';

import moment from 'moment';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  connectHighlight,
  Pagination,
  connectSearchBox,
  RefinementList,
} from 'react-instantsearch-dom';
import { NewTextArea } from './filters/NewTextArea';

const searchClient = algoliasearch(
  'O3NNYYF3AI',
  'f86e6c0477f4f21dfc2a3c14d4125c11'
);

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

const handleHitClick = (hit, promptHelper, setPromptHelper) => {
  // Get send message functionality from send message button
  const textAreaContainer = document.getElementsByClassName(
    'absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient'
  )[0];
  const newbox = document.createElement('div');
  newbox.setAttribute('id', 'new-textarea');
  textAreaContainer.appendChild(newbox);

  // Make old text are hidden

  ReactDOM.render(
    <NewTextArea hit={hit} promptHelper={promptHelper} />,
    document.getElementById('new-textarea')
  );
  setPromptHelper(hit.HelperPrompt);

  // const newButton = document.getElementsByClassName(
  //   'absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
  // )[0];
  // const parentElement = newButton.parentElement;

  // parentElement.replaceChild(clonedButton, newButton);
};

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <div class="relative w-full col-span-2 md:col-span-1">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
        type="search"
        placeholder="Search Prompts"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </div>

    {/* <button onClick={() => refine("")}>Reset query</button> */}
    {isSearchStalled ? 'My search is stalled' : ''}
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <div>
      {parsedHit.map((part) =>
        part.isHighlighted ? <mark>{part.value}</mark> : part.value
      )}
    </div>
  );
});

const Hit = ({ hit }) => {
  const [promptHelper, setPromptHelper] = useState('Helper text');
  return (
    <li
      onClick={() => {
        handleHitClick(hit, promptHelper, setPromptHelper);
      }}
      key={hit._id}
      className="col-span-1 flex h-fit flex-col divide-y divide-gray-200 rounded-lg bg-gray-600 text-center shadow overflow-hidden hover:bg-gray-900 transition duration-300 ease-in-out group cursor-pointer"
    >
      <div className="flex flex-1 max-h-[350px] sm:min-h-[350px] flex-col">
        <div className="flex flex-1 flex-col p-4">
          <h3 className="my-2 text-xl text-gray-100 font-bold line-clamp-3">
            {hit.Title}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only text-gray-400">Title</dt>
            <dd className="text-xs font-bold text-gray-200 line-clamp-3">
              {hit.Teaser}
            </dd>
            <dt className="sr-only">Role</dt>
            <dt className="text-xs flex flex-grow p-2 bg-gray-900 bg-opacity-20 rounded-lg mt-2 h-fit">
              <span className="line-clamp-3 self-center">{hit.Prompt}</span>
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2 max-h-14 overflow-hidden h-full items-center justify-center w-full">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {hit.Category}
              </span>
              {hit.Tags.map((tag) => (
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {tag}
                </span>
              ))}
            </dd>
          </dl>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-500 group-hover:divide-gray-800 transition duration-300 ease-in-out">
            <div className="flex w-0 flex-1">
              <a
                // href={`mailto:${person.email}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-500 hover:text-gray-400"
              >
                <ChatBubbleLeftRightIcon
                  className="h-5 w-5 text-gray-300"
                  aria-hidden="true"
                />
                <span className="ml-3">Comments</span>
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                // href={`tel:${person.telephone}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-500 hover:text-gray-400"
              >
                <HeartIcon
                  className="h-5 w-5 text-gray-300"
                  aria-hidden="true"
                />
                <span className="ml-3">1231</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export const AlgoliaSearch = () => (
  <InstantSearch indexName="tellit_prompts" searchClient={searchClient}>
    <Hits hitComponent={Hit} />
  </InstantSearch>
);

// export default function CardGrid() {
//   return (
//     <ul
//       role="list"
//       className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//     >
//       {people.map((person) => (
// <li
//   key={person.email}
//   className="col-span-1 flex h-fit flex-col divide-y divide-gray-200 rounded-lg bg-gray-600 text-center shadow overflow-hidden hover:bg-gray-900 transition duration-300 ease-in-out group cursor-pointer"
// >
//   <div className="flex flex-1 max-h-[500px] flex-col">
//     <div className="flex flex-1 flex-col p-4">
//       <h3 className="my-3 text-xl text-gray-100 font-bold">
//         {person.name}
//       </h3>
//       <dl className="mt-1 flex flex-grow flex-col justify-between">
//         <dt className="sr-only text-gray-400">Title</dt>
//         <dd className="text-sm text-gray-200">{person.title}</dd>
//         <dt className="sr-only">Role</dt>
//         <dt className="text-xs">{person.body}</dt>
//         <dd className="mt-3">
//           <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
//             {person.role}
//           </span>
//         </dd>
//       </dl>
//     </div>
//     <div>
//       <div className="-mt-px flex divide-x divide-gray-500 group-hover:divide-gray-800 transition duration-300 ease-in-out">
//         <div className="flex w-0 flex-1">
//           <a
//             href={`mailto:${person.email}`}
//             className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-500 hover:text-gray-400"
//           >
//             <ChatBubbleLeftRightIcon
//               className="h-5 w-5 text-gray-300"
//               aria-hidden="true"
//             />
//             <span className="ml-3">Comments</span>
//           </a>
//         </div>
//         <div className="-ml-px flex w-0 flex-1">
//           <a
//             href={`tel:${person.telephone}`}
//             className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-500 hover:text-gray-400"
//           >
//             <HeartIcon
//               className="h-5 w-5 text-gray-300"
//               aria-hidden="true"
//             />
//             <span className="ml-3">1231</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </li>
//       ))}
//     </ul>
//   );
// }
