import { FETCH_BREEDS, FETCH_IMAGES } from '../actions/types';

export const fetchBreeds = ()  => async dispatch => {
    try { // try to get data
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (response.ok) { // check if status code is 200
            const data = await response.json();
            data => dispatch({
                type: FETCH_BREEDS,
                payload: breeds
            })
                // breedsList: Object.keys(data.message)
        } else {
            this.setState({
                error: true
            })
            alert('Sorry, can not load the data')
        }
    } catch (e) { // code will jump here if there is a network problem
        this.setState({
            error: true
        })
        alert('Sorry, can not load the data')
    }
}
