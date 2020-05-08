class Animal{
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(this.name + ' eats');
    }
    sound(){
        console.log(sounds);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    sound(){
        console.log('Dog barks');
    }
}
var dog = new Dog('Rax', 'Dog');
dog.eat();
dog.sound();

class Cat extends Animal{
    constructor(name){
        super(name);
    }
    sound(){
        console.log('Cat meows');
    }
}

var cat = new Cat('Stormy', 'Cat');
cat.eat();
cat.sound();



class Home{
    constructor(){
        this.adoptedPets = [];
    }
    adoptPet(pet){
        this.adoptedPets.push(pet);
    }
    makeAllSounds(){
        for (var i = 0; i < this.adoptedPets.length; i++) {
            this.adoptedPets[i].sound();
        }
    }
}

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();


home.adoptPet(cat);
home.makeAllSounds();

home.adoptPet(dog2);
home.makeAllSounds();



