import readLocalStorage from './readLocalStorage'

export default function saveLocalStorage (input) {
  const database = readLocalStorage()
  if (database) {
    return localStorage.setItem('events', JSON.stringify([...database, input]))
  }

  return localStorage.setItem('events', JSON.stringify([input]))
}
