import * as types from './types';

export function select(id) {
  return {
    type: types.TOGGLE_SELECT,
    id: id
  }
}
