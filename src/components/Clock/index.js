import React, { useState } from "react";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";
import styled from "styled-components";
import { MdOutlineRestartAlt } from "react-icons/md";

//sayfayı ortalıyor
const TimerWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 15%;
  transform: translate(-50%, -50%);
`;

function Clock() {
  const [key, setKey] = useState(0);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div>Too late...</div>;
    } else {
      return (
        <div>
          {remainingTime} <br />{" "}
          <span className="text-slate-400"> seconds </span>{" "}
        </div>
      );
    }
  };

  return (
    <div className="">
      <div>
        <TimerWrapper>
          <CountdownCircleTimer
            key={key}
            isPlaying
            duration={10}
            colors={["rgb(192 132 252)", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            size={120}
          >
            {renderTime}
          </CountdownCircleTimer>
        </TimerWrapper>
      </div>

      <div className="bg-indigo-300 w-2/3 h-20 mt-24 ml-80 rounded-xl flex justify-evenly">
        <select name="Lang" className="rounded-full h-10 px-5  mt-5">
          <option value="tr">Türkçe</option>
          <option value="en">English</option>         
        </select>

        <button onClick={() => setKey((prev) => prev + 1)}>
          <MdOutlineRestartAlt className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Clock;
