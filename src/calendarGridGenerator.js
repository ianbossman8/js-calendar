import { DateTime } from 'luxon'

function weekDateofFirstDay(currentUtcData) {
  return DateTime.utc(currentUtcData.year, currentUtcData.month, 1).weekday
}

function calendarGridGenerator(currentUtcData) {
  const dates = []

  const numberOfEmptyDates = weekDateofFirstDay(currentUtcData)
  const numberOfWeeks = Math.ceil(currentUtcData.daysInMonth / 7)

  let currentDate = 1

  for (let i = 0; i < numberOfWeeks; i++) {
    dates[i] = []

    if (numberOfEmptyDates !== 7 && i === 0) {
      for (let j = 0; j < numberOfEmptyDates; j++) {
        dates[i][j] = ''
      }

      for (let k = numberOfEmptyDates; k < 7; k++) {
        dates[i][k] = currentDate
        currentDate++
      }
    } else {
      for (let j = 0; j < 7; j++) {
        if (currentDate > currentUtcData.daysInMonth) {
          break
        }

        dates[i][j] = currentDate
        currentDate++
      }
    }
  }

  return dates
}

export default calendarGridGenerator
export { weekDateofFirstDay }
