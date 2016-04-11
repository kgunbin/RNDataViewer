import  TOGGLE_SELECT  from '../actions/types';

export function selection(state = [], action) {
  switch (action.type) {
    case TOGGLE_SELECT:
      var idx = state.indexOf(action.id);
      if (idx > -1) {
        return state.filter((v, i) => (i !== idx))

      } else {
        return [
          ...state,
          action.id
        ]
      }
      break;
    default:
      return state;
  }
}
