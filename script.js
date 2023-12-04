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
// agiunta del contenitore 
const carousel = document.getElementById('carousel');

// popolare dinamicamente il carosello
images.forEach(item => {
    // div carousel item 
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    // immagine container 
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    // immagine src
    const image = document.createElement('img');
    image.src = item.image;

    // titolo 
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = item.title;

    // contenuto testo 
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = item.text;

    // mandare tutto nel carosello 
