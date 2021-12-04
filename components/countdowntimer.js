import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [input, setInput] = useState("");
  // const [isSubmited, setIsSubmited] = useState(false);
  const [isRunning, setisRunning] = useState(false);

  const handleTimer = () => {
    let count = input;
    let interval = setInterval(() => {
      if (count == 0 || !isRunning) {
        console.log("Clear Interval called");
        clearInterval(interval);
      } else if (isRunning) {
        count = count - 1;
        console.log("Set Interval called");
        setInput((prevInput) => prevInput - 1);
      }
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit called");
    setisRunning(true);
    // handleTimer();

    // setIsSubmited(true);
  };

  useEffect(() => {
    console.log("UseEffect called");
    handleTimer();
  }, [isRunning]);

  return (
    <div style={{ margin: "2px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          //   border: "2px solid black",
          width: "80%",
          maxWidth: "550px",
          margin: "1rem auto",
          textAlign: "center",
          padding: "1rem",
          boxShadow: "8px 3px 17px -6px rgba(0,0,0,0.75)",
        }}
      >
        <div
          style={{
            // border: "2px solid red",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            marginBottom: ".7rem",
            padding: "0 2rem",
          }}
        >
          <label>Enter time (in sec)</label>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
        <button type="submit">Start Timer</button>
      </form>

      <div>{input}</div>
      <div>
        <button onClick={() => setisRunning((prevState) => !prevState)}>
          Start
        </button>
        <button onClick={() => setisRunning((prevState) => !prevState)}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
