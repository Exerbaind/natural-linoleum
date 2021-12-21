@@include("../api/tableDescriptionData.js");

const tableTooltip = document.querySelector('.table-description');
const tableTooltipHeader = document.querySelector('.table-description__header');
const tableTooltipContent = document.querySelector('.table-description__content');
const tableTooltipButton = document.querySelector('.table-description__button');

const tooltips = TableDescriptionData();

document.addEventListener('click', (e) => {
    if(e.target.id) {
        tooltips.forEach((tooltip) => {
            if (tooltip.key === e.target.id){
                addTooltipContent(tooltip);
            }
        })
    };

    if (e.target.className === 'table-description table-description--active') {
        closeTooltip();
      }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTooltip();
    }
})

if (tableTooltipButton) {
    tableTooltipButton.addEventListener('click', closeTooltip);
}

function addTooltipContent(tooltip) {

    const { title, subtitle, text, image } = tooltip;

    let tableTooltipTitle;
    let tableTooltipSubTitle;
    let tableTooltipText;
    let tableTooltipImage;

    if (title) {
        tableTooltipTitle = document.createElement("h5");
        tableTooltipTitle.className = "table-description__title";
        tableTooltipTitle.innerHTML = title;

        tableTooltipHeader.appendChild(tableTooltipTitle);
    }

    if (subtitle) {
        tableTooltipSubTitle = document.createElement("h6");
        tableTooltipSubTitle.className = "table-description__subtitle";
        tableTooltipSubTitle.innerHTML = subtitle;

        tableTooltipHeader.appendChild(tableTooltipSubTitle);
    }

    if (text) {
        text.forEach((item) => {
            tableTooltipText = document.createElement("p");
            tableTooltipText.className = "table-description__text";
            tableTooltipText.innerHTML = item;
    
            tableTooltipContent.appendChild(tableTooltipText);
        })
    }

    if (image) {
        tableTooltipImage = document.createElement("img");
        tableTooltipImage.className = "table-description__image";
        tableTooltipImage.setAttribute("src", image);
        tableTooltipImage.setAttribute(
            "alt",
            'Классы пожарной опасности строительных материалов'
        );

        tableTooltipContent.appendChild(tableTooltipImage);
    }

    document.body.classList.add('no-overflow');
    tableTooltip.classList.add('table-description--active');
}

function removeTooltipContent() {
    while (tableTooltipHeader.firstChild) {
        tableTooltipHeader.removeChild(tableTooltipHeader.firstChild);
    }
    while (tableTooltipContent.firstChild) {
        tableTooltipContent.removeChild(tableTooltipContent.firstChild);
    }
}

function closeTooltip () {
    tableTooltip.classList.remove('table-description--active');
    document.body.classList.remove('no-overflow');
    setTimeout(removeTooltipContent, 400);
}