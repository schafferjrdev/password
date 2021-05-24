import React from "react";
import { Link } from "react-router-dom";
import "../Style/style.scss";
import { touchVibe } from "../Misc/utils";

const Home = () => {
  return (
    <div className="body-home">
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
