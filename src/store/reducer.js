const initialState = {
    selectedBreed: null
}

const reducer =
     function selectBreed(state = initialState, action) {
        if (action.type === 'SELECT_BREED') {
            return {
                selectedBreed: state.breed
            };
        }
        return state;
     }
    

export default reducer;