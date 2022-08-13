function getMonth (input) {
  const allMonth = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro'
  }

  return allMonth[input]
}

function getDay (input) {
  const allDays = {
    0: 'Domingo',
    1: 'Segunda-Feira',
    2: 'Terça-Feira',
    3: 'Quarta-Feira',
    4: 'Quinta-Feira',
    5: 'Sexta-Feira',
    6: 'Sabado'
  }

  return allDays[input]
}

function generateDate () {
  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const day = new Date().getDay()
  const year = new Date().getFullYear()

  const sliceNameMonth = getMonth(month).length >= 6 ? getMonth(month).slice(0, 3) : getMonth(month)

  const result = {
    nameMonth: getMonth(month),
    dayWeek: date,
    abbDate: `${getDay(day)} - ${date} de ${sliceNameMonth} - ${year}`
  }

  return result
}

export default generateDate
