import React, { useState, useEffect } from "react";
import slide1 from "./imgs/slide-0.jpg";
import slide2 from "./imgs/slide-1.jpg";
import slide3 from "./imgs/slide-2.jpg";

function About() {
  const [flag, setFlag] = useState(true);
  const allThree = [slide1, slide2, slide3];
  const [imgSrc, setImgSrc] = useState([]);
  const [imgNum, setImgNum] = useState(0);
  function flags() {
    setFlag(!flag);
  }

  setTimeout(() => {
    setFlag(!flag);
  }, "2000");

  useEffect(() => {
    setImgNum(imgNum + 1);
    if (imgNum >= 2) {
      setImgNum(0);
    }
    setImgSrc(allThree[imgNum]);
    console.log(imgNum);
  }, [flag]);

  return (
    <div className="bg-black h-full p-10">
      <div className="text-white text-7xl text-left p-10">
        ABOUT <span className="text-cust underline ">VIP</span>
      </div>
      <div className="flex">
        <div className="text-custs text-left p-10  w-2/4 inline-block">
          <span className="text-xl text-white">
            VIP NUMBER STORE is known across India as a company that provides
            valuable and high quality services since 2010.
          </span>
          For eight years we have successfully sold over 10,000+ number to our
          customers in India and have never stopped our self from serving
          efficiently. If you want to buy your favorite mobile number or a fancy
          number of your choice, VIP Number Store is the best brand offering
          such service at the most affordable rates in the country. Our success
          and achievements could be determined by the long-term relations that
          we have with numerous VIP's in India, who have happily taken fancy,
          extraordinary looking numbers from us.
        </div>
        <div className="w-2/4 h-screen inline-block">
          <img src={imgSrc} alt="" onClick={flags} />
        </div>
      </div>
    </div>
  );
}

export default About;
