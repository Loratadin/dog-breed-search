export const FETCH_BREEDS = 'FETCH_BREEDS';
export const RECEIVE_BREEDS = 'RECEIVE_BREEDS';
export const FETCH_IMAGE = 'FETCH_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export const requestBreeds = () => ({
    type: FETCH_BREEDS,
});

export const receiveBreeds = payload => ({
    type: RECEIVE_BREEDS,
    payload: payload
});

export const requestImage = event => ({
    type: FETCH_IMAGE,
    selectedBreed: event.target.value
});

export const receiveImage = payload => ({
    type: RECEIVE_IMAGE,
    payload: payload
});