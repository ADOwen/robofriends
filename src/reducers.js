import { CHANGE_SEARCH_FIELD } from "./constants";

// state
const initialState = {
  searchField: ''
}

// reducer
export const searchRobots = (state=initialState, action={}) => {
 switch(action.type) {
  default:
    return state;
  case CHANGE_SEARCH_FIELD:
    return {...state, searchField: action.payload };
 }
}