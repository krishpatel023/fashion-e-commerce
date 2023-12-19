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
    <div className="overflow-hidden relative w-full max-h-[85vh]">
      <div
        className={`-z-10 flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {BannerData.map((s,i) => {
          return <img src={s.img} key={i}/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-1/2 justify-center items-start flex flex-col gap-8 text-white px-10 text-3xl z-10 sm:gap-4">
        <h1 className="font-bold text-6xl md:text-4xl">Plus Size Collection</h1>
        <h2 className="font-normal text-2xl md:text-lg sm:hidden">Explore our latest collection designed for comfort and style.</h2>
        <button className="bg-black w-48 h-16 rounded-full md:w-36 md:h-12 md:text-lg sm:w-28 sm:h-8 sm:text-base">Shop Now</button>
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