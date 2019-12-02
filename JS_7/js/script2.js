function fullItems(arrItem) {
    let elemContainer = document.getElementsByClassName("items-container");
    if (elemContainer.length > 0) {
        arrItem.forEach(element => {
            let elemItem = document.createElement("div");
            elemItem.style = "item";

            elemItem.innerHTML = ` <img src="${element['src']}">
            <span class="item-name"><strong>${element['name']}</strong></span>
            <span class="item-descr">${element['descr']}</span>
            <span class="item-price">Цена:&nbsp;<strong>${element['price']}&nbsp;руб</strong></span>`;

            elemContainer[0].appendChild(elemItem);
        });
    }


}


let item = {
    name: 'Ретро-телефон DUKEM',
    descr: 'Корпус выполнен из меди, латуни и массива натурального дерева',
    src: 'http://www.thesignal.ru/products_pictures/dukem.jpg',
    price: 20000
}

let arrItems = [];
for (let i = 0; i < 21; i++) {
    arrItems.push(item);
}

fullItems(arrItems);