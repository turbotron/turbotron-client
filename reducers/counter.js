import { INCREMENT_COUNTER } from '../constants/ActionTypes';

const initialState = 42;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state
  }
}
