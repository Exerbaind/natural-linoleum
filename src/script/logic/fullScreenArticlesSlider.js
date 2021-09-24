const btnNextArticle = document.querySelector(
  ".fullScreen-articles__handler.nextArticle"
);
const btnPrevArticle = document.querySelector(
  ".fullScreen-articles__handler.prevArticle"
);
const fullScreenArticlesInHTML = [
  ...document.querySelectorAll(".fullScreen-articles__item"),
];
const articlesInHTML = [...document.querySelectorAll(".article__item")];
const fullScreenArticles = document.querySelector(".fullScreen-articles");
const fullScreenClose = document.querySelector(".fullScreen-articles__close");

let move = 0;
const maxMove = fullScreenArticlesInHTML.length * 100;

fullScreenArticlesInHTML.map((item, index) => {
  item.setAttribute("style", `transform: translateX(${index}00%)`);
});

// Открытие артикулов во весь экран при нажатии на определенный артикул
articlesInHTML.map((item, index) => {
  item.addEventListener("click", () => {
    move = `${index}00`;
    move = +move;
    fullScreenArticlesList.style.transform = `translateX(-${move}%)`;
    setTimeout(() => {
      fullScreenArticles.classList.add("fullScreen-articles--active");
      document.body.style.overflow = "hidden";
    }, 300);
    return move;
  });
});

// Описание поведения артикулов во весь экран при нажатии на клавиатуру (закрытие, переключение артикулов)
document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Escape":
      fullScreenArticles.classList.remove("fullScreen-articles--active");
      document.body.style.overflow = "auto";
      break;
    case "ArrowRight":
      NextArticle();
      break;
    case "ArrowLeft":
      PrevArticle();
      break;
  }
});

// Функции
function NextArticle() {
  // Для переключения на следующий артикул
  if (move < maxMove - 100) {
    move = move + 100;
    fullScreenArticlesList.style.transform = `translateX(-${move}%)`;
    return move;
  }
}

function PrevArticle() {
  // Для переключения на предыдущий артикул
  if (move !== 0) {
    move = move - 100;
    fullScreenArticlesList.style.transform = `translateX(-${move}%)`;
  }
}

btnNextArticle.onclick = NextArticle;
btnPrevArticle.onclick = PrevArticle;

// Закрытие всего компонента
fullScreenClose.onclick = function () {
  fullScreenArticles.classList.remove("fullScreen-articles--active");
  document.body.style.overflow = "auto";
};
