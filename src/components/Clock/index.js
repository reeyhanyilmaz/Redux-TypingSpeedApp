import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import { useSelector} from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";

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

  //swal
  const Swal = require("sweetalert2");

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

  // useEffect(() => {
  //   if (time === 0) {
  //     Swal.fire({
  //       title: "Final",
  //       showClass: {
  //         popup: "animate__animated animate__fadeInDown",
  //       },
  //       hideClass: {
  //         popup: "animate__animated animate__fadeOutUp",
  //       },
  //     });
  //   }
  // }, [time]);

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
