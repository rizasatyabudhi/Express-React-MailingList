import axios from "axios";
import { FETCH_USER } from "./types";

// export const fetchUser = () => {
//   return async function(dispatch) {
//   const res = await axios.get("/api/current_user")
//   dispatch({ type: FETCH_USER, payload: res })
//   };
// };

// if we only have 1 expression, we can remove the { } and the "return"
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
