function numById(idInput) {
    return parseInt(document.getElementById(idInput).value);
}

function flById(idInput) {
    return parseFloat(document.getElementById(idInput).value);
}



function task1() {
    let area = numById("inpAreaT1");
    let x = numById("inpXT1");
    let y = numById("inpYT1");
    let res = (100 * area) % (x * y);
    alert("Осталось незанято (м2): " + res);
}

function task2() {
    let areaExt = numById("inpAreaExtT2");
    let areaInt = numById("inpAreaIntT2");
    let res = (100 * areaExt) - areaInt;
    alert("Площадь (см2): " + res);
}

function task3() {
    let x = numById("inpXT3");
    let y = numById("inpYT3");
    let z = numById("inpZT3");
    let res = Math.min(x, y, z);
    alert("Минимум: " + res);
}

function task4() {
    let x = flById("inpXT4");
    let y = flById("inpYT4");
    let z = flById("inpZT4");

    let l1 = Math.abs(x - y);
    let l2 = Math.abs(x - z);

    if (l1 < l2) {
        alert("Ближайшее: " + y);
    } else if (l2 < l1) { alert("Ближайшее: " + z); } else {
        alert("Равноудаленные");
    }
}

function task5() {

    let x1 = numById("inpX1T5");
    let y1 = numById("inpY1T5");
    let z1 = numById("inpZ1T5");

    let x2 = numById("inpX2T5");
    let y2 = numById("inpY2T5");
    let z2 = numById("inpZ2T5");

    let x3 = numById("inpX3T5");
    let y3 = numById("inpY3T5");
    let z3 = numById("inpZ3T5");

    let d1 = (x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2;
    let d2 = (x1 - x3) ** 2 + (y1 - y3) ** 2 + (z1 - z3) ** 2;
    let d3 = (x2 - x3) ** 2 + (y2 - y3) ** 2 + (z2 - z3) ** 2;

    let hyp1 = ((d1 + d2) === d3);
    let hyp2 = ((d1 + d3) === d2);
    let hyp3 = ((d2 + d3) === d1);

    let res = hyp1 + hyp2 + hyp3;
    if (res) { alert("Это прямоугольник!"); } else { alert("Это не прямоугольник!"); }


}