// export const fetchImageAPI = async (event) => {
//     const breed = event.target.value
export const fetchImageAPI = async () => {
    const breed = "akita"
    try { // try to get data
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        if (response.ok) { // check if status code is 200
            const data = await response.json();
            return data.message;
        }
    } catch (e) { // code will jump here if there is a network problem
        alert('Sorry, can not get the image')
    }
}
