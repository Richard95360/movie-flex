import { GET_TOP_RATED_MOVIES } from "../../actions/types";
const initialState = {
  topratedMovies: []
};
export default function topratedMoviesReducer (state = initialState, action)  {
  switch (action.type) {
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topratedMovies: action.payload
      };
    default:
      return state;
  }
};
