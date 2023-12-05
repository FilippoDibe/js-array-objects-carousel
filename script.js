const images = [
    {   image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {   
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    },
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    { 
        image: 'img/04.webp',
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const items = document.getElementsByClassName('item');
let activeIndex = 0;

const next = document.querySelector("#next");
const back = document.querySelector("#back");

// Popola il carosello con le immagini dall'array
images.forEach((img, index) => {
    const item = document.createElement('div');
    item.classList.add('item');
    if (index === 0) {
        item.classList.add('active');
    }

    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = `<img src="${img.image}" alt="${img.title}">`;
    thumbnail.addEventListener('click', () => showImage(index));

    item.innerHTML = `
        <img src="${img.image}" alt="${img.title}">
        <div class="info">
            <h2>${img.title}</h2>
            <p>${img.text}</p>
        </div>
    `;

    items[index] = item;
    document.querySelector('.container-items').appendChild(item);
    document.querySelector('.thumbnails-container').appendChild(thumbnail);
});

// Aggiungi il comportamento del carosello
next.addEventListener('click', showNext);
back.addEventListener('click', showPrev);

function showNext() {
    updateCarousel((activeIndex + 1) % items.length);
}

function showPrev() {
    updateCarousel((activeIndex - 1 + items.length) % items.length);
}

function showImage(index) {
    updateCarousel(index);
}

function updateCarousel(index) {
    items[activeIndex].classList.remove('active');
    document.querySelector('.thumbnails-container').querySelector('.thumbnail.active-thumbnail').classList.remove('active-thumbnail');

    activeIndex = index;

    items[activeIndex].classList.add('active');
    document.querySelector('.thumbnails-container').querySelectorAll('.thumbnail')[activeIndex].classList.add('active-thumbnail');
}
