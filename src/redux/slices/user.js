import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import accountApi from '../../apis/accountApi';

const initialState = {
    user: null
};

export const getProfile = createAsyncThunk('user/getProfile', async () => {
    const user = await accountApi.getProfile();
    return user;
});

const slide = createSlice({
    name: 'account',
    initialState,
    reducers: {
        removeUser: (state) => {
            state.user = null
        }
    },
    extraReducers: {
        [getProfile.fulfilled]: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {
    removeUser
} = slide.actions;

export default slide.reducer;
