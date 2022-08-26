import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Word({ index, letter }) {
  const wordIndex = useSelector((state) => state.typingSpeed.wordIndex);
  const selectedLang = useSelector((state) => state.typingSpeed.selectedLang);
  const currentWord = useRef();

  useEffect(() => {
    
    //yazının kayması icin, style da overflow:hidden yapmayı unutma
    if (wordIndex === index) {
      currentWord.current.scrollIntoView();
    }
  }, [wordIndex]);

  return (
    <span
      ref={currentWord}
      key={index}
      className={
        index === wordIndex
          ? "bg-slate-200 text-white m-3 rounded-xl"
          : "text-indigo-300 m-3"
      }
    >
      {letter[selectedLang]}{" "}
    </span>
  );
}

function TextArea() {
  const words = useSelector((state) => state.typingSpeed.words);

  return (
    <div className="flex items-center justify-center mt-40 overflow-hidden h-28 py-2">
      <div className=" border-indigo-300 border-4 border-double w-1/2 h-full text-4xl rounded-xl p-3 overflow-hidden">
        {words.map((letter, index) => {
          return <Word index={index} key={index} letter={letter} />;
        })}
      </div>
    </div>
  );
}

export default TextArea;
