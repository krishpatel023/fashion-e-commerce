import { useState } from "react";
import { BannerData } from "../data/Banners";

export default function Carousel() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(BannerData.length - 1);
    else setCurrent(current - 1);
      // myStopFunction()
  };

  let nextSlide = () => {
    myStopFunction()
    if (current === BannerData.length - 1) setCurrent(0);
    else setCurrent(current + 1);

    // mySetTimeout()
  };

  let setSlide = (num) => {
    setCurrent(num)
    myStopFunction()

    // mySetTimeout()
  };
  const myTimeout = setTimeout(nextSlide, 5000);

  function myStopFunction() {
    clearTimeout(myTimeout);
  }
  return (
    <div className="overflow-hidden relative w-full max-h-[100vh] -z-20 sm:flex sm:justify-center sm:h-[100vh]">
      <div
        className={`-z-10 flex transition ease-out duration-40 w-full sm:h-full sm:object-fill"`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {BannerData.map((s,i) => {
          return <img className="sm:h-full sm:object-cover" src={s.img} key={i}/>;
        })}
      </div>

      <div className="absolute top-0 h-full justify-center items-start flex flex-col text-white px-28 z-10 
       sm:items-center sm:px-0 sm:gap-4">
        <div className="min-w-[30%] h-[70%] flex flex-col items-center justify-center gap-12
          md:gap-7
        ">
          <h1 className="font-normal text-5xl uppercase font-[Times-new-roman]
            md:text-3xl
          ">Live Your Dance</h1>
          <div className="w-full flex justify-between items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 4" fill="none"><path d="M0 2H196" stroke="white" strokeWidth="3.1134"/></svg>
            <h2 className="font-normal text-6xl font-[Times-new-roman] italic
              md:text-4xl
            ">Create</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 4" fill="none"><path d="M0 2H196" stroke="white" strokeWidth="3.1134"/></svg>
          </div>
          <h1 className="font-normal text-7xl uppercase font-[Times-new-roman]
            md:text-5xl
          ">Memories</h1>          
        </div>

        <button className="border-2 border-white text-white w-48 h-16 md:w-36 md:h-12 md:text-lg sm:w-28 sm:h-8 sm:text-base">Shop Now</button>
      </div>

      {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full z-20">
        {BannerData.map((s, i) => {
          return (
            <div
              onClick={() => {
                setSlide(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div> */}
    </div>
  );
}