import { configureStore } from "@reduxjs/toolkit";

import {
    authReducer,
    themeModeReducer
} from "./common";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        darkMode: themeModeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
