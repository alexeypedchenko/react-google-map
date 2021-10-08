import React from 'react'
import { useSelector } from 'react-redux'
import GoogleMap from '../google-map/GoogleMap'
import PointList from '../point/point-list/PointList'
import Route from '../route/Route'
import { selectRouteSlice } from '../../store/slices/routeSlice'

const index = () => {
  const { route } = useSelector(selectRouteSlice)

  return (
    <div>
      <h1 style={{marginTop: 20}}>
        Hello from home page!
      </h1>
      {route.length !== 0 && (
        <Route />
      )}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <PointList />
        <GoogleMap />
      </div>
    </div>
  )
}

export default index
