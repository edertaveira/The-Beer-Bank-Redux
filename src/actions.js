
import { Punkapi } from './api/Punkapi';

let page = 0;

export const handleFavorite = (value) => {
    return {
        type: 'HANDLE_FAVORITE',
        value
    }
}

export const checkFavorites = (value) => {
    return {
        type: 'CHECK_FAVORITES',
        value
    }
}

export const onClickBeer = (value) => {
    return {
        type: 'CLICK_BEER',
        value
    }
}

const loadBeersSuccess = (data) => {
    return {
        type: 'LOAD_BEERS_SUCCESS',
        data: data.data
    }
}
const loadBeersRequest = () => {
    return {
        type: 'LOAD_BEERS_REQUEST'
    }
}

export const loadBeers = () => {
    return dispatch => {
        dispatch(loadBeersRequest())
        Punkapi.getBeers(++page).then((data) => dispatch(loadBeersSuccess(data)));
    }
}