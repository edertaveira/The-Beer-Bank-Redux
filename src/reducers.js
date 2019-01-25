
const INITIAL_STATE = {
    data: [],
    isFetching: false
}

export const reducer = (state = INITIAL_STATE, action) => {
    
    if (action.type === 'LOAD_BEERS_REQUEST') {
        return {...state,
            isFetching: true,
            data: []}
    } else if (action.type === 'LOAD_BEERS_SUCCESS') {
        return {...state,
            isFetching: false,
            data: action.data
        }
    }
    return state;

}