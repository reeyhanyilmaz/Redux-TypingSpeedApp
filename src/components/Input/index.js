import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setInputText,
  setKeyPress,
  setDecreaseTime,
  setGameStart,
} from "../../redux/typingSpeedSlice";

function Input() {
  const dispatch = useDispatch();

  const inputText = useSelector((state) => state.typingSpeed.inputText);
  const start = useSelector((state) => state.typingSpeed.start);

  const handleChange = (e) => {
    //inputa girilen text
    dispatch(setInputText(e.target.value));

    if (!start) {
      dispatch(setDecreaseTime());
      dispatch(setGameStart());
    }
  };

  //space tusuna basılınca olmasını istedigim
  const handleKeyPress = (e) => {
    if (e.keyCode === 32 && inputText) {
      dispatch(setKeyPress());
    }
  };

  return (
    <div className="flex items-center justify-center mt-12">
      <input
        type="text"
        placeholder="typing..."
        className="border-indigo-300 border-4 border-solid rounded-md w-1/3 h-20 p-3"
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default Input;
