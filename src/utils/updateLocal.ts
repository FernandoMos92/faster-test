import readLocalStorage from './readLocalStorage'

function updateLocal (input) {
  const database = readLocalStorage()
  if (database) {
    database.forEach(element => {
      if (element.id === input.id) {
        return localStorage.setItem('events', JSON.stringify([input]))
      }
    })
  }
}

export default updateLocal
