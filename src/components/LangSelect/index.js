import React from 'react';
import { setSelectedLang } from '../../redux/typingSpeedSlice';
import { useSelector, useDispatch } from 'react-redux';

function LangSelect() {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.typingSpeed.lang);


    const handleChange = (e) => {
        console.log(e.target.value)
        dispatch(setSelectedLang(e.target.value))
    }

  return (
    <div>
        <select name="Lang" className="rounded-full h-10 px-5" onChange={handleChange}>
            <option value="targetWord">Türkçe</option>
            <option value="englishWord">English</option>
        </select> 
    </div>
  )
}

export default LangSelect;