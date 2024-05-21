import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./ModalSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    modal:modalReducer
})

const persistConfig={
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        })
});

const persistor = persistStore(store);
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export {store,persistor};
export type {RootState,AppDispatch};

