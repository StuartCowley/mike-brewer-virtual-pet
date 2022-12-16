function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
Pet.prototype.growUp = function () { 
    this.age =+ 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    // QUESTION: why doesn't this.walk = this.fitness += 4; work? it produces 18 instead of 14.
    this.walk = this.fitness + 4;
}


module.exports = Pet;