import { GET_POPULAR_MOVIES } from "../../actions/types";
const initialState = {
  popularMovies: []
};
export default function popularMoviesReducer (state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      };
    default:
      return state;
  }
};
