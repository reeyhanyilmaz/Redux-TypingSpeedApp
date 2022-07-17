import { createSlice } from "@reduxjs/toolkit";

export const typingSpeedSlice = createSlice({
    name: "typingSpeed",
    initialState: {
        typingSpeed: "",
        key: 0,
    },
    reducers: {
        setKey: (state, action) => {
            state.key += 1

        }
    },
})

export const { setKey } = typingSpeedSlice.actions;
export default typingSpeedSlice.reducer;