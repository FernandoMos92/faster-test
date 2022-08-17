const generateSchudele = () => {
  const timeAM = []
  const timePM = []
  const fractionMinute = [30, 60]
  const maxNumber = 12

  for (let index = 1; index <= maxNumber; index += 1) {
    timeAM.push(`${index} am`)
    timePM.push(`${index} pm`)
  }

  const result = {
    hours: [...timeAM, ...timePM],
    minutes: fractionMinute
  }

  return result
}

export default generateSchudele

// 12AM 1PM 12PM 1AM
