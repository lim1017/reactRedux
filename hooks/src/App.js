import React from 'react';
import './App.css';
import QuestionsContainer from "./components/QuestionsContainer"


const items = [
  { 
    title: "What is React?",
    content: "React is a JS library"
  },
  { 
    title: "What is Angular?",
    content: "Angular is a JS library"
  },
  { 
    title: "What is Vue?",
    content: "Vue is a JS library"
  },
  { 
    title: "Which one is the best one??",
    content: "React is a JS library"
  },
]

function App() {
  return (
    <div className="App">
     <div>hooks</div>

     <QuestionsContainer items={items} />
    </div>
  );
}

export default App;
