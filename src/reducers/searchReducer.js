import { GET_SEARCH_RESULTS } from "../actions/types";
const initialState = {
    searchResults: []
};
export default function searchReducer (state = initialState, action)  {
    switch (action.type) {

        case GET_SEARCH_RESULTS:
            console.log("In search reducer", action.payload);
            return {
                ...state,
                searchResults: action.payload
            };
        default:
            return state;
    }
};
