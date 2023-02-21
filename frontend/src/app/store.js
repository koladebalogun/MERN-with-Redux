import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { quotesApi } from "../features/quotes/quoteServices";

const store = configureStore({
    reducer:{
        auth:authReducer,
        [quotesApi.reducerPath]: quotesApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quotesApi.middleware)
})

export default store;