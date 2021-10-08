import React from 'react'
import Point from '../Point'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectPointSlice,
  setActivePoint,
  setHoveredPoint,
} from '../../../store/slices/pointSlice'

const PointList = () => {
  const {
    points,
    activePoint,
  } = useSelector(selectPointSlice)
  const dispatch = useDispatch()

  return (
    <div style={{minWidth: 200, marginRight: 20}}>
      {points.map((item, index) => (
        <Point
          key={item._id}
          point={item}
          index={index}
          onMouseEnter={() => dispatch(setHoveredPoint(index))}
          onMouseLeave={() => dispatch(setHoveredPoint(null))}
          onClick={() => dispatch(setActivePoint(index))}
        />
      ))}
      {activePoint !== null && (
        <button onClick={() => dispatch(setActivePoint(null))}>
          Clear active
        </button>
      )}
    </div>
  )
}

export default PointList
