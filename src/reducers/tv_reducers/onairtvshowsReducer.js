import { GET_ONAIR_TVSHOWS } from "../../actions/types";
const initialState = {
    onairTvshows: []
};
export default function onairTvshowsReducer (state = initialState, action)  {
    switch (action.type) {
        case GET_ONAIR_TVSHOWS:
            return {
                ...state,
                onairTvshows: action.payload
            };
        default:
            return state;
    }
};
