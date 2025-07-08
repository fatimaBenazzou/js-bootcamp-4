import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import favoritesReducer from "./slices/favoritesSlice.js";

export default configureStore({
    reducer: {
        auth: authReducer,
        favorites: favoritesReducer,
    },
});
