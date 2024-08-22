import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating state here means directly modifying our states(data)
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop(0);
    },
    clearCart: (state) => {

      //Redux Toolkit says either mutate the current state or return a new state
      state.items.length = 0;
      //console.log(current(state));  import { current } from "@reduxjs/toolkit"
    },
  },
});


// here we are extracting particulat actions and exporting them from 
// cardSlice.actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
//this reducer is the combination of the above reducers method
