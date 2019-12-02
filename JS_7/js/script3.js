function changeLights() {
    let counter = 0;
    let koeff = 1;

    function changer() {
        counter = koeff + counter;
        for (let i = 0; i <= 3; i++) {
            if (i === counter) {
                document.getElementById(`light${i}`).style = "display:block;";
            } else {
                document.getElementById(`light${i}`).style = "display:none;";
            }
        }

        if (counter === 3)
            koeff = -1;
        if (counter === 1)
            koeff = 1;


    }
    return changer;

}


let fn = changeLights();
setInterval(fn, 2000);
//fn();