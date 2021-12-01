@@include("../api/allCollections.js");

const allCollections = AllCollectionsList();
const collectionsList = document.querySelector('.collections-list');

function main() {
    allCollections.forEach(collection => createCollection(collection))
}

main();

function createCollection(collection) {

    const { count, katalog_img, link, property, title } = collection;

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
    collectionImage.setAttribute('src', katalog_img);
    collectionImage.setAttribute('alt', title);
    collectionOpacityBlockText.innerHTML = 'Перейдите в коллекцию';
    collectionName.innerHTML = title;
    
    if (count && property){
        collectionProperty.innerHTML = `${count} ${property}`;
    }

    collectionOpacityBlock.appendChild(collectionOpacityBlockText);
    collectionImageContainer.appendChild(collectionImage);
    collectionImageContainer.appendChild(collectionOpacityBlock);

    collectionBlock.appendChild(collectionLink);
    collectionBlock.appendChild(collectionImageContainer);
    collectionBlock.appendChild(collectionName);

    if (count && property) {
        collectionBlock.appendChild(collectionSeporator);
        collectionBlock.appendChild(collectionProperty);
    }

    collectionsList.appendChild(collectionBlock);
}