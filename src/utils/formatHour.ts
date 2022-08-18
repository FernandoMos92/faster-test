
export const formatHour = ({ hour, minute }) => {
  const newHour = hour.split(' ')[0].length === 1 ? `0${hour.split(' ')[0]}` : hour.split(' ')[0].length
  const newMinute = minute.split(' ')[0].length === 1 ? `0${minute}` : minute
  return `${newHour} : ${newMinute} ${hour.split(' ')[1]}`
}
