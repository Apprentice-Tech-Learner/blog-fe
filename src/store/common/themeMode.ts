import { createSlice } from "@reduxjs/toolkit";

const themeModeSlice = createSlice({
    name: 'themeModeReducer',
    initialState: {
        isDarkMode: Boolean(localStorage.getItem('isDarkMode') === 'true'),
    },
    reducers: {
        darkMode: state => {
            localStorage.setItem('isDarkMode', String(true));
            state.isDarkMode = true;
            document.body.dataset.theme = 'dark';
        },
        lightMode: state => {
            localStorage.setItem('isDarkMode', String(false));
            state.isDarkMode = false;
            document.body.dataset.theme = 'light';
        },
    },
});

export const { darkMode, lightMode } = themeModeSlice.actions;
export const themeModeReducer = themeModeSlice.reducer;
