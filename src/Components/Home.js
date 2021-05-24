import React from "react";
import { Link } from "react-router-dom";
import "../Style/style.scss";
import { touchVibe } from "../Misc/utils";
import logo from "../logo512.png";

const Home = () => {
  return (
    <div className="body-home">
      <img src={logo} alt="password logo" height={110} />
      <Link to="/game" onClick={() => touchVibe()}>
        <button type="button" className="nes-btn">
          START
        </button>
      </Link>
      <Link to="/rules" onClick={() => touchVibe()}>
        <button type="button" className="nes-btn">
          RULES
        </button>
      </Link>
    </div>
  );
};

export default Home;
