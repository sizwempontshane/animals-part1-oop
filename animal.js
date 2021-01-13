class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " eats");
  }
  sound() {
    console.log(sounds);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
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
    for (var i = 0; i < this.adoptedPets.length; i++) {
      this.adoptedPets[i].sound();
    }
  }
}


