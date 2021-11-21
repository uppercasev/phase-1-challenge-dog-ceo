console.log('%c HI', 'color: firebrick')

const imagesContainer = document.querySelector('#dog-image-container');
const breedsList = document.querySelector('#dog-breeds');
const breedDropMenu = document.querySelector('#breed-dropdown');
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const createImgHtml = (item) => {
    return `<img src="${item}" height="300px" alt="dog">`;
}

const createListHtml = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item}`;
    listItem.style = "";
    listItem.onclick = function changeColor() {
        listItem.style = "color:orange"
    };
    return listItem;
}

window.addEventListener('DOMContentLoaded', async (event) => {
    const serverResponseImg = await getData(imgUrl);
    const dogImages = serverResponseImg.message;
    dogImages.forEach((item) => {
        imagesContainer.innerHTML += createImgHtml(item);
    });
    const serverResponseBreeds = await getData(breedUrl);
    const dogBreeds = serverResponseBreeds.message;
    for (const name in dogBreeds) {
        breedsList.appendChild(createListHtml(name));
    }
    breedDropMenu.addEventListener('change', () => {
        const firstLetter = breedDropMenu.value.toLowerCase();
        breedsList.querySelectorAll('li').forEach((item) => {
            if (firstLetter === "all" || item.innerText.toLowerCase().startsWith(firstLetter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        })
    })
})