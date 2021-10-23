import { combineReducers } from 'redux';

// slides
import userReducer from './slices/user';
import cartReducer from './slices/cart';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export { rootReducer };
