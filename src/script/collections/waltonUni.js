@@include("../../api/waltonUniData.js");
@@include("../logic/createArticle.js");
@@include("../logic/createTable.js");
@@include("../logic/createFullScreenArticles.js");
@@include("../logic/createRecomendedCollection.js");
@@include("./allCollections.js");

const articles = WaltonUniArticles();
const table = WaltonUniTable();
const recomendedCollections = AllCollectionsList();
const currentCollectionName = "Walton uni";

const articlesList = document.querySelector(".articles__list");
const recordsTable = document.querySelector(".table__body");
const fullScreenArticlesList = document.querySelector(
  ".fullScreen-articles__container"
);
const recomendedCollectionsList = document.querySelector(
  ".other-collections__list"
);

articles.map((article) => {
  createArticle(article, articlesList);
  createFullScreenArticles(article, fullScreenArticlesList);
});

table.map((record) => {
  createTable(record, recordsTable);
});

recomendedCollections.map((collection) => {
  if (collection.name.toLowerCase() !== currentCollectionName.toLowerCase()) {
    return createRecomendedCollection(collection, recomendedCollectionsList);
  }
});

@@include("../logic/fullScreenArticlesSlider.js");
