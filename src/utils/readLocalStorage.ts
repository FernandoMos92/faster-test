export default function readLocalStorage () {
  const data = localStorage.getItem('events')
  if (data) {
    return JSON.parse(data)
  } return []
}
