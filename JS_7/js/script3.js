function changeLights() {
    let counter = 0;
    let elem = document.getElementById("light");
    let koeff = 1;

    function changer() {
        counter = koeff + counter;
        elem.src = `img/${counter}.jpg`;

        if (counter === 3)
            koeff = -1;
        if (counter === 1)
            koeff = 1;


    }
    return changer;

}

let fn = changeLights();
setInterval(fn, 2000);