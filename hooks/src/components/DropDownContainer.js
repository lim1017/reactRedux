import React, { useState } from "react";

const DropDownContainer = ({options, color, setColor}) => {


  const renderedOptions = options.map((option) =>{
    return (
      <div 
        key={option.value} 
        className='item'
        onClick={()=>setColor(option)}
        >
        {option.label}
      </div>
    )
  })

 
    return (
      <div className='ui form'>
        <div className='field'>
          <label className='label'>Select a color</label>
            <div className="ui selection dropdown visible active">
              <i className='dropdown icon'></i>
              <div className='text'>{color.label}</div>
              <div className='menu visible transition'>
                {renderedOptions}
              </div>
            </div>
        </div>
      </div>

    );
  

 
};

export default DropDownContainer;
