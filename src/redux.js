import { configureStore, createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name:"wish",
  initialState: [
    {id: 1, text:"Chapeau", done: false},
    {id: 2, text: "Aspirateur", done: false},
  ],
  reducers: { 
    addWish: (state, action) => {
      const newWish = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };
      state.push(newWish);
    },
    toggleWish: (state, action) => {
      const wish = state.find((t) => t.id === action.payload);
      wish.done = !wish.done;    
    },
    deleteWish: (state, action) => {
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const { addWish, toggleWish, deleteWish } = wishSlice.actions;

export const store = configureStore({
  reducer: {
    wish: wishSlice.reducer
  },
});