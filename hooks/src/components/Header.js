import React, {useState, useEffect} from "react";
import Link from './Link'

const Header =() =>{
 
  return (
    <div className='ui secondary pointing menu'>
      <Link href ="/" className="item">
        Questions
      </Link>

      <Link href ="/search" className="item">
        Search
      </Link>
      <Link href ="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href ="/translate" className="item">
        Translate
      </Link>
    </div>
 )
}

export default Header;
