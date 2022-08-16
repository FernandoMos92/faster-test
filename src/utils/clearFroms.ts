function clearForms (evt) {
  evt.preventDefault()
  const allInput = document.querySelectorAll('input')
  const allTextArea = document.querySelectorAll('textarea')
  const allSelect = document.querySelectorAll('select')
  allInput.forEach((input) => (
    input.value = ''
  ))
  allTextArea.forEach((input) => (
    input.value = ''
  ))
  allSelect.forEach((input) => (
    input.value = ''
  ))
}

export default clearForms
