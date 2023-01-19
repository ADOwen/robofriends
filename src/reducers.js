import { 
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  CHANGE_SEARCH_FIELD 
} from "./constants"

// state
const initialStateSearch = {
  searchField: '',
}

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: ''
}

// reducer
export const searchRobots = (state=initialStateSearch, action={}) => {
 switch(action.type) {
  case CHANGE_SEARCH_FIELD:
    return {...state, searchField: action.payload };
  default:
    return state;
 }
}

export const requestRobots = (state= initialStateRobots, action={}) => {
  switch(action.type){
    case REQUEST_ROBOTS_PENDING:
      return {...state, isPending: true};
    case REQUEST_ROBOTS_SUCCESS:
      return {...state, robots: action.payload, isPending: false};
    case REQUEST_ROBOTS_FAILED:
      return {...state, error: action.payload, isPending: false};
    default:
      return state;
  }
}