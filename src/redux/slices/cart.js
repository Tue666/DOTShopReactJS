import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import cartApi from '../../apis/cartApi';

const initialState = {
    cart: null,
    totalItem: 0
};

export const getCart = createAsyncThunk('cart/getCart', async () => {
    const res = await cartApi.getCart();
    return res;
});

const slide = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        onToggleSuccess: (state, action) => {
            const { _id, isCheckedAll } = action.payload;
            let newCart = [];
            // _id null will toggle all checkboxes
            if (!_id) {
                newCart = state.cart.map(item => ({ ...item, checked: isCheckedAll }));
            } else {
                newCart = state.cart.map(item => item._id === _id ? { ...item, checked: !item.checked } : item);
            }
            return {
                ...state,
                cart: newCart
            };
        },
        removeCartSuccess: (state, action) => {
            const _id = action.payload;
            let newCart = null;
            // _id null will remove all checked boxes
            if (!_id) {
                newCart = state.cart.filter(item => !item.checked);
            } else {
                newCart = state.cart.filter(item => item._id !== _id);
            }
            return {
                ...state,
                cart: newCart,
                totalItem: newCart ? newCart.length : 0
            }
        },
        deleteCart: (state) => {
            state.cart = null;
            state.totalItem = 0
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
                const {
                    cart,
                    totalItem
                } = action.payload;
                state.cart = cart;
                state.totalItem = totalItem;
            })
            .addDefaultCase(state => state)
    }
});

export const {
    deleteCart
} = slide.actions;

export default slide.reducer;

export const toggleCheck = params => async dispatch => {
    try {
        const { cartId, isCheckedAll } = params;
        const res = await cartApi.toggleCheck(cartId, isCheckedAll);
        dispatch(slide.actions.onToggleSuccess({
            _id: res._id,
            isCheckedAll
        }));
    } catch (error) {
        console.log(error);
    }
};

export const removeCart = cartId => async dispatch => {
    try {
        const res = await cartApi.removeCart(cartId);
        dispatch(slide.actions.removeCartSuccess(res._id));
    } catch (error) {
        console.log(error);
    }
};