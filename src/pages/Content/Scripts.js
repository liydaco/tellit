// Get Button Element
var button = document.getElementsByClassName(
  'absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
);

// Get textarea element

export const removeOldTextBox = () => {
  // Get Textbox container

  var div = document.getElementsByClassName(
    'stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6 max-auto'
  );

  div[0].style.display = 'none';
};

export const setTextarea = (prompt) => {
  var textarea = document.getElementsByClassName(
    'm-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0'
  );

  textarea[0].value = prompt;
};
