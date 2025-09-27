import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice.js'

export const store = configureStore({
  reducer: {
    counter : counterSlice
  },
})