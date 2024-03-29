import React from "react";

function NumberCard() {
  return (
    <ul className="flip minutePlay">
      <li>
        <a href="#">
          <div className="up">
            <div className="shadow"></div>
            <div className="inn">0</div>
          </div>
          <div className="down">
            <div className="shadow"></div>
            <div className="inn">0</div>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default NumberCard;
