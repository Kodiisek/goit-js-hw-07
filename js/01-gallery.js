import { galleryItems } from './gallery-items.js';

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = '#';

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute('data-source', item.original);

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

function openModal(originalSource) {
  const lightbox = basicLightbox.create(`
    <div class="modal">
        <img src="${originalSource}" alt="Image description" />
    </div>
  `);

  lightbox.show();

  const modal = lightbox.element().querySelector('.modal');
  modal.addEventListener('click', () => {
    lightbox.close();
  });
}

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const galleryImage = event.target.closest('.gallery__image');
  if (galleryImage) {
    const originalSource = galleryImage.getAttribute('data-source');
    openModal(originalSource);
  }
});



