import React from "react";
import gif from "./imgs/gif.gif";
import hi from "./imgs/hi.gif";
import banner from "./imgs/banner.gif";

function Banner() {
  return (
    <div className="mt-11 h-full">
      <div className="">
        <div className=" text-cust underline text-9xl inline font-bold">
          VIP NUMBERS
        </div>
        <span className="inline">
          <img
            style={{ height: "74px", width: "116px" }}
            className="m-3 inline relative bottom-7"
            src={hi}
            alt=""
          />
        </span>
        <div className="text-white text-9xl inline font-bold">
          {" "}
          AT <div className="p-10 font-bold">YOUR FINGERTIPS</div>
        </div>
      </div>
      <img src={gif} alt="" className="w-full" />
    </div>
  );
}

export default Banner;
