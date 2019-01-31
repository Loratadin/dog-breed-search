export const fetchImageAPI = async () => {
    const response = await fetch(`https://dog.ceo/api/breed/${props.breed}/images/random`);
    if (response.ok) { // check if status code is 200
        const data = await response.json();
        return data.imageUrl;
    }
}
