const generateSchudele = () => {
  const timeAM = []
  const timePM = []
  const fractionMinute = []
  const maxHour = 12
  const maxMinute = 60

  for (let index = 1; index <= maxHour; index += 1) {
    timeAM.push(`${index} am`)
    timePM.push(`${index} pm`)
  }

  for (let index = 0; index <= maxMinute; index += 1) {
    fractionMinute.push(index)
  }

  const result = {
    hours: [...timeAM, ...timePM],
    minutes: fractionMinute
  }

  return result
}

export default generateSchudele

// 12AM 1PM 12PM 1AM
