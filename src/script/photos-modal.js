function createFullScreenPhotos(index, photosContainer, photosObjectName) {
  const fullScreenPhotoItem = document.createElement("div");
  const fullScreenPhotoImage = document.createElement("img");

  fullScreenPhotoItem.className = "fullScreen-photos__item";
  fullScreenPhotoImage.className = "fullScreen-photos__image";

  fullScreenPhotoImage.setAttribute(
    "src",
    `../assets/images/photo-gallery/${photosObjectName}/photo_${index + 1}.jpg`
  );

  fullScreenPhotoItem.appendChild(fullScreenPhotoImage);

  photosContainer.appendChild(fullScreenPhotoItem);
}

const photosList = [...document.querySelectorAll(".photos-grid__image")];
const photosContainer = document.querySelector(".fullScreen-photos__container");
const photosObjectName = document.querySelector(".photo-object").dataset.photos;

if (photosList) {
  photosList.forEach((item, index) => {
    createFullScreenPhotos(index, photosContainer, photosObjectName);
  });
}

const btnNextPhoto = document.querySelector(
  ".fullScreen-photos__handler.nextPhoto"
);
const btnPrevPhoto = document.querySelector(
  ".fullScreen-photos__handler.prevPhoto"
);
const fullScreenPhotosInHTML = [
  ...document.querySelectorAll(".fullScreen-photos__item"),
];

const windowInnerWidth = window.innerWidth;

const photosInHTML =
  windowInnerWidth > 500
    ? [...document.querySelectorAll(".photos-grid__image")]
    : [...document.querySelectorAll(".photos-slider__image")];
const fullScreenPhotos = document.querySelector(".fullScreen-photos");
const fullScreenClose = document.querySelector(".fullScreen-photos__close");

let move = 0;
const maxMove = fullScreenPhotosInHTML.length * 100;

fullScreenPhotosInHTML.map((item, index) => {
  item.setAttribute("style", `transform: translateX(${index}00%)`);
});

// Открытие артикулов во весь экран при нажатии на определенный артикул
photosInHTML.map((item, index) => {
  item.addEventListener("click", () => {
    move = `${index}00`;
    move = +move;
    fullScreenPhotosList.style.transform = `translateX(-${move}%)`;
    setTimeout(() => {
      fullScreenPhotos.classList.add("fullScreen-photos--active");
      document.body.style.overflow = "hidden";
    }, 300);
    return move;
  });
});

// Описание поведения артикулов во весь экран при нажатии на клавиатуру (закрытие, переключение артикулов)
document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Escape":
      fullScreenPhotos.classList.remove("fullScreen-photos--active");
      document.body.style.overflow = "auto";
      break;
    case "ArrowRight":
      NextPhoto();
      break;
    case "ArrowLeft":
      PrevPhoto();
      break;
  }
});

// Функции
function NextPhoto() {
  // Для переключения на следующий артикул
  if (move < maxMove - 100) {
    move = move + 100;
    fullScreenPhotosList.style.transform = `translateX(-${move}%)`;
    return move;
  }
}

function PrevPhoto() {
  // Для переключения на предыдущий артикул
  if (move !== 0) {
    move = move - 100;
    fullScreenPhotosList.style.transform = `translateX(-${move}%)`;
  }
}

btnNextPhoto.onclick = NextPhoto;
btnPrevPhoto.onclick = PrevPhoto;

// Закрытие всего компонента
fullScreenClose.onclick = function () {
  fullScreenPhotos.classList.remove("fullScreen-photos--active");
  document.body.style.overflow = "auto";
};
