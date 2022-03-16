// thunk call to fetch movie list
import {
    GET_DATA,
    FILTER_DATA
} from "./actionTypes.js";

export const getMovieData = (result) => ({
    type: GET_DATA,
    payload: result
});

// action object for filter  feature

export const filterByGenre = (generation) => ({
    type: FILTER_DATA,
    payload: generation
});
