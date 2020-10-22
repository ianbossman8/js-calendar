import React from 'react'
import ReactDOM from 'react-dom'
import { DateTime } from 'luxon'
import Calendar from './Calendar'
import calendarGridGenerator from './calendarGridGenerator'
import * as serviceWorker from './serviceWorker'

import './index.css'

const currentUtcData = DateTime.utc()
const calendar = calendarGridGenerator(currentUtcData)

ReactDOM.render(
  <React.StrictMode>
    <Calendar calendar={calendar} currentUtcData={currentUtcData} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
