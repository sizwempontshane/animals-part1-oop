class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " eats");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  sounds() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  sounds() {
    console.log("Cat meows");
  }
}



class Home {
  constructor() {
    this.adoptedPets = [];
  }
  adoptPet(pet) {
    this.adoptedPets.push(pet);
  }
  makeAllSounds() {
    for (let i = 0; i < this.adoptedPets.length; i++) {
      console.log(this.adoptedPets[i].sound());
    }
  }
}


