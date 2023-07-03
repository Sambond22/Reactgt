import { configureStore } from '@reduxjs/toolkit'
import Counterslice from './slices/Counterslice'
export const store = configureStore({
  reducer: {
    counter:Counterslice
  },
})