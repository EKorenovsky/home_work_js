function task1() {
    let arrA = [12, 4, 3, 10, 1, 20];
    let arrB = [-3, -7, -100, -33];

    let arrC = arrB.concat(arrA);
    alert('Массив B в начало: ' + arrC);

    arrC = arrA.concat(arrB);
    alert('Массив B в конец: ' + arrC);
}

function task2() {
    let div_container = document.getElementById('grid-task2');
    div_container.innerHTML = "";

    let arr = [null, null, null, null, null, null, null, null, null];
    for (let i = 0; i < arr.length; i++) {
        let rnd_val = Math.random();
        if (rnd_val <= 0.3)
            arr[i] = 0;
        else if (rnd_val <= 0.6)
            arr[i] = 1;
    }
    //т.к. по условиям задачи итоговый массив должен быть из null, 1 ,0 поэтому еще один цикл
    for (let i = 0; i < arr.length; i++) {
        let paragraph = document.createElement('p');
        switch (arr[i]) {
            case 0:
                paragraph.innerHTML = "0";
                break;
            case 1:
                paragraph.innerHTML = "X";
                break;
            default:
                paragraph.innerHTML = "&nbsp;"
                break;
        }
        div_container.appendChild(paragraph);
    }

}

function task3() {
    let arr = [12, 4, 3, 10, 1, 20];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let ix_min = arr.indexOf(min);
    if (ix_min > 0)
        arr.splice(ix_min, 1);
    let ix_max = arr.indexOf(max);
    if (ix_max > 0)
        arr.splice(ix_max, 1);
    alert(arr);
}


function task4() {
    let cnt = 0;
    for (let val = 1; val < 1000000; val++) {
        let right = val % 1000;
        let left = (val - right) / 1000;

        let sum_left = parseInt(left / 100) + parseInt((left / 10)) % 10 + left % 10;
        let sum_right = parseInt(right / 100) + parseInt((right / 10)) % 10 + right % 10;

        if (sum_left === sum_right) {
            //console.log(val);
            cnt++;
        }
    }
    alert("Счастливых билетов: " + cnt);
}