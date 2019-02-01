import * as actionTypes from './actions';

const customImage = './assets/custom.jpg';

const initialState = {
    breedsList: [],
    selectedBreed: " ",
    imageUrl: customImage,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RECEIVE_BREEDS:
            return {
                ...state,
                breedsList: action.payload
            }
        // case actionTypes.FETCH_IMAGE:
        //     return {
        //         ...state,
        //         selectedBreed: action.selectedBreed
        //     }
        case actionTypes.SELECT_BREED:
            return {
                ...state,
                selectedBreed: action.selectedBreed
            }
        case actionTypes.RECEIVE_IMAGE:
            return {
                ...state,
                imageUrl: action.payload
            }
        default: 
            return state;
    }
}

export default reducer
