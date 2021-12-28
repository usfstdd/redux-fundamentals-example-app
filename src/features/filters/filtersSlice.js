initialstate = {
    status: 'all',
    colors: []
}

export default function filtersReduce(state = initialstate, action) {
    switch (action) {
        case 'filter/statusFilterChanged': {
            return {
                ...state,
                status: action.payload
            }


        }
        default:
            return state
    }
}