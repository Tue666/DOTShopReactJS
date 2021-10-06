import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// slides
import userReducer from './slices/user';

const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'persis-',
    whitelist: []
};

const userPersistConfig = {
    key: 'user',
    storage,
    keyPrefix: 'persis-',
    whitelist: ['user']
};

const rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer)
});

export { rootPersistConfig, rootReducer };
