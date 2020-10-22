import { DateTime } from 'luxon'
import calendarGridGenerator from './calendarGridGenerator'

describe('calendarGridGenerator', () => {
  describe('jul grid', () => {
    const currentUtcData = DateTime.utc(2020, 7)
    const calendar = calendarGridGenerator(currentUtcData)

    it('should return length of 6 in last week', () => {
      expect(calendar[calendar.length - 1].length).toBe(6)
    })

    it('should return length of 5 in weeks', () => {
      expect(calendar.length).toBe(5)
    })

    it('should return 3 empty date in first week', () => {
      const numberOfEmptyDates = calendar[0].filter((date) => date === '')

      expect(numberOfEmptyDates.length).toBe(3)
    })
  })
})
