import React, { useState } from "react";
import "./App.css";
import QuestionsContainer from "./components/QuestionsContainer";
import SearchContainer from "./components/SearchContainer";
import DropDownContainer from "./components/DropDownContainer";
import Tranlate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a JS library",
  },
  {
    title: "What is Angular?",
    content: "Angular is a JS library",
  },
  {
    title: "What is Vue?",
    content: "Vue is a JS library",
  },
  {
    title: "Which one is the best one??",
    content: "React is a JS library",
  },
];

const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color Green",
    value: "green",
  },
  {
    label: "Color Blue",
    value: "blue",
  },
];



function App() {
  const [color, setColor] = useState(options[0]);


  const showWidgets = () => {
    if (window.location.pathname === "/") {
      return <QuestionsContainer items={items} />;
    }
  
    if (window.location.pathname === "/search") {
      return <SearchContainer />;
    }
  
    if (window.location.pathname === "/dropdown") {
      return (
        <DropDownContainer
          type="Color"
          options={options}
          selected={color}
          setSelected={setColor}
        />
      );
    }
  
    if (window.location.pathname === "/translate") {
      return <Tranlate />;
    }
  };


  return (
    <div className="App">
      <div>hooks</div>
      {showWidgets()}
    </div>
  );
}

export default App;
