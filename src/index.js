console.log('%c HI', 'color: firebrick')

const imagesContainer = document.querySelector('#dog-image-container');
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const createHtml = (item) => {
    return `<img src="${item}" height="300px" alt="dog">`;
}



window.addEventListener('DOMContentLoaded', async (event) => {
    const serverResponse = await getData(imgUrl);
    const dogImages = serverResponse.message;
    dogImages.forEach((item) => {
        imagesContainer.innerHTML += createHtml(item);
    });
})