import { createSlice } from '@reduxjs/toolkit'

const locationSlice = createSlice({
  name: 'detailIngredient',
  initialState: {
    categories: [],
    places: [],
  },
  reducers: {
  },
})

export const {
  // ...reducers
} = locationSlice.actions

export const selectLocationSlice = state => state.location

export default locationSlice.reducer
