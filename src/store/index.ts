import { configureStore } from "@reduxjs/toolkit";

import {
    authReducer,
    themeModeReducer
} from "./common";

import {
    writePostReducer,
} from "./post";

import {
    mainNavBarReducer,
} from "./navbar";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        darkMode: themeModeReducer,
        writePost: writePostReducer,
        navBar: mainNavBarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
