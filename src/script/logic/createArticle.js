function createArticle(article, whereToAdd) {
  const articleItem = document.createElement("div");
  const articleImage = document.createElement("img");
  const articleInformation = document.createElement("div");
  const articleNumber = document.createElement("p");
  const articleName = document.createElement("p");

  articleItem.className = "article__item";
  articleImage.className = "article__image";
  articleInformation.className = "article__information";
  articleNumber.className = "article__name";
  articleName.className = "article__name";

  articleItem.setAttribute("id", article.id);
  articleImage.setAttribute("src", article.img);
  articleImage.setAttribute(
    "alt",
    `Forbo Marmoleum Striato ${article.number} ${article.name}`
  );

  articleNumber.innerHTML = article.number;
  if (article.name) {
    articleName.innerHTML = article.name;
  }

  articleInformation.appendChild(articleNumber);
  articleInformation.appendChild(articleName);
  articleItem.appendChild(articleImage);
  articleItem.appendChild(articleInformation);

  whereToAdd.appendChild(articleItem);
}
