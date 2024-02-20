import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const Faq = ({title,desc}) => {
    const[open, setOpen]=useState(false)
  return (
    <>
      <div className="freqmain container mx-auto lg:max-w-6xl md:max-w-6xl text-white px-5 ">
        <div className="">
          <div className="main top bg-[#2d2d2d] hover:bg-[#414141] flex justify-between px-5 py-4 cursor-pointer " onClick={()=>setOpen(!open)}>

            <div className="left">
              <h1 className="lg:text-2xl md:text-2xl text-xl">
                {title}
              </h1>
            </div>
            <div className="right">
                {open?
              <button type="button">
                <AiOutlineMinus  className="lg:text-4xl md:text-4xl text-2xl"/>
              </button>:
              <button type="button">
                <AiOutlinePlus className="lg:text-4xl md:text-4xl text-2xl"/>
              </button>}
            </div>
          </div>
          {open&&<div className="main-bottom bg-[#2d2d2d] px-5 py-4 my-[1px]">
            <p className="text-2xl cursor-pointer text-justify lg:text-start md:text-start ">
              {desc}
            </p>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Faq;
