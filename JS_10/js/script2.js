function Man(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests.slice();
    this.toString = () => (`Имя: ${this.name} Возраст: ${this.age} Пол: ${this.gender} Интересы: ${this.interests.toString()}.`);
}
let man = new Man("Sasha", 30, "М.", ['туризм', 'спорт', 'музыка']);
console.log(man.toString());


function Student(name, age, gender, interests, institute) {
    Man.call(this, name, age, gender, interests);
    this.institute = institute;
    this.toString = () => (`Имя: ${this.name} Возраст: ${this.age} Пол: ${this.gender} Интересы: ${this.interests.toString()}. Обучается в ${this.institute}`);
}

let student = new Student("Misha", 18, "М.", ['путешествия', 'спорт', 'музыка'], "ИТМО");
console.log(student.toString());