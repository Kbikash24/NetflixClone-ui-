import React from "react";

export default function Enjoy() {
  return (
    <div>
      <div className=" flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
        {/* right */}
        <div className="left order-last lg:order-first md:order-first">
        <div className="">
            <video
              className="lg:w-[22em] md:w-[20em]  w-[20em] "
              autoPlay={true}
              muted
            >
              <source src="/video/v2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* left */}
        <div className="right mb-10 lg:mb-0 md:mb-0">
        
          <h2 className="text-white lg:text-5xl md:text-5xl text-3xl font-bold mb-5 text-center lg:text-start md:text-start">
            Downlaod your shows <br className='' />to watch offline
          </h2>
          <p className="text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start ">
            Save your favourites easily and always have{" "}
            <br className="hidden lg:block md:block" /> something to watch.
          </p>
        </div>
      </div>
      <div className="hr_line" />
    </div>
  );
}
