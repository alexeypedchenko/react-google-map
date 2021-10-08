import { createSlice } from '@reduxjs/toolkit'

import { points } from '../../utils/db'

const pointSlice = createSlice({
  name: 'detailIngredient',
  initialState: {
    points: [...points],
    activePoint: null,
    hoveredPoint: null,
  },
  reducers: {
    setActivePoint(state, action) {
      state.activePoint = action.payload
    },
    setHoveredPoint(state, action) {
      state.hoveredPoint = action.payload
    },
    setFiltredPoints(state, action) {
      state.filtredPoints = [...action.payload]
    }
  },
})

export const {
  setHoveredPoint,
  setActivePoint,
} = pointSlice.actions

export const selectPointSlice = state => state.point

export default pointSlice.reducer
