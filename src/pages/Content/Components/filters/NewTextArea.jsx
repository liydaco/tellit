import React, { useState } from 'react';
import {
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineLink,
  AiOutlineMessage,
} from 'react-icons/ai';

export function NewTextArea({ hit, id }) {
  const [prompValue, setPromptValue] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('English');
  const [tone, setTone] = useState('');
  const [style, setStyle] = useState('');
  const [plagarismFree, setPlagarismFree] = useState(true);

  const handleCheckboxChange = () => {
    setPlagarismFree(!plagarismFree);
  };

  const handlePromptHintChange = (event) => {
    setPromptValue(event.target.value);
  };

  const createFilterText = (completeTextValue) => {
    console.log(completeTextValue);

    let instructions = '\n\nPlease write in a';
    if (tone) {
      instructions += ' ' + tone + ' tone';
    }
    if (style) {
      if (tone) {
        instructions += ',';
      }
      instructions += ' ' + style + ' writing style';
    }
    if (plagarismFree) {
      if (tone || style) {
        instructions += ',';
      }
      instructions +=
        ' ' +
        'way that is the same as a human, 100% unique and undetectable to plagiarism software and AI detection tools';
    }
    if (targetLanguage) {
      if (tone || style || plagarismFree) {
        instructions += ',';
      }
      instructions += ' ' + targetLanguage + ' language';
    }
    return completeTextValue + instructions;
  };

  const combineData = (prompValue) => {
    let completeTextValue = {};
    if (hit) {
      let replacements = {
        '[PROMPT]': prompValue,
        '[TARGETLANGUAGE]': targetLanguage,
      };

      completeTextValue = {
        Prompt: hit.Prompt.replace(
          /\[PROMPT\]|\[TARGETLANGUAGE\]/g,
          function (match) {
            return replacements[match];
          }
        ),
      };
    }
    console.log(completeTextValue);
    return createFilterText(completeTextValue.Prompt);
  };

  const handleButton = (e) => {
    e.preventDefault();
    console.log('button clicked');

    const finalPromptArea = document.getElementsByClassName(
      'm-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0'
    )[0];

    if (hit) {
      console.log(prompValue);
      finalPromptArea.value = combineData(prompValue);

      const submitButton = document.getElementsByClassName(
        'absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
      )[0];

      submitButton.click();
    } else {
      finalPromptArea.value = createFilterText(prompValue);

      const submitButton = document.getElementsByClassName(
        'absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
      )[0];

      submitButton.click();
    }
    setPromptValue('');
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // Perform action here
      handleButton(event);
    }
  };

  return (
    <div
      id={id}
      class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient"
    >
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6 max-auto">
        <div class="relative flex h-full flex-1 md:flex-col">
          <div class="flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
          <div class="flex flex-col w-full py-2 px-2 flex-grow md:py-3 md:px-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-900 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
            {hit && (
              <div className="flex flex-row justify-between my-1">
                <a
                  target="_blank"
                  href={`https://www.tellit.ai/prompts/${hit.Slug}`}
                  className="text-gray-200 font-bold text-left flex flex-row group"
                >
                  {hit.Title}
                  <span className="group-hover:block hidden">
                    {' '}
                    <AiOutlineLink />
                  </span>
                </a>
                <div className="flex flex-row gap-4 text-sm ">
                  <div className="flex flex-row justify-center items-center">
                    <AiOutlineEye color="rgb(107 114 128 )" className="te" />
                    <span className="ml-2 text-gray-400"> {hit.Views}</span>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <AiOutlineHeart color="rgb(107 114 128 )" className="te" />
                    <span className="ml-2 text-gray-400"> {hit.Votes}</span>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <AiOutlineComment
                      color="rgb(107 114 128 )"
                      className="te"
                    />
                    <span className="ml-2 text-gray-400"> {hit.Usages}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-row my -1 gap-3">
              <select
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                id="location"
                name="location"
                className="mt-1 bg-gray-800 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                data-placeholder="Output Language"
              >
                <option value="" disabled>
                  Choose Output Language
                </option>
                <option selected value="English">
                  English
                </option>
                <option value="Afrikaans">Afrikaans</option>
                <option value="Albanian">Albanian</option>
                <option value="Arabic">Arabic</option>
                <option value="Armenian">Armenian</option>
                <option value="Basque">Basque</option>
                <option value="Bengali">Bengali</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="Catalan">Catalan</option>
                <option value="Cambodian">Cambodian</option>
                <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                <option value="Croatian">Croatian</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Dutch">Dutch</option>
                <option value="Estonian">Estonian</option>
                <option value="Fiji">Fiji</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="Georgian">Georgian</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Hindi">Hindi</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Javanese">Javanese</option>
                <option value="Korean">Korean</option>
                <option value="Latin">Latin</option>
                <option value="Latvian">Latvian</option>
                <option value="Lithuanian">Lithuanian</option>
                <option value="Macedonian">Macedonian</option>
                <option value="Malay">Malay</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Maltese">Maltese</option>
                <option value="Maori">Maori</option>
                <option value="Marathi">Marathi</option>
                <option value="Mongolian">Mongolian</option>
                <option value="Nepali">Nepali</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Persian">Persian</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Quechua">Quechua</option>
                <option value="Romanian">Romanian</option>
                <option value="Russian">Russian</option>
                <option value="Samoan">Samoan</option>
                <option value="Serbian">Serbian</option>
                <option value="Slovak">Slovak</option>
                <option value="Slovenian">Slovenian</option>
                <option value="Spanish">Spanish</option>
                <option value="Swahili">Swahili</option>
                <option value="Swedish ">Swedish </option>
                <option value="Tamil">Tamil</option>
                <option value="Tatar">Tatar</option>
                <option value="Telugu">Telugu</option>
                <option value="Thai">Thai</option>
                <option value="Tibetan">Tibetan</option>
                <option value="Tonga">Tonga</option>
                <option value="Turkish">Turkish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Urdu">Urdu</option>
                <option value="Uzbek">Uzbek</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Welsh">Welsh</option>
                <option value="Xhosa">Xhosa</option>
              </select>

              <select
                id="tone"
                name="tone"
                className="mt-1 bg-gray-800 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                data-placeholder="Output Tone"
                value={tone}
                onChange={(event) => setTone(event.target.value)}
              >
                <option value="" selected disabled>
                  Choose an output tone (optional)
                </option>
                <option value="Default">Default</option>
                <option value="Authoritative">Authoritative</option>
                <option value="Clinical">Clinical</option>
                <option value="Cold">Cold</option>
                <option value="Confident">Confident</option>
                <option value="Cynical">Cynical</option>
                <option value="Emotional">Emotional</option>
                <option value="Empathetic">Empathetic</option>
                <option value="Formal">Formal</option>
                <option value="Friendly">Friendly</option>
                <option value="Humorous">Humorous</option>
                <option value="Informal">Informal</option>
                <option value="Ironic">Ironic</option>
                <option value="Optimistic">Optimistic</option>
                <option value="Pessimistic">Pessimistic</option>
                <option value="Playful">Playful</option>
                <option value="Sarcastic">Sarcastic</option>
                <option value="Serious">Serious</option>
                <option value="Sympathetic">Sympathetic</option>
                <option value="Tentative">Tentative</option>
                <option value="Warm">Warm</option>
              </select>
              <select
                value={style}
                onChange={(event) => setStyle(event.target.value)}
                id="style"
                name="style"
                className="mt-1 bg-gray-800 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                data-placeholder="Output Style"
              >
                <option value="" selected disabled>
                  Choose an output style (optional)
                </option>
                <option value="Default">Default</option>
                <option value="Academic">Academic</option>
                <option value="Analytical">Analytical</option>
                <option value="Argumentative">Argumentative</option>
                <option value="Conversational">Conversational</option>
                <option value="Creative">Creative</option>
                <option value="Critical">Critical</option>
                <option value="Descriptive">Descriptive</option>
                <option value="Epigrammatic">Epigrammatic</option>
                <option value="Epistolary">Epistolary</option>
                <option value="Expository">Expository</option>
                <option value="Informative">Informative</option>
                <option value="Instructive">Instructive</option>
                <option value="Journalistic">Journalistic</option>
                <option value="Metaphorical">Metaphorical</option>
                <option value="Narrative">Narrative</option>
                <option value="Persuasive">Persuasive</option>
                <option value="Poetic">Poetic</option>
                <option value="Satirical">Satirical</option>
                <option value="Technical">Technical</option>
              </select>
            </div>
            <div className="relative h-full py-2">
              {/* <textarea
                tabindex="0"
                data-id="prompthelper"
                rows="1"
                placeholder={hit?.PromptHint || 'Type your prompt here'}
                value={prompValue}
                onChange={handlePromptHintChange}
                class=" px-3 w-full resize-none border-0 bg-gray-800  rounded-lg  focus:ring-0 focus-visible:ring-0  max-h-96   overflow-y-hidden"
              ></textarea> */}
              <label
                for="search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineMessage />
                </div>
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  id="prompttext"
                  value={prompValue}
                  onChange={handlePromptHintChange}
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={
                    hit?.PromptHint || 'Start typing your prompt to search'
                  }
                  required
                ></input>
                <div className=" right-1 absolute top-1/2 transform  -translate-y-1/2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleButton(e);
                    }}
                    class="inline-block  rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  >
                    <span class="block rounded-full bg-gray-900 px-8 py-2 text-sm font-medium hover:bg-transparent">
                      Tellit
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row my-1 justify-between items-center">
              <span className="text-xs">
                Powered by <span className="font-bold">Tellit</span> &{' '}
                <span className="font-bold">Chat-GPT</span>{' '}
              </span>
              <div className="flex flex-row items-center justify-center">
                <label className="relative inline-flex items-center cursor-pointer ">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={plagarismFree}
                    onChange={handleCheckboxChange}
                  />
                  <div
                    className={`w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${
                      plagarismFree ? 'peer-checked' : ''
                    }`}
                  ></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Plagiarism Free
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
