import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const galleryImages = galleryItems.map(({preview, description, original}) => {
    return `<a onClick = 'event.preventDefault()' class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('')

gallery.insertAdjacentHTML('beforeend', galleryImages)

let lightbox = new SimpleLightbox('.gallery a', {
    overlay: true,
    captions: true,
    captionsDelay: 250,
    captionsData: 'alt'
});

