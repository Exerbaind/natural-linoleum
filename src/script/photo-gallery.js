@@include("../api/photoGalleryData.js");

const allCollections = PhotoGalleryData();
const collectionsListObject = document.querySelector('.collections-list.object');
const collectionsListInterior = document.querySelector('.collections-list.interior');

function main() {
    allCollections.forEach(collection => createCollection(collection))
}

console.log('hello');

main();

function createCollection(collection) {

    const { name, type, link, image, subtitle } = collection;

    const collectionBlock = document.createElement("div");
    const collectionLink = document.createElement("a");
    const collectionImageContainer = document.createElement("div");
    const collectionImage = document.createElement("img");
    const collectionOpacityBlock = document.createElement("div");
    const collectionOpacityBlockText = document.createElement("p");
    const collectionName = document.createElement("p");
    const collectionSeporator = document.createElement("div");
    const collectionProperty = document.createElement("p");

    collectionBlock.className = 'collections-item';
    collectionLink.className = 'collection-item__link';
    collectionImageContainer.className = 'collection-item__image-container';
    collectionImage.className = 'collection-item__image';
    collectionOpacityBlock.className = 'collection-item__image-hover';
    collectionName.className = 'collection-item__name';
    collectionSeporator.className = 'collection-item__seporator';
    collectionProperty.className = 'collection-item__property';

    collectionLink.setAttribute('href', link);
    collectionImage.setAttribute('src', image);
    collectionImage.setAttribute('alt', name);
    collectionOpacityBlockText.innerHTML = 'Перейдите на страницу';
    collectionName.innerHTML = name;
    collectionProperty.innerHTML = subtitle;

    collectionOpacityBlock.appendChild(collectionOpacityBlockText);
    collectionImageContainer.appendChild(collectionImage);
    collectionImageContainer.appendChild(collectionOpacityBlock);

    collectionBlock.appendChild(collectionLink);
    collectionBlock.appendChild(collectionImageContainer);
    collectionBlock.appendChild(collectionName);

    collectionBlock.appendChild(collectionSeporator);
    collectionBlock.appendChild(collectionProperty);
    
    if (type === 'object') {
        collectionsListObject.appendChild(collectionBlock);
    }

    if (type === 'interior') {
        collectionsListInterior.appendChild(collectionBlock);
    }
}