function task1(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2))
        return false;
    if (arr1.length !== arr2.length)
        return false;
    return (arr1.join() === arr2.join());
}

function task2(stVal, finVal, stepVal = 1) {
    let result = [];
    for (let i = stVal; i <= finVal; i += stepVal) {
        result.push(i);
    }
    return result;
}



//#region Задача 3
function task3() {
    let objStudent = {
        firstName: "Peter",
        lastName: "Smith",
        age: 18,
        interests: ["JS", "PHP", "PYTHON"],
        locStudy: "MIT",
    }

    task3_1(objStudent);

}

function task3_1(objStudent) {
    for (let prop in objStudent) {
        let val = objStudent[prop];
        if (Array.isArray(val))
            console.log(`${prop} : ${val.join()}`);
        else
            console.log(`${prop} : ${val}`);

    }
}
//#endregion

//#region Задача 4
function rndInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function task4() {
    let arr1 = "аеёиоуыэюя";
    let arr2 = "бвгджзйклмнпрстфхцчшщ";


    let lengthWord = rndInt(3, 5);
    if (Math.random() <= 0.5)
        [arr2, arr1] = [arr1, arr2];

    let result = "";
    for (let i = 0; i < lengthWord; i++) {
        if ((i % 2) === 0)
            result += arr1[rndInt(0, arr1.length - 1)];
        else
            result += arr2[rndInt(0, arr2.length - 1)];

    }
    console.log(result);
}

//#endregion

console.log("=========== РЕЗУЛЬТАТ №1 ==================");
console.log(task1([1, 2, 3, 4, 5], [1, 2, 3, 4, ]));

console.log("=========== РЕЗУЛЬТАТ №2 ==================");
console.log(task2(1, 10, 2));

console.log("=========== РЕЗУЛЬТАТ №3 ==================");
task3();

console.log("=========== РЕЗУЛЬТАТ №4 ==================");
for (let i = 0; i < 10; i++)
    task4();