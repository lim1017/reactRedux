import React, { useEffect, useState, useRef } from "react";

const DropDownContainer = ({ options, color, setColor }) => {
  const [open, setOpen] = useState(false);

  //use effect to check for reference to see if the click is on the drop down.  if it isnt close it.
  useEffect(() => {
    document.body.addEventListener('click', (event)=>{
      
      if(reference.current.contains(event.target)){
        return
      } else setOpen(false)
    })
  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === color) {
      return null;
    }

    return (
      <div key={option.value} className="item" onClick={() => setColor(option)}>
        {option.label}
      </div>
    );
  });

  const reference = useRef();

  return (
    <div ref={reference} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{color.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownContainer;
