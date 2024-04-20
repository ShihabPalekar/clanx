import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CityState {
    city: string
  }
  
  const initialState: CityState = {
    city: "",
  }
  

export const citySlice = createSlice({
    initialState,
    name: "city",
    reducers: {
        updateCity: (state, action:PayloadAction<string>) => {
            state.city = action.payload
        }
    }
})

export const { updateCity } = citySlice.actions

export default citySlice.reducer