import { GET_SIMILAR_TVSHOWS } from "../../actions/types";
const initialState = {
    similarTvshows: []
};
export default function similarTvShowsReducer (state = initialState, action)  {
    switch (action.type) {
        case GET_SIMILAR_TVSHOWS:
            console.log("similarMovies in reducer: ", action.payload);
            return {
                ...state,
                similarTvshows: action.payload
            };
        default:
            return state;
    }
};
