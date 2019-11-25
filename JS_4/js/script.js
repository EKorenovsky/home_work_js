function valById(idInput) {
    return document.getElementById(idInput).value;
}


function task1() {
    let arStr = valById("inpIdTask1");
    let res = 0;
    [...arStr].forEach(element => {
        res += +element;
    });
    alert(res);
}

function task2() {
    let strMain = valById("inpIdStringTask2");
    let strSymbol = valById("inpIdSymbolTask2");
    let res = strMain.split(strSymbol).join(strSymbol.repeat(2));
    alert(res);
}

function task3() {

    let password = valById("inpIdPasswordTask3");

    let isCheckLength = false;
    let isCheck2Digitals = false;
    let isCheckLowerLetters = false;
    let isCheckUpperLetters = false;
    let isCheckSymbols = false;


    if (/.{9,}/.test(password))
        isCheckLength = true;
    if (/\d\D*\d\D*\d/.test(password))
        isCheck2Digitals = true;
    if (/[A-Z]/.test(password))
        isCheckUpperLetters = true;
    if (/[a-z]/.test(password))
        isCheckLowerLetters = true;
    if (/\W/.test(password))
        isCheckSymbols = true;

    let res = `Длина >9 символов: ${isCheckLength}\nЕсть 2 цифры: ${isCheck2Digitals}\nЕсть заглавные буквы лат. алфавита: ${isCheckUpperLetters}\nЕсть строчные буквы лат. алфавита: ${isCheckLowerLetters}\nЕсть спецсимволы: ${isCheckSymbols}`;
    alert(res);
}


function task4() {
    let strDayOfWeek = valById("inpIdStringTask4");
    if (/[а-я]+н[а-я]*д[а-я]+к/i.test(strDayOfWeek))
        alert("Понедельник");
    if (/в[а-я]*р[а-я]*к/i.test(strDayOfWeek))
        alert("Вторник");
    if (/с[а-я]*д[а-я]*/i.test(strDayOfWeek))
        alert("Среда");
    if (/ч[а-я]*г/i.test(strDayOfWeek))
        alert("Четверг");
    if (/[а-я]?я[а-я]*ц[а-я]?/i.test(strDayOfWeek))
        alert("Пятница");
    if (/[а-я]*[уб][а-я]*/i.test(strDayOfWeek))
        alert("Суббота");
    if (/в[а-я]*к[а-я]*[се][а-я]*/i.test(strDayOfWeek))
        alert("Воскресенье");
}