function generateHour (variable) {
  const amountHours = 12
  for (let index = 1; index <= amountHours; index += 1) {
    variable.push(index)
  }
  return variable
}

function generateMinute (variable) {
  const amountMinutes = 60
  for (let index = 0; index <= amountMinutes; index += 1) {
    variable.push(index)
  }
  return variable
}

export {
  generateHour,
  generateMinute
}
