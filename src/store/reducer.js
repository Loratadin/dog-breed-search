import * as actionTypes from './actions';

const customImage = './assets/custom.jpg';

const initialState = {
    breedsList: null,
    selectedBreed: null,
    imageUrl: customImage,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_BREEDS:
            return {
                ...state,
                breedsList: action.payload
            }
        case actionTypes.SELECT_BREED:
            return {
                ...state,
                selectedBreed: action.payload,
            }
        case actionTypes.FETCH_IMAGES:
            return {
                ...state,
                imageUrl: action.payload
            }
        default: 
            return state;
    }
}

export default reducer
