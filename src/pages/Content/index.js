import React from 'react';
import ReactDOM from 'react-dom';

import { MainSection } from './Components/MainSection';

import logo from './tellitlogosvg.svg';
import NavLink from './Components/NavLink';
import { NewTextArea } from './Components/filters/NewTextArea';
// import { ExtensionProvider } from './context/ExtensionContext';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  connectHighlight,
  Pagination,
  connectSearchBox,
  RefinementList,
} from 'react-instantsearch-dom';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

const searchClient = algoliasearch(
  'O3NNYYF3AI',
  'f86e6c0477f4f21dfc2a3c14d4125c11'
);

// loop through all new elements on page, and if nav element doesnt contain the tellit link, add it

// Select the node that will be observed for changes
const targetNode = document.body;

window.onload = function () {
  let nav = document.querySelector('nav');

  // create new link
  const newLink = document.createElement('div');

  newLink.setAttribute('id', 'tellit-link');

  nav.appendChild(newLink);

  // Set default prompt box
  const textAreaContainer = document.getElementsByClassName(
    'absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient'
  )[0];
  const newbox = document.createElement('div');
  newbox.setAttribute('id', 'new-textarea');
  textAreaContainer.appendChild(newbox);

  // Make old text are hidden

  if (textAreaContainer) {
    ReactDOM.render(
      <InstantSearch indexName="tellit_prompts" searchClient={searchClient}>
        <NewTextArea />
      </InstantSearch>,
      document.getElementById('new-textarea')
    );
  }

  if (newLink) {
    ReactDOM.render(
      <NavLink />,
      // (4) Alternatively, you can just target an existing element on the page here without needing to create `myElement`.
      document.getElementById('tellit-link')
    );
  }
};

// Adding react Component

function waitForElementToDisplay(selector, time) {
  if (document.getElementsByClassName(selector)[0] != null) {
    // Element is now available, do something with it
    console.log('Element is available!');

    // Fix bug where sidebar is missing
    let navDiv = document.getElementsByClassName(
      'dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col'
    );
    navDiv[0].classList.remove('hidden');
    //

    // Fix Model Button Size
    let modelButton = document.getElementsByClassName(
      'flex items-center justify-center gap-2'
    )[0];
    modelButton.classList.add('mx-auto');
    modelButton.classList.add('w-1/2');
    //

    // fix text area button
    let textAreaButton = document.getElementsByClassName(
      'stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6'
    )[0];
    textAreaButton.classList.add('max-auto');

    const myElement = document.createElement('div');
    myElement.setAttribute('id', 'react-component');

    myElement.setAttribute(
      'class',
      'w-full h-full flex justify-center items-center mx-2 '
    );
    const foundExistingElement = document.getElementsByClassName(selector)[0];

    foundExistingElement.replaceWith(myElement);

    if (myElement) {
      ReactDOM.render(
        // <ExtensionProvider>
        <MainSection />,
        // </ExtensionProvider>,
        // (4) Alternatively, you can just target an existing element on the page here without needing to create `myElement`.
        document.getElementById('react-component')
      );
    }

    return;
  } else {
    // Element is not yet available, wait and check again
    setTimeout(function () {
      waitForElementToDisplay(selector, time);
    }, time);
  }
}

waitForElementToDisplay(
  'text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow',
  50
);

console.log('Content script has updated!');
