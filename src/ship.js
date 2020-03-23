var invalidType = ['wooden', 'tin', 'plastic'];
var Part = require("../src/part.js");

class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.type =
    (obj.type === invalidType[0] ||
    obj.type === invalidType[1] ||
    obj.type === invalidType[2] ? undefined : obj.type);
    this.maxCrew = obj.maxCrew;
    this.odometer = this.odometerInitialized(obj);
    this.fuelCapacity = (!obj.fuelCapacity ? 10 : obj.fuelCapacity);
    this.fuel = 0;
    this.captain = obj.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = {};
  }

  odometerInitialized(obj) {
    if (obj.odometer) {
      return obj.odometer;
    } else {
      return 0;
    }
  }

  addCrew(newCrew) {
     var openCrewSpots = this.maxCrew - this.crew.length;
     for (var i = 0; i < openCrewSpots; i++){
       if (newCrew[i].isAlive === true) this.crew.push(newCrew[i]);
      }
    }

  loadCargo(part) {
    if (part instanceof Part) {
      return this.cargo.push(part)
    }
  }

}

module.exports = Ship;
