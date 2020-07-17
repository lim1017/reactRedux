import React, { useState } from "react";
import './App.css';
import QuestionsContainer from "./components/QuestionsContainer"
import SearchContainer from "./components/SearchContainer"
import DropDownContainer from "./components/DropDownContainer"



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

const options = [
  {
    label: "Color Red",
    value: 'red',
  },
  {
    label: "Color Green",
    value: 'green',
  },
  {
    label: "Color Blue",
    value: 'blue',
  },
]

function App() {

  const [color, setColor] = useState(options[0]);


  return (
    <div className="App">
     <div>hooks</div>

     <QuestionsContainer items={items} />
     <SearchContainer />
     <DropDownContainer options={options} color={color} setColor={setColor} />
    </div>
  );
}

export default App;
