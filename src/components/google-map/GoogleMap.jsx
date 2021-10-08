import React, { useEffect, useState } from 'react'
import styles from './GoogleMap.module.css'
import { GoogleMap as GMap } from '../../services/google/GoogleMap'
import { usePrevious } from '../../hooks/usePrevious'
// redux
import { useSelector, useDispatch } from 'react-redux'
import {
  selectPointSlice,
  setActivePoint,
  setHoveredPoint,
} from '../../store/slices/pointSlice'
import { selectRouteSlice } from '../../store/slices/routeSlice'

const GoogleMap = () => {
  const dispatch = useDispatch()
  const { points, activePoint, hoveredPoint } = useSelector(selectPointSlice)
  const { route } = useSelector(selectRouteSlice)

  const {
    previous: previousHoveredPoint,
    current: currentHoveredPoint,
  } = usePrevious(hoveredPoint)
  const [map, setMap] = useState(null)

  useEffect(() => {
    const gmap = new GMap('#map', {
      onMarkerClick: (index) => { dispatch(setActivePoint(index)) },
      onMarkerHover: (index) => { dispatch(setHoveredPoint(index)) },
    })
    gmap.init().then(() => {
      gmap.setMarkers(points)
    })
    setMap(gmap)
  }, [])

  useEffect(() => {
    if (!map) return
    map.setMarkers(points)
  }, [points])

  useEffect(() => {
    if (!map) return
    if (previousHoveredPoint !== null && currentHoveredPoint === null) {
      map.removeLastMarker()
      return
    }
    if (previousHoveredPoint === null && currentHoveredPoint !== null) {
      map.handleCreateMarker(points[hoveredPoint])
      return
    }
  }, [hoveredPoint])

  useEffect(() => {
    if (!map) return

    if (!route.length) {
      map.route.clear()
    }

    map.route.draw(route)
  }, [route])

  const centeredMap = () => {
    map.centeredMap()
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div>
          <h2>
            Google map
          </h2>
          <p>active: {activePoint}</p>
          <p>hovered: {hoveredPoint}</p>
          <button onClick={centeredMap}>
            centeredMap
          </button>
        </div>

        {activePoint !== null && (
          <div className={styles.item}>
            <p>{points[activePoint].name}</p>
            <button onClick={() => {dispatch(setActivePoint(null))}}>
              close
            </button>
          </div>
        )}
      </div>

      <div id="map" className={styles.map}></div>
    </div>
  )
}

export default GoogleMap
