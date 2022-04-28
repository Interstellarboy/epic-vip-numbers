import React from "react";
import logo from "./imgs/logo.png";
import { useEffect } from "react";
import AOS from "aos";

function Nav() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div data-aos="flip-left" className="flex justify-between text-white p-10">
      <div className="className">HOME</div>
      <div className="className">
        VIP <span className="text-cust">NUMBERS</span>
      </div>
      <div className="className">
        SOLD <span className="text-cust">OUT</span>
      </div>
      <div className="w-14 h-14">
        <img src={logo} alt="" />
      </div>
      <div className="className">
        ABOUT <span className="text-cust">US</span>
      </div>
      <div className="className">GALLERY</div>
      <div className="className">
        CONTACT <span className="text-cust">US</span>
      </div>
    </div>
  );
}

export default Nav;
