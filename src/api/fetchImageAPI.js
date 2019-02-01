export const fetchImageAPI = async (event) => {
    const breed = event.target.value
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    if (response.ok) { // check if status code is 200
        const data = await response.json();
        return data.message;
    }
}
