import { configureStore } from "@reduxjs/toolkit";

import { themeModeReducer } from "./common";

export const store = configureStore({
    reducer: {
        darkMode: themeModeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
