const tempReducer = (state = true, action) => {
  switch (action.type) {
      case 'CONVERT_TEMPERATURE':
          return !state
      default:
          return state
  }
}

export default tempReducer