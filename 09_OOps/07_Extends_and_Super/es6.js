//modern javascript syntex for classes
class Pet {
  species = "cats";
}

class Cat extends Pet {
  name = "Catie";
  meow = () =>
    `Meowwww!!!, i am ${this.name} & I am from ${this.species} family`;
}

const cat = new Cat();
console.log(cat.meow());
console.log(cat.species);
