function createFullScreenArticles(article, whereToAdd) {
  const fullScreenArticleItem = document.createElement("div");
  const fullScreenArticleImage = document.createElement("img");
  const fullScreenArticleInformation = document.createElement("div");
  const fullScreenArticleNumber = document.createElement("p");
  const fullScreenArticleName = document.createElement("p");

  fullScreenArticleItem.className = "fullScreen-articles__item";
  fullScreenArticleImage.className = "fullScreen-articles__image";
  fullScreenArticleInformation.className = "fullScreen-articles__information";
  fullScreenArticleNumber.className = "fullScreen-articles__name";
  fullScreenArticleName.className = "fullScreen-articles__name";

  fullScreenArticleImage.setAttribute("src", article.img);
  fullScreenArticleImage.setAttribute(
    "alt",
    `Forbo Marmoleum Striato ${article.number} ${article.name}`
  );

  fullScreenArticleNumber.innerHTML = article.number;
  if (article.name) {
    fullScreenArticleName.innerHTML = article.name;
  }

  fullScreenArticleItem.appendChild(fullScreenArticleImage);
  fullScreenArticleInformation.appendChild(fullScreenArticleNumber);
  fullScreenArticleInformation.appendChild(fullScreenArticleName);
  fullScreenArticleItem.appendChild(fullScreenArticleInformation);

  whereToAdd.appendChild(fullScreenArticleItem);
}
