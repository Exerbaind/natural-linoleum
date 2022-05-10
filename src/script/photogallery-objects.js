@@include("../api/photoGalleryData.js");

const allCollections = PhotoGalleryData();
const collectionsList = document.querySelector('.page-articles__list');

function main() {
    allCollections.forEach(collection => createCollection(collection))
}

main();

function createCollection(collection) {

    const { name, link, image } = collection;

    const collectionBlock = document.createElement("div");
    const collectionLink = document.createElement("a");
    const collectionImage = document.createElement("img");
    const collectionOpacityBlock = document.createElement("div");
    const collectionName = document.createElement("p");

    collectionBlock.className = 'other-collection__item';
    collectionLink.className = 'page-articles__link';
    collectionImage.className = 'page-articles__image';
    collectionOpacityBlock.className = 'page-articles__opacity-block';
    collectionName.className = 'page-articles__name';

    collectionLink.setAttribute('href', link);
    collectionImage.setAttribute('src', image);
    collectionImage.setAttribute('alt', name);
    collectionName.innerHTML = name;


    collectionBlock.appendChild(collectionImage);
    collectionBlock.appendChild(collectionOpacityBlock);
    collectionBlock.appendChild(collectionName);
    collectionBlock.appendChild(collectionLink);

    collectionsList.appendChild(collectionBlock);
}