import { createSlice } from "@reduxjs/toolkit";
import words from "./words.json"

export const typingSpeedSlice = createSlice({
    name: "typingSpeed",
    initialState: {
        words: words.words,
        lang: [ "targetWord" ,  "englishWord"],    
        selectedLang: "targetWord",
        inputText:"",
        key: 0,

    },
    reducers: {
        setKey: (state) => {
            state.key += 1
        },
        setSelectedLang: (state, action) => {
            const langFind = state.lang.find(item => item === action.payload);
            console.log('langFind', langFind);
            state.selectedLang = langFind;
        },
        setInputText: (state, action) => {
            state.inputText = action.payload;
            console.log('action.payload :>> ', action.payload);
        }
    },
})

export const { setKey, setSelectedLang, setInputText } = typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;