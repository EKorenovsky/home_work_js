function User(name) {
    this.name = name;
    this.toString = function() {
        return `Имя: ${this.name}`;
    }
}

User.createAnonymous = function() {
    let user = new User("Аноним");
    return user;
}

User.createFromData = function(data) {
    let user = new User(data.name);
    user.age = data.age;
    user.toString = function() {
        return `Имя: ${data.name} возраст: ${data.age}`;
    }
    return user;
}



let a = new User.createAnonymous();
console.log(a.toString());

let q = new User.createFromData({ name: 'Misha', age: 20 });
console.log(q.toString());