function fullItems(arrItem) {
    let elemContainer = document.getElementsByClassName("items-container");
    if (elemContainer.length > 0) {
        arrItem.forEach(element => {
            let elemItem = document.createElement("div");
            elemItem.style = "item";

            elemItem.innerHTML = `
            <span class="item-code">${element['code']}</span>
            <span class="item-author"><strong>${element['author']}</strong></span>
            <span class="item-name"><strong>${element['name']}</strong></span>
            <span class="item-descr">${element['descr']}</span>`;

            elemContainer[0].appendChild(elemItem);
        });
    }


}


let item = {
    code: "IBS1024632",
    author: "Толстой Л.Н.",
    name: 'Война и мир',
    descr: 'Основательное произведение, много французских слов, 4 тома, твердый переплёт, в хозяйстве пригодится.',
}

let arrItems = [];
for (let i = 0; i < 33; i++) {
    arrItems.push(item);
}

fullItems(arrItems);