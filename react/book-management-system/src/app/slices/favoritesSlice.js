import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        list: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            const exists = state.list.some((b) => b.id === action.payload.id);
            if (!exists) state.list.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.list = state.list.filter((b) => b.id != action.payload);
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
