class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return "Food";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  sounds() {
    return "Bark";
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  sounds() {
    return "Meow";
  }
}

class Home {
  constructor() {
    this.adoptedAnimals = [];
  }
  adoptPet(pet) {
    this.adoptedAnimals.push(pet);
  }
  makeAllSounds() {
    for (var i = 0; i < this.adoptedAnimals.length; i++) {
      this.adoptedAnimals[i].sounds();
    }
  }
}
module.exports = { Dog, Cat, Home };
