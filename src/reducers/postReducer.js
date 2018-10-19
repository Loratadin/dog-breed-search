import { FETCH_BREEDS, FETCH_IMAGES } from '../actions/types';

const initialState = {
    breedsList: null,
    selectedBreed: null,
    imageUrl: require('../../assets/custom.jpg'),
   error: false
}