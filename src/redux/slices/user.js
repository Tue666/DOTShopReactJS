import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: false,
    user: {}
};

const slide = createSlice({
    name: 'account',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        hasError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        getUser: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.isLoading = false;
            state.user = {}
        }
    }
});

export const {
    startLoading,
    hasError,
    getUser,
    removeUser
} = slide.actions; 
export default slide.reducer;
