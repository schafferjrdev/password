import React from "react";
import { Link } from "react-router-dom";
import "../Style/style.scss";
import { touchVibe } from "../Misc/utils";

const Home = () => {
  return (
    <div className="body-game">
      <div className="header">
        <Link to="/" onClick={() => touchVibe()}>
          <button type="button" className="nes-btn is-small">
            {"< BACK"}
          </button>
        </Link>
      </div>
      <div className="rules">
        <h3>How to Play</h3>

        <p className="container bordered">
          Choose the numbers to find the password.
        </p>

        <p className="container bordered">
          You have 9 attempts and each gets feedback about the correctness of
          the guess:
        </p>

        <div className="container bordered">
          <div className="rule-tip">
            <div className="led right"></div>
            <span>
              a number occurs in the code and is in the correct position
            </span>
          </div>
          <div className="rule-tip">
            <div className="led semi"></div>
            <span>a number occurs in the code but in the wrong position</span>
          </div>
        </div>

        <p className="container">
          The position of the square doesn't indicate the position of the number
        </p>

        <Link to="/game" onClick={() => touchVibe()}>
          <button type="button" className="nes-btn is-small">
            PLAY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
