import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setReplay } from "../../redux/typingSpeedSlice";

//sayfayı ortalıyor
const TimerWrapper = styled.div`
  position: absolute;
  top: 27%;
  left: 17%;
  transform: translate(-50%, -50%);
`;

function Clock() {
  const time = useSelector((state) => state.typingSpeed.time);
  const start = useSelector((state) => state.typingSpeed.start);
  const wrongWord = useSelector((state) => state.typingSpeed.wrongWord);
  const correctWord = useSelector((state) => state.typingSpeed.correctWord);

  //swal
  const Swal = require("sweetalert2");

  //dispatch
  const dispatch = useDispatch();

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      Swal.fire({
        text: "Game Over!",
        title: `✅ ${correctWord} 🚫 ${wrongWord}`,
      }).then((confirmButton) => {
        if (confirmButton.value) {
          dispatch(setReplay());
        }
      });
    } else {
      return (
        <div>
          {remainingTime} <br />
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
            key={time}
            isPlaying={start === true ? true : false}
            duration={time}
            colors={["rgb(192 132 252)", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
            size={120}
          >
            {renderTime}
          </CountdownCircleTimer>
        </TimerWrapper>
      </div>
    </div>
  );
}

export default Clock;
