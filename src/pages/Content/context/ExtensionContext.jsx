// import React, { useState, useMemo } from 'react';
// import ReactDOM from 'react-dom';

// import { removeOldTextBox } from '../Scripts';

// import { NewTextArea } from '../Components/filters/NewTextArea';

// // create context
// const ExtensionContext = React.createContext();

// export const ExtensionProvider = ({ children }) => {
//   const [newPromptText, setNewPromptText] = useState('test prompt');

//   const [showNewTextBox, setShowNewTextBox] = useState(false);

//   const [selectedPrompt, setSelectedPrompt] = useState({});

//   const handleHitClick = (hit) => {

//     );
//   };

//   // const [sortContextState, setSortContextState] = useState("createdAt");

//   //   function setNew() {
//   //     setSortContextState(sortStates[1]);
//   //     setCurrentTab('Recent');
//   //   }

//   //   function setTop() {
//   //     setSortContextState(sortStates[0]);
//   //     setCurrentTab('Top');
//   //   }

//   const value = useMemo(
//     () => ({
//       newPromptText,
//       setNewPromptText,
//       selectedPrompt,
//       setSelectedPrompt,
//       handleHitClick,
//       showNewTextBox,
//       setShowNewTextBox,
//     }),
//     [newPromptText, selectedPrompt, showNewTextBox]
//   );

//   return (
//     <ExtensionContext.Provider value={value}>
//       {children}
//     </ExtensionContext.Provider>
//   );
// };

// export default ExtensionContext;
