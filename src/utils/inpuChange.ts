export const inputchange = (state, stateSet) => ({ target: { name, value } }) => {
  stateSet({ ...state, [name]: value })
}
