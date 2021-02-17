const { Dog, Cat, Home } = require("../src/animalPart2");

var dog = new Dog();
var cat = new Cat();
var home = new Home();

describe("Animal", function () {
  it("should expect Dog to eat Food", function () {
    expect(dog.eat()).toBe("Food");
  });

  it("should expect Dog not to eat food", function () {
    expect(dog.eat()).not.toBe("food");
  });

  it("should expect Dog sound to be Bark", function () {
    expect(dog.sounds()).toBe("Bark");
  });

  it("should expect Cat to eat Food", function () {
    expect(cat.eat()).toBe("Food");
  });

  it("should expect Cat not to eat food", function () {
    expect(cat.eat()).not.toBe("food");
  });

  it("should expect Cat not to eat meat", function () {
    expect(cat.eat()).not.toBe("meat");
  });

  it("should expect Cat sound to be Meow", function () {
    expect(cat.sounds()).toBe("Meow");
  });

  it("should expect Cat sound not to be Barkark", function () {
    expect(cat.sounds()).not.toBe("Barkark");
  });
});
