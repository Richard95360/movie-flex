import { GET_TV_CASTS } from "../../actions/types";
const initialState = {
    tvcasts: []
};
export default function tvcastsReducer (state = initialState, action) {
    switch (action.type) {
        case GET_TV_CASTS:
            return {
                ...state,
                tvcasts: action.payload
            };
        default:
            return state;
    }
};