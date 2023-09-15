import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
    name: 'authReducer',
    initialState: { member_id: '' },
    reducers: {
        setMemberId: (state, action) => {
            state.member_id = action.payload;
        },
    },
});

export const { setMemberId } = auth.actions;
export const authReducer = auth.reducer;
