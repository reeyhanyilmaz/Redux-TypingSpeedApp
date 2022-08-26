import React from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import styled from "styled-components";
import { useSelector } from "react-redux";

//sayfayı ortalıyor
const TimerWrapper = styled.div`
  position: absolute;
  top: 27%;
  left: 17%;
  transform: translate(-50%, -50%);
`;

function Clock() {
  const key = useSelector((state) => state.typingSpeed.key);
  const start = useSelector(state => state.typingSpeed.start);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div>Too late...</div>;
    } else {
      return (
        <div>{remainingTime} <br />
          <span className="text-slate-400"> seconds </span>
        </div>
      );
    }
  };


 

  return (
    <div className="flex items-center justify-center">
      <div>
        <TimerWrapper> 
          <CountdownCircleTimer
            key={key}
            isPlaying={start === true ? true : false}
            duration={60}
            colors={["rgb(192 132 252)", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            size={120}>
            {renderTime}
          </CountdownCircleTimer>
        </TimerWrapper>
      </div>

    </div>
  );
}

export default Clock;
