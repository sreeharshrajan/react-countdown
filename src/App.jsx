import "./assets/styles/App.css";
import useTimer from "./hooks/useTimer";
function App() {
  const timeLeft = useTimer(1, 24);
  return (
    <>
      <div className="container">
        <p>
          {timeLeft.days} D:{timeLeft.hours} H:{timeLeft.minutes}
          M:{timeLeft.seconds}Sec
        </p>
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
        <ul className="flip secondPlay">
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
      </div>
      <p></p>
    </>
  );
}

export default App;
