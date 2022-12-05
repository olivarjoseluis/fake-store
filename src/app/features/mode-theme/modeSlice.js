import { createSlice } from "@reduxjs/toolkit";


let initialState = { mode: true };

if (localStorage.getItem('mode')) {
  initialState = { mode: (localStorage.getItem('mode') === 'true') }
}

export const modeSlice = createSlice({
  name: 'modeslice',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("mode", state.mode.toString());
    }
  }
})

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;