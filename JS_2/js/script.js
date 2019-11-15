function numById(idInput) {
    return parseInt(document.getElementById(idInput).value);
}

function flById(idInput) {
    return parseFloat(document.getElementById(idInput).value);
}



function getSeason() {
    let result = "Ошибка! Номер месяца неправильный.";
    let idMonth = numById("inpIdMonth");
    switch (idMonth) {
        case 1:
            result = "зима";
            break;
        case 2:
            result = "зима"
            break;
        case 12:
            result = "зима";
            break;
        case 3:
            result = "весна";
            break;
        case 4:
            result = "весна";
            break;
        case 5:
            result = "весна";
            break;
        case 6:
            result = "лето";
            break;
        case 7:
            result = "лето";
            break;
        case 8:
            result = "лето";
            break;
        case 9:
            result = "осень";
            break;
        case 10:
            result = "осень";
            break;
        case 11:
            result = "осень";
            break;
        default:
            break;

    }
    alert(result);

}

function getInMetersValue() {
    let measureId = numById("inpIdMeasureType");
    let val = numById("inpValueTask2");
    let koeff = 0;
    switch (measureId) {
        case 1:
            koeff = 0.1;
            break;
        case 2:
            koeff = 1000;
            break;
        case 3:
            koeff = 1;
            break;
        case 4:
            koeff = 0.001;
            break;
        case 5:
            koeff = 0.01;
            break;
        default:
            break;
    }
    let result = val * koeff;
    alert(result);

}

function getDescriptionValue() {
    let val = numById("inpValueTask3");

    let first_descr = "положительное";
    if (val < 0) {
        first_descr = "отрицательное";
    }

    val = Math.abs(val);
    let second_descr = "";
    if (val < 10) {
        second_descr = "однозначное";
    } else if (val < 100) {
        second_descr = "двузначное";
    } else {
        second_descr = "трехзначное";
    }

    let resut = "нулевое";
    if (val > 0) {
        resut = `${first_descr} ${second_descr} число`;
    }
    alert(resut);

}


function getInfoInLog() {
    console.clear();
    let val = numById("inpValueTask4");

    for (let i = 1; i <= val; i++) {

        if (!(i % 3) && !(i % 5)) {
            console.log(`Value: ${i} Three and Five`);
        } else if ((i % 3) && !(i % 5)) {
            console.log(`Value: ${i} Only Five`);
        } else if (!(i % 3)) {
            console.log(`Value: ${i} Three`);
        } else {
            console.log(`Value: ${i}`);
        }

    }
}