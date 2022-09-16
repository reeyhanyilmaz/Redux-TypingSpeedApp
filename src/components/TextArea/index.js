import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Word({ index, letter }) {
  const wordIndex = useSelector((state) => state.typingSpeed.wordIndex);
  const selectedLang = useSelector((state) => state.typingSpeed.selectedLang);
  const lang = useSelector((state) => state.typingSpeed.lang);
  const currentWord = useRef();

  useEffect(() => {
    //yazının kayması icin, style da overflow:hidden yapmayı unutma
    if (wordIndex === index) {
      currentWord.current.scrollIntoView();
    }
  }, [wordIndex, index]);

  return (
    <span
      ref={currentWord}
      key={index}
      className={`${
        //hangi yazı üzerinde ise onun style'ı
        index === wordIndex
          ? "bg-slate-200 text-white m-3 rounded-md py-1"
          : "text-indigo-300 m-3 py-1"
      }
    
      // correct or wrong style
      ${letter.status === "wrong" ? "text-red-500" : ""}
       ${letter.status === "correct" ? "text-green-500" : ""}
          `}
    >
      {letter[selectedLang ? selectedLang : lang[0]]}{" "}
    </span>
  );
}

function TextArea() {
  const words = useSelector((state) => state.typingSpeed.words);

  return (
    <div className="flex items-center justify-center mt-40 overflow-hidden h-28 p-2">
      <div className=" border-indigo-300 border-4 border-double w-1/2 h-full text-4xl py-2 rounded-xl overflow-hidden">
        {words.map((letter, index) => {
          return (
            <Word index={index} key={index} letter={letter} words={words} />
          );
        })}
      </div>
    </div>
  );
}

export default TextArea;
