import { galleryItems } from './gallery-items.js';

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

const galleryList = document.querySelector('.gallery');

const galleryItemsElements = galleryItems.map((item) => {
  return createGalleryItem(item);
});

galleryItemsElements.forEach((element) => {
  galleryList.appendChild(element);
});

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  const galleryLink = event.target.closest('.gallery__link');
  if (galleryLink) {
    lightbox.open(galleryLink);
  }
});
