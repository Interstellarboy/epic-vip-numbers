import Footer from "./Footer";
import About from "./About";
import "./App.css";
import Banner from "./Banner";
import Card from "./Card.jsx";
import Hover from "./Hover";
import Nav from "./Nav";
import Ticker from "./Ticker";

function App() {
  return (
    <div className="App bg-black h-full">
      <Nav />
      <Banner />
      <div className="overflow-x-hidden my-10">
        <Ticker />
      </div>

      <div data-aos="zoom-in" className="flex justify-center m-10 ">
        <div className="text-cust text-7xl p-3">GET YOUR</div>
        <div className="text-white text-7xl p-3"> DREAM NUMBER</div>
      </div>
      <div className="m-10 flex justify-between">
        <Hover />
        <Hover />
        <Hover />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
