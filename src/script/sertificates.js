const sertificateItems = [...document.querySelectorAll('.collection-item__image-container')];
const fullScreenList = document.querySelector(".fullScreen-sertificates__container");
const fullScreen = document.querySelector(".fullScreen-sertificates");

const btnNextSertificate = document.querySelector(".fullScreen-sertificates__handler.nextSertificate");
const btnPrevSertificate = document.querySelector(".fullScreen-sertificates__handler.prevSertificate");
const fullScreenClose = document.querySelector(".fullScreen-sertificates__close");

let move = 0;
let maxMove;

fullScreenClose.onclick = function () {
    fullScreen.classList.remove("fullScreen-sertificates--active");
    document.body.style.overflow = "auto";
    fullScreenList.style.transform = `translateX(0%)`;
    move = 0;
};

function openFullScreen() {
    fullScreen.classList.add("fullScreen-sertificates--active");
    document.body.style.overflow = "auto";
}

function initImages(item, index) {
    fullScreenList.innerHTML = '';
    const numberOfImages = item.dataset.images;
    let fullScreenItemsInHTML = 0;

    for (let imageIndex = 0; imageIndex < numberOfImages; imageIndex++) {
        const fullScreenItem = document.createElement("div");
        const fullScreenImage = document.createElement("img");

        fullScreenItem.className = "fullScreen-sertificates__item";
        fullScreenImage.className = "fullScreen-sertificates__image";

        if (imageIndex === 0) {
            fullScreenItem.style.transform = `translateX(0%)`;
        } else {
            fullScreenItem.style.transform = `translateX(${imageIndex}00%)`;
        }
        
        fullScreenImage.setAttribute("src", `./assets/images/sertifikati-marmoleuma/${index}-${imageIndex}.jpg`);
        fullScreenImage.setAttribute(
          "alt",
          `Сертификат`
        );

        fullScreenItem.appendChild(fullScreenImage);
        fullScreenList.appendChild(fullScreenItem);
        fullScreenItemsInHTML++;
    }

    maxMove = fullScreenItemsInHTML * 100;

    if (numberOfImages < 2) {
        btnNextSertificate.style.display = 'none';
        btnPrevSertificate.style.display = 'none';
    } else {
        btnNextSertificate.style.display = 'block';
        btnPrevSertificate.style.display = 'block';
    }
}

function NextSertificate() {
    // Для переключения на следующий артикул
    console.log(move);
    console.log(maxMove);
    console.log(maxMove - 100);
    if (move < maxMove - 100) {
      move = move + 100;
      fullScreenList.style.transform = `translateX(-${move}%)`;
      return move;
    }
}
  
function PrevSertificate() {
// Для переключения на предыдущий артикул
    if (move !== 0) {
        move = move - 100;
        fullScreenList.style.transform = `translateX(-${move}%)`;
    }
}
  
btnNextSertificate.onclick = NextSertificate;
btnPrevSertificate.onclick = PrevSertificate;
  

sertificateItems.map((sertificate, index) => {
    sertificate.addEventListener('click', () => {
        initImages(sertificate, index);
        openFullScreen();
    })
});