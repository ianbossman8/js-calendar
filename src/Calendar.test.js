import React from 'react'
import { DateTime } from 'luxon'
import { render, screen } from '@testing-library/react'
import calendarGridGenerator, {
  weekDateofFirstDay,
} from './calendarGridGenerator'
import Calendar from './Calendar'

describe('Calendar Component', () => {
  const currentUtcData = DateTime.utc(2020, 6)
  const calendar = calendarGridGenerator(currentUtcData)

  it('should return 6 rows', () => {
    render(<Calendar calendar={calendar} currentUtcData={currentUtcData} />)
    const trElement = screen.getAllByRole('row')
    const expectedNumberOfRows = calendar.length + 1

    expect(trElement).toHaveLength(expectedNumberOfRows)
  })

  it('should return the correct cells', () => {
    render(<Calendar calendar={calendar} currentUtcData={currentUtcData} />)
    const tdElement = screen.getAllByRole('cell')
    const expectedNumberOfCells =
      currentUtcData.daysInMonth + 7 + weekDateofFirstDay(currentUtcData)

    expect(tdElement).toHaveLength(expectedNumberOfCells)
  })
})
