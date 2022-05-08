import actions from "../actions/actions";
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case actions.INCREMENT.SUCCESS:
      return { value: state.value + 1 }
    case actions.DECREMENT.SUCCESS:
      return { value: state.value - 1 }
    case actions.INCREMENT_BY_NUMBER.SUCCESS:
      return { value: state.value + action.payload.value }
    case actions.DECREMENT_BY_NUMBER.SUCCESS:
      return { value: state.value -  action.payload.value  }
    default:
      return state
  }
}
export default counterReducer
