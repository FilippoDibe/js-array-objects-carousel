const images = [
    {
        image: 'img/01.webp',
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

let currentIndex = 0;

function showSlide(index) {
    const mainImage = document.getElementById('mainImage');
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    mainImage.src = images[index].image;
    mainImage.alt = images[index].title;
    title.textContent = images[index].title;
    description.textContent = images[index].text;

    const thumbnails = document.getElementsByClassName('thumb');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
    }
    thumbnails[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

function initThumbnails() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    images.forEach((image, index) => {
        const thumb = document.createElement('div');
        thumb.classList.add('thumb');
        thumb.innerHTML = `<img src="${image.image}" alt="${image.title}">`;
        thumb.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
        thumbnailContainer.appendChild(thumb);
    });

    const firstThumbnail = thumbnailContainer.firstChild;
    if (firstThumbnail) {
        firstThumbnail.classList.add('active');
    }
}

initThumbnails();
showSlide(currentIndex);
