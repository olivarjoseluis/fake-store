import { configureStore } from "@reduxjs/toolkit";
import modeSliceReducer from './features/mode-theme/modeSlice';

export const store = configureStore({
  reducer: {
    modeslice: modeSliceReducer
  }
})