import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  createModalMarkup(event.target);
}

function createModalMarkup({ dataset }) {
  const modalMarkup = `<img
            class="modal__image"
            src="${dataset.source}"
          />`;
  showModal(modalMarkup);
}

function showModal(markup) {
  basicLightbox.create(markup).show();

  document.addEventListener("keydown", closeModal);
  function closeModal(event) {
    console.log(event);
  }
}
