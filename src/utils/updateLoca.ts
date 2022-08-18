export default function updateLocal (input:any) {
  return localStorage.setItem('events', JSON.stringify(input))
}
