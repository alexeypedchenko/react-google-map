import React from 'react'
import styles from './Point.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectPointSlice } from '../../store/slices/pointSlice'
import { addPointToRoute } from '../../store/slices/routeSlice'

const Point = (props) => {
  const dispatch = useDispatch()
  const {
    point,
    index,
    ...otherProps
  } = props
  const {
    activePoint,
    hoveredPoint,
  } = useSelector(selectPointSlice)

  const addToRoute = (event) => {
    event.stopPropagation()
    dispatch(addPointToRoute(point))
  }

  return (
    <div
      {...otherProps}
      className={`
        ${styles.point}
        ${activePoint === index ? styles.active : ''}
        ${hoveredPoint === index ? styles.hovered : ''}
      `}
    >
      <span className={styles.name}>
        {point.name}
      </span>
      <button onClick={addToRoute}>
        add to route
      </button>
    </div>
  )
}

export default Point
