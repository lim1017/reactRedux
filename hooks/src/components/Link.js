import React from 'react';

const Link = ({className, href, children}) =>{
  
  const handleClick = (e) => {

    //allows ctrl+click or cmd on mac to open new tab.
    if(e.metaKey || event.ctrlKey){
      return;
    }

    e.preventDefault()
    window.history.pushState({} , '', href)
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }
  
  return (
    <a className={className} 
    href={href}
    onClick={handleClick}
    >
    {children}
    </a>
  )
    
};

export default Link;