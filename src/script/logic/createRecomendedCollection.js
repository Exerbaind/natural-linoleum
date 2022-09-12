function createRecomendedCollection(collection, whereToAdd) {
  const collectionItem = document.createElement("div");
  const collectionImage = document.createElement("img");
  const collectionOpacityBlock = document.createElement("div");
  const collectionName = document.createElement("p");
  const collectionLink = document.createElement("a");

  collectionItem.className = "other-collection__item";
  collectionImage.className = "other-collections__image";
  collectionOpacityBlock.className = "other-collections__opacity-block";
  collectionName.className = "other-collections__name";
  collectionLink.className = "other-collections__link";

  collectionImage.setAttribute("src", collection.img);
  collectionImage.setAttribute(
    "alt",
    `Коллекция натурального линолеума натуральный линолеум ${collection.name}`
  );
  collectionLink.setAttribute("href", collection.link);

  collectionName.innerHTML = collection.name;

  collectionItem.appendChild(collectionImage);
  collectionItem.appendChild(collectionOpacityBlock);
  collectionItem.appendChild(collectionName);
  collectionItem.appendChild(collectionLink);

  whereToAdd.appendChild(collectionItem);
}
