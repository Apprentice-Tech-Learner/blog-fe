import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    content: '',
    thumbnail: '',
    tags: [],
    seriesId: null,
    uploadType: 1,
    uploadUrl: 'title',
    description: '',
    isUploadModal: false,
    isSeriesList: false,
}

const writePostSlice = createSlice({
    name: 'writePostReducer',
    initialState: initialState,
    reducers: {
        setWritePost: (state, action) => {
            // @ts-ignore
            state[action.payload.type] = action.payload.value;
        },
        initialize: () => initialState,
    },
});

export const { setWritePost, initialize } = writePostSlice.actions;
export const writePostReducer = writePostSlice.reducer;
