import useTimer from "./hooks/useTimer";

function App() {
  const timeLeft = useTimer(1, 24);
  return (
    <>
      <div className="container">
        <h1>
          <span>{timeLeft.days} D: </span>
          <span>{timeLeft.hours} Hr: </span>
          <span>{timeLeft.minutes} Min: </span>
          <span>{timeLeft.seconds} Sec</span>
        </h1>
      </div>
    </>
  );
}

export default App;
