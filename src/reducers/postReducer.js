import { FETCH_BREEDS, FETCH_IMAGES } from '../actions/types';

const initialState = {
    breedsList: null,
    selectedBreed: null,
    imageUrl: require('../../assets/custom.jpg'),
   error: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_BREEDS:
            return {
                ...state,
                breedsList: action.payload
            }
        default :
        return state;
    }
}