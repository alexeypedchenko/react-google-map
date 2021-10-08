import React from 'react'
import styles from './Route.module.css'
// redux
import { useSelector, useDispatch } from 'react-redux'
import {
  clearRoute,
  removePointFromRoute,
  selectRouteSlice,
} from '../../store/slices/routeSlice'

const Route = () => {
  const dispatch = useDispatch()
  const { route } = useSelector(selectRouteSlice)

  return (
    <div className={styles.route}>
      <ul className={styles.list}>
        {route.map((item) => (
          <li
            key={item._id}
            className={styles.item}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {item.name}
            <button
              style={{marginTop: 10}}
              onClick={() => {dispatch(removePointFromRoute(item))}}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => {dispatch(clearRoute())}}>
        clear route
      </button>
    </div>
  )
}

export default Route
