const weatherReducer = (state = {}, action) => {
  switch (action.type) {
      case 'GET_CURRENT_WEATHER':
          return {
              ...state,
              current: action.payload
          }
      case 'GET_DAILY_FORECASTS':
          return {
              ...state,
              forecasts: action.payload
          }
      default:
          return state
  }
}

export default weatherReducer