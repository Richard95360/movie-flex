import { GET_TVREVIEWS } from "../../actions/types";
const initialState = {
    tvreviews: []
};
export default function tvreviewsReducer (state = initialState, action){
    switch (action.type) {
        case GET_TVREVIEWS:
            return {
                ...state,
                tvreviews: action.payload
            };
        default:
            return state;
    }
};
