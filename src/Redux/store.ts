import {configureStore,combineReducers} from "@reduxjs/toolkit";
import formReducer from "../Redux/formSlice/formSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    form : formReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}



const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor= persistStore(store);

export type AppDispatch = typeof store.dispatch;