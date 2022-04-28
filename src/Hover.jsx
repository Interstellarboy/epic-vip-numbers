import React from "react";
import "./Hover.css";
import number from "./imgs/number.gif";

function Hover() {
  return (
    <div className="con">
      <div className="card w-5 h-5">
        <div className="imgBx">
          <img src={number} />
        </div>
        <div className="contentBx">
          <h2>New Launches</h2>
          <div className="size">
            <h3>No:</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>10</span>
            <span>10</span>
            <span>10</span>
          </div>
          <div className="m-5">
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover;
