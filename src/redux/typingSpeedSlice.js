import { createSlice } from "@reduxjs/toolkit";
import words from "../words.json";
import shuffle from "../shuffle"

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState: {
    words: shuffle(words.words),
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
    setReplay: (state) => {
      state.inputText = ""
      state.correctWord = 0
      state.wrongWord = 0
      state.key = 60
      state.words = shuffle(state.words)
      state.start = false
    }
  },
});

export const { setKey, setSelectedLang, setInputText, setKeyPress, setReplay } =
  typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;
