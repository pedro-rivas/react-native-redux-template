import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementBy10(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    //others reducers
  },
});

export const { incremented, decrement, incrementBy10 } = counterSlice.actions;
export default counterSlice.reducer;