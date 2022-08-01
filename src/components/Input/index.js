import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInputText } from '../../redux/typingSpeedSlice';

function Input() {

  const dispatch = useDispatch();

  const inputText = useSelector(state => state.typingSpeed.inputText);

  const handleChange = (e) => {
    dispatch(setInputText(e.target.value))
  }

  return (
    <div className='flex items-center justify-center mt-12'>
        <input type="text" placeholder="typing..." 
        className='border-indigo-300 border-4 border-solid rounded-md w-1/3 h-20 p-3'
        value={inputText}
        onChange={handleChange}
        />
    </div>
  )
}

export default Input;