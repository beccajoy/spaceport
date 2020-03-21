var invalidType = ['wooden', 'tin', 'plastic'];

class Ship {
  constructor(obj) {
    this.name = obj.name;
    this.type =
    (obj.type === invalidType[0] ||
    obj.type === invalidType[1] ||
    obj.type === invalidType[2] ? undefined : obj.type);
    this.maxCrew = 2;
    //Refactor this
    this.odometer = this.odometerInitialized(obj);
    this.fuelCapacity =
    (!obj.fuelCapacity ? 10 : obj.fuelCapacity);
    this.fuel = 0;
    this.captain = obj.captain;
    this.crew = [];
  }

  odometerInitialized(obj) {
    if (obj.odometer) {
      return obj.odometer;
    } else {
      return 0;
    }
  }

};

module.exports = Ship;
