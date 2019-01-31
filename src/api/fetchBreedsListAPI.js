export const fetchBreedsListAPI = async () => {
    try { // try to get data
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (response.ok) { // check if status code is 200
            const data = await response.json();
            return data.breeds;
        }
    } catch (e) { // code will jump here if there is a network problem
        alert('Sorry, can not load the data')
    }
}