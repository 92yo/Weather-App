const initialState = {
  isFetching: 0,
  text: '',
  locations: []
}
const autoCompleteReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_AUTOCOMPLETE_REQ':
          return {
              ...state,
              isFetching: state.isFetching + 1,
          }
      case 'GET_AUTOCOMPLETE_RES':
          return {
              ...state,
              isFetching: state.isFetching - 1,
              locations: action.payload
          }
      case 'RESET_AUTOCOMPLETE':
          return {
              ...state,
              text: '',
              locations: []
          }
      case 'SET_TEXT':
          return { ...state, text: action.payload }
      default:
          return state
  }
}

export default autoCompleteReducer