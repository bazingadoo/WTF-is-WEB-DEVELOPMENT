class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating snacks`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);                     //prevents duplication
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meowwww!!!';
    }
}

class Dog extends Pet {
    barks() {
        return 'Whooops! Woof!';
    }
    eat() {
        return `${this.name} scarfs his food!`
    }
}