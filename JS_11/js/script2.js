class Man {
    constructor(name, age, gender, interests) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests.slice();
    }
    toString = () => (`Имя: ${this.name} Возраст: ${this.age} Пол: ${this.gender} Интересы: ${this.interests.toString()}.`);
}
let man = new Man("Sasha", 30, "М.", ['туризм', 'спорт', 'музыка']);
console.log(man.toString());


class Student extends Man {
    constructor(name, age, gender, interests, institute) {
        super(name, age, gender, interests);
        this.institute = institute;
    }
    toString = () => (`Имя: ${this.name} Возраст: ${this.age} Пол: ${this.gender} Интересы: ${this.interests.toString()}. Обучается в ${this.institute}`);
}


let student = new Student("Misha", 18, "М.", ['путешествия', 'спорт', 'музыка'], "ИТМО");
console.log(student.toString());