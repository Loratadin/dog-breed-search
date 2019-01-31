export const FETCH_BREEDS = 'FETCH_BREEDS';
export const RECEIVE_BREEDS = 'RECEIVE_BREEDS';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const requestBreeds = payload => ({
    type: FETCH_BREEDS,
    payload: payload
});

export const receiveBreeds = payload => ({
    type: RECEIVE_BREEDS,
    payload: payload
});

export const requestImages = payload => ({
    type: FETCH_IMAGES,
    payload: payload
});

export const receiveImages = payload => ({
    type: RECEIVE_IMAGES,
    payload: payload
});