import React, { useEffect, useState, useRef } from "react";

const DropDownContainer = ({ options, selected, setSelected, type }) => {
  const [open, setOpen] = useState(false);

  //use effect to check for reference to see if the click is on the drop down.  if it isnt close it.
  useEffect(() => {

    const onBodyClick = (event)=>{
      
      if(reference.current.contains(event.target)){
        return
      } else setOpen(false)
    }

    document.body.addEventListener('click', onBodyClick)


    //clean up function, removes the event listener.  This is necessary for if the element is removed, if not here it will throw an error becaues referene will == null
    return  ()=>{
      document.body.removeEventListener('click', onBodyClick)
    }

  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === selected) {
      return null;
    }

    return (
      <div key={option.value} className="item" onClick={() => setSelected(option)}>
        {option.label}
      </div>
    );
  });

  const reference = useRef();

  return (
    <div ref={reference} className="ui form">
      <div className="field">
        <label className="label">{`Select a ${type}`} </label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownContainer;
