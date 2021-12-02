const places = [
{
    place: 'home',
    image: 0,
    name: ['спальни', 'кухни', 'гостиные', 'гардеробные', 'коридоры'],
    alt: 'Любимый дом'
},
{
    place: 'medicine',
    image: 0,
    name: ['палаты', 'приемные', 'процедурные', 'лаборатории'],
    alt: 'Медицинские учреждения'
},
{
    place: 'school',
    image: 0,
    name: ['столовые', 'в лаборатории', 'спортивные залы', 'классы и аудитории', 'коридоры', 'учительские', 'компьютерные классы'],
    alt: 'Школы и учебные заведения'
},
{
    place: 'kids',
    image: 0,
    name: ['спальни', 'игровые', 'столовые', 'раздевалки'],
    alt: 'Детские сады'
},
{
    place: 'sport',
    image: 0,
    name: ['входные группы', 'залы игровых видов спорта', 'залы для йоги и аэробики', 'залы для силовых тренировок', 'коридоры'],
    alt: 'Спортивные клубы'
},
{
    place: 'shop',
    image: 0,
    name: ['входные группы', 'торговые залы', 'коридоры'],
    alt: 'Торговые помещения'
},
{
    place: 'office',
    image: 0,
    name: ['коридоры', 'переговорные', 'кабинеты', 'зоны отдыха'],
    alt: 'Офисы'
},
{
    place: 'museum',
    image: 0,
    name: ['стенды'],
    alt: 'Музеи и развлекательные центры'
},
];

function switchBlock (p) {
    const blockImage = document.getElementById(p.place);
    const blockName = document.getElementById(`${p.place}-name`);

    blockImage.setAttribute('src', `./assets/images/primenenie-marmoleuma/${p.place}/${p.image}.png`)
    blockImage.setAttribute('alt', `${p.alt}`)

    blockName.innerHTML = p.name[p.image];
}

document.addEventListener('click', (e) => {
    places.forEach(p => {
        if (e.target.className === `place-container__right-arrow ${p.place}`) {
            slideForward(p.place);
        }
        if (e.target.className === `place-container__left-arrow ${p.place}`) {
            slideBack(p.place);
        }
    })
});

function slideForward(placeName) {
    const place = places.find(p => p.place === placeName);
    if (place.image === place.name.length - 1) {
        place.image = 0;
    } else {
        place.image++;
    }
    switchBlock(place);
}

function slideBack(placeName) {
    const place = places.find(p => p.place === placeName);
    if (place.image === 0) {
        place.image = place.name.length - 1;
    } else {
        place.image--;
    }
    switchBlock(place);
}