const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price= ticket_price;
  this.dinosaurCollection = [];
};

Park.prototype.addDino = function(dinosaur){
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDino = function(){
  this.dinosaurCollection.pop();
};

Park.prototype.findDinoBySpecies = function(speciesToFind){
  const dinoOfSpeciesArray = [];
  for (dino of this.dinosaurCollection) {
    if (dino.species === speciesToFind) {
      dinoOfSpeciesArray.push(dino);
    };
  };
  return dinoOfSpeciesArray;
};

Park.prototype.removeDinoBySpecies = function(speciesToRemove){
  let dino = this.dinosaurCollection.find(item => item.species == speciesToRemove);
  while (dino != undefined) {
      index = this.dinosaurCollection.indexOf(dino);
      this.dinosaurCollection.splice(index, 1);
      dino = this.dinosaurCollection.find(item => item.species == speciesToRemove);
  };
  return this.dinosaurCollection;
};

Park.prototype.findMostPopularDinosaur = function(){
  var maxValue = this.dinosaurCollection[0].guestsAttractedPerDay;
  var maxIndex = 0;
  for(var i = 1; i < this.dinosaurCollection.length; i++){
    if (this.dinosaurCollection[i].guestsAttractedPerDay > maxValue){
      maxValue = this.dinosaurCollection[i].guestsAttractedPerDay;
      maxIndex = i;
    };
  };
  return this.dinosaurCollection[maxIndex];
};

module.exports = Park;
