import { createSlice } from "@reduxjs/toolkit";
import words from "./words.json";

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    words: words.words,
    lang: ["targetWord", "englishWord"],
    selectedLang: "targetWord",
    inputText: "",
    targetWord: "",
    englishWord: "",
    typingSpeed: 0,
    correctWord: 0,
    wrongWord: 0,
    wordIndex: 0,
    key: 60, 
    start: false,
  },
  reducers: {
    // setKey: (state) => {
    //     state.key = true
    // },
    setSelectedLang: (state, action) => {
      const langFind = state.lang.find((item) => item === action.payload);
      console.log("langFind", langFind);
      state.selectedLang = langFind;
      // state.start = true;
      // // state.key = 60;
    },
    //inputa yazı yazılmaya basladıgında çalısacak func.
    setInputText: (state, action) => {
      state.start = true;

      const text = action.payload.trim();
      if (text) {
        state.inputText = action.payload;
      } else {
        state.inputText = "";
      }
      console.log("action.payload", action.payload);
    },
    setKeyPress: (state) => {
      const currentText = state.words[state.wordIndex];

      if (state.inputText.trim() === currentText.targetWord) {
        state.correctWord++;
        console.log("correctWord ", state.correctWord);
      } else {
        state.wrongWord++;
        console.log("wrongword ", state.wrongWord);
      }
      state.wordIndex++;
      state.inputText = ""; //her bosluktan sonra inputu bosalt
    },
  },
});

export const { setKey, setSelectedLang, setInputText, setKeyPress } =
  typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;
