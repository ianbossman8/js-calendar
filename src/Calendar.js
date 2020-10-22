import React from 'react'

import './Calendar.css'

function Calendar({ calendar, currentUtcData }) {
  return (
    <table className="calendar">
      <caption>
        <span>{currentUtcData.monthShort}</span>
        <span>{currentUtcData.year}</span>
      </caption>
      <thead>
        <tr>
          <td>Su</td>
          <td>Mo</td>
          <td>Tu</td>
          <td>We</td>
          <td>Th</td>
          <td>Fr</td>
          <td>Sa</td>
        </tr>
      </thead>
      <tbody>
        {calendar.map((week, i) => (
          <tr key={`week${i}`}>
            {week.map((date, i) => (
              <td
                key={`${date}${i}`}
                className={currentUtcData.day === date ? 'todays-date' : ''}
              >
                {date}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Calendar
