import React from "react";
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="main flex lg:justify-around md:justify-around justify-between py-4 px-5 items-center">
        {/* left */}
      <div className="left">
        <div className="neflix-log">
            <img className="Lg:w-44 md:w-44 w-28" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"></img>
        </div>
      </div>
      {/* right */}
      <div className="right">
        <div className="main flex items-center ">
          <div className=" bg-[#111112] text-white mx-4 lg:px-5 md:px-5 px-3 py-1 rounded-md border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80">
            <select name="" id="" className="bg-transparent px-5 py-1  outline-none font-bold">
                <option value="English">English</option>
                 <option value="हिन्दी">हिन्दी</option>
            </select>
          </div>
         <Link to={'/signin'}>
          <button className="bg-[#e50815] text-white px-5 py-1.5 rounded-lg font-bold hover:bg-[#d80c1a]">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
