import { configureStore } from "@reduxjs/toolkit";

import {
    authReducer,
    themeModeReducer
} from "./common";

import {
    writePostReducer,
} from "./post";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        darkMode: themeModeReducer,
        writePost: writePostReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
