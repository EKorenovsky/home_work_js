function crtGameField(N) {
    let elemDiv = document.querySelector('.left-side');
    elemDiv.innerHTML = myLib.genTable(N);

    let elemsTD = document.querySelectorAll('.left-side TABLE TR TD');
    for (let i = 0; i < elemsTD.length; i++) {
        elemsTD[i].addEventListener("click", checkPresent);
    }

    let elem_info = document.querySelector('p');
    elem_info.dataset.counter = "3";
    elem_info.innerText = "Осталось: 3";

    let pseudoRnd = myLib.pseudoRnd(N ** 2);
    window.arrPresents = [];

    for (let i = 0; i < N; i++) {
        window.arrPresents.push(pseudoRnd());
    }

    console.log(`Выигрышные ячейки: ${window.arrPresents}`);
}

function checkPresent(e) {
    let elem_info = document.querySelector('p');
    let id = +this.dataset.num;
    if (window.arrPresents.indexOf(id) > -1) {
        this.style.background = "green";
    } else {
        this.style.background = "white";
        let counter = +elem_info.dataset.counter;
        if (counter === 1) {
            elem_info.innerText = 'Осталось: 0. Проигрыш!';
            for (let i = 0; i < window.arrPresents.length; i++) {
                let elem_td = document.querySelector(`TD[data-num="${window.arrPresents[i]}"]`);
                elem_td.style.background = "green";
            }
        } else {
            counter--;
            elem_info.dataset.counter = counter;
            elem_info.innerText = `Осталось: ${counter}`;
        }
    }
    console.log(this.dataset.num);
}