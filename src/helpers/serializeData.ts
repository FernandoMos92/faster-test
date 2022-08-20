import generateSchudele from '../utils/generateSchudele'

function serializeData () {
  const result = []
  const date = generateSchudele()
  const arrayDate = Object.values(date)
  arrayDate[0].map((hour) => {
    const splitDate = hour.split(' ')
    if (splitDate[0].length === 1) {
      const resultDate = `${splitDate[0]}:00 ${splitDate[1].toUpperCase()}`
      result.push(resultDate)
    } else {
      const resultDate = `${splitDate[0]}:00 ${splitDate[1].toUpperCase()}`
      result.push(resultDate)
    }
    return result
  })

  return result
}

export default serializeData
