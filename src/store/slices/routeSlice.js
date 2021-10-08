import { createSlice } from '@reduxjs/toolkit'

const routeSlice = createSlice({
  name: 'detailIngredient',
  initialState: {
    route: [],
  },
  reducers: {
    addPointToRoute(state, action) {
      state.route.push(action.payload)
    },
    removePointFromRoute(state, action) {
      state.route = [...state.route].filter((point) => point._id !== action.payload._id)
    },
    clearRoute(state) {
      state.route = []
    }
  },
})

export const {
  addPointToRoute,
  removePointFromRoute,
  clearRoute,
} = routeSlice.actions

export const selectRouteSlice = state => state.route

export default routeSlice.reducer
