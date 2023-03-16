import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')


    const galleryImages = galleryItems.map(({preview, description, original}) => {
    return `
    <div class="gallery__item">
  <a onClick = 'event.preventDefault()' class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('')



gallery.insertAdjacentHTML('beforeend', galleryImages)


gallery.addEventListener('click', onImageClick)

function onImageClick(e) {
    if (e.target.nodeName !== 'IMG') {
        return
    }

    let srcImage = e.target.getAttribute('data-source')

    let instance = basicLightbox.create(`
    <img src='${srcImage}' height='600' width='800'>`)


    instance.show()

    document.addEventListener('keydown', (escClose) => {
        if (escClose.code === 'Escape') {
            instance.close()
        }
    })

}