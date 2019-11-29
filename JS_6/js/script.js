/*
Реализовать функцию foo:
let a = {
    name: 'static',
    count: 0
}
console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
 {name:'static', count:1}, ..., {name:'static', count:9}] 
*/
function foo(valA, nameProp, count) {
    let result = [];

    for (let i = 0; i < count; i++) {
        let promA = {...valA };
        if (nameProp in promA)
            promA[nameProp] = i;
        result.push(promA);
    }
    return result;
}

console.log("============= Задача №1  ===================");


let a = {
    name: 'static',
    count: 0
}

console.log(foo(a, 'count', 10));



/*
2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
хранится массив чисел, которые уже были сгенерированы функцией.
*/
function rndInt(min, max) {
    if (min === max)
        return min;
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function pseudoRnd(val) {
    let min = 1;
    let max = val;
    let buf = [];

    function generator() {

        if (buf.length === val)
            return NaN;

        let promVal = rndInt(min, max);
        if (buf.indexOf(promVal) < 0) {
            buf.push(promVal);
            isNewVal = true;
            if (promVal === min) {
                while (buf.indexOf(min) < 0)
                    min++;
            }
            if (promVal === max)
                while (buf.indexOf(max) < 0)
                    max--;
            return promVal;
        } else {
            return generator();
        }


    }
    return generator;
}

console.log("============= Задача №2  ===================");

let lenRnd = 100;
let task2 = pseudoRnd(lenRnd);
for (let i = 1; i <= lenRnd; i++) {
    console.log(task2());
}

/*
3. Построить объект студент:
- свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
- метод объекта выводящий в консоль биографическую справку в виде, например: 
«Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.
*/

function isFunction(variableToCheck) {
    if (variableToCheck instanceof Function) {
        return true;
    }
    return false;
}

let objStudent = {
    firstName: "Peter",
    lastName: "Smith",
    age: 18,
    interests: ["JS", "PHP", "PYTHON"],
    locStudy: "MIT",
    getInfo() {
        for (let prop in this) {
            let val = this[prop];
            if (Array.isArray(val))
                console.log(`${prop} : ${val.join(', ')}`);
            else if (!isFunction(val))
                console.log(`${prop} : ${val}`);
        }
    }
}
console.log("============= Задача №3  ===================");

objStudent.getInfo();

/*
4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
Факториал числа - это число, умноженное на себя минус один, затем на себя 
минус два и так далее, до единицы. Обозначается n!
Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1
*/

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log("============= Задача №4  ===================");

let n = factorial(5);
console.log(n);


/*
5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
определяющую порядок сортировки. Массив для тестирования: 
let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
{ 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];
*/

console.log("============= Задача №4  ===================");
let arr = [{ 'price': 10, 'count': 2 }, { 'price': 5, 'count': 5 },
    { 'price': 8, 'count': 5 }, { 'price': 12, 'count': 4 }, { 'price': 8, 'count': 4 },
];

console.log("До сортировки:");
console.log(arr);

console.log("После сортировки:");
arr.sort((el1, el2) => el1.price - el2.price);
console.log(arr);