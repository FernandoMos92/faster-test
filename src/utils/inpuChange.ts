export const inputchange = (state, stateSet, callBack?) => ({ target: { name, value } }) => {
  stateSet({ ...state, [name]: value })
  if (callBack) callBack()
}
