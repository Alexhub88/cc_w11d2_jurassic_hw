const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic', 45.7);
    triceratops = new Dinosaur('Triceratops','Ancient Asparagus', 67 );
    tyrannosaurus = new Dinosaur('Tyrannosaurus','Triceratops', 88 );
    stegosaurus = new Dinosaur('Stegosaurus', 'Pointy Ancient Leaves', 122);
    tyrannosaurus2 = new Dinosaur('Tyrannosaurus','Vegetarians', 35 );
    park.addDino(triceratops);
    park.addDino(tyrannosaurus);
  });

  it('should have a name', function () {
     const actual = park.name;
     assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 45.7);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to add a dinosaur to its collection', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
    park.addDino(stegosaurus);
    const actually = park.dinosaurCollection.length;
    assert.strictEqual(actually, 3);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
    park.removeDino();
    const actually = park.dinosaurCollection.length;
    assert.strictEqual(actually, 1);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
    park.addDino(tyrannosaurus2);
    const tyrannosaursInPark = park.findDinoBySpecies('Tyrannosaurus');
    assert.deepStrictEqual([tyrannosaurus, tyrannosaurus2], tyrannosaursInPark)
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
    park.addDino(tyrannosaurus2);
    park.addDino(stegosaurus);
    const dinosaursLeftInPark = park.removeDinoBySpecies('Tyrannosaurus');
    assert.deepStrictEqual(dinosaursLeftInPark, [triceratops, stegosaurus]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2);
    park.addDino(tyrannosaurus2);
    park.addDino(stegosaurus);
    const mostPopularDinosaur = park.findMostPopularDinosaur();
    assert.deepStrictEqual(mostPopularDinosaur, stegosaurus);
  });

});
