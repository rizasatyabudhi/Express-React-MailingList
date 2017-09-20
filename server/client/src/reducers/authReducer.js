// authReducer is to decide wether or not a user is currently logged in or not
import { FETCH_USER } from "../actions/types";

// when the application first boots up, the state is null (no clue if the user is logged in or not)
// null = we don't know our current status (logged in or not)
// action.payload = logged in
// false = not logged in
export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
