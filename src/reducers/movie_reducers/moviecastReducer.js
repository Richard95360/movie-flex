import { GET_MOVIE_CASTS } from "../../actions/types";
const initialState = {
  moviecasts: []
};
export default function moviecastReducer (state = initialState, action)  {
  switch (action.type) {
    case GET_MOVIE_CASTS:
      return {
        ...state,
        moviecasts: action.payload
      };
    default:
      return state;
  }
};
