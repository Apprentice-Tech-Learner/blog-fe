import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: null,
    commentsData: null,
    commentLengthData: 0,
};

const detailPostSlice = createSlice({
    name: 'detailPostReducer',
    initialState: initialState,
    reducers: {
        setDetailPostData: (state, action) => {
            state.postData = action.payload;
        },
        setDetailCommentsData: (state, action) => {
            state.commentsData = action.payload;
        },
        setDetailCommentsLengthData: (state, action) => {
            state.commentLengthData = action.payload;
        },
        initializeDetail: () => initialState,
    },
});

export const { setDetailPostData, setDetailCommentsData, setDetailCommentsLengthData, initializeDetail } = detailPostSlice.actions;
export const detailPostReducer = detailPostSlice.reducer;
