import React from "react";

const Navbar = () => {
    return (
      
        <nav className="p-4 flex justify-end">
          <ul>
            <li>
              <a href={'/'}>Home</a>
            </li>
            <li>
              <a href={'/aboutme'}>About me</a>
            </li>
            <li>
              <a href={'/myproject'}>My Project</a>
            </li>
            <li>
              <a href={'/contact'}>Contact</a>
            </li>
            {/* <Toggle ></Toggle> */}
          </ul>
        </nav>
      
    );
  };
  
  export default Navbar;