import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
function TextArea() {
  const words = useSelector((state) => state.typingSpeed.words);
  const wordIndex = useSelector((state) => state.typingSpeed.wordIndex);
  const selectedLang = useSelector((state) => state.typingSpeed.selectedLang);
  console.log("selectedLang ", selectedLang);

  const currentWord = useRef();

  useEffect(() => {
    if (wordIndex) {
      currentWord.current.scrollIntoView();
    }
  }, [wordIndex]);

  return (
    <div className="flex items-center justify-center mt-40">
      <div className="border-indigo-300 border-4 border-double rounded-xl w-1/2 h-40 p-3">
        {words.map((letter, index) => {
          return (
            <span
              ref={index === currentWord ? currentWord : null}
              key={index}
              className="text-indigo-300"
            >
              {letter[selectedLang]}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TextArea;
