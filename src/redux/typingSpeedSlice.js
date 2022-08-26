import { createSlice } from "@reduxjs/toolkit";
import words from "./words.json"

export const typingSpeedSlice = createSlice({
    name: "typingSpeed",
    initialState: {
        words: words.words,
        lang: [ "targetWord" ,  "englishWord"],    
        selectedLang: "targetWord",
        inputText:"",
        targetWord: "",
        englishWord: "",
        typingSpeed: 0,
        isCorrect: [],
        isWrong: [],       
        key: 60,
        wordIndex: 0,
        start: false,
    },
    reducers: {
        // setKey: (state) => {
        //     state.key = true
        // },
        setSelectedLang: (state, action) => {
            const langFind = state.lang.find(item => item === action.payload);
            console.log('langFind', langFind);
            state.selectedLang = langFind;
        },
        setInputText: (state, action) => {
            //inputa yazı yazılmaya basladıgında çalısacak func.
            state.start = true;
           
            const text = action.payload.trim();
            if(text){
                state.inputText = action.payload;
            }else{
                state.inputText = ""
            }
            console.log('action.payload', action.payload);
        },
    },
})

export const { setKey, setSelectedLang, setInputText } = typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;