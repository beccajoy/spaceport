var validTypes = [
  'shell',
  'hyperdrive',
  'computer',
  'life support',
  'landing gear',
  undefined
];


class Part {
  constructor(obj) {

    this.name = obj.name;

    this.type =
    (obj.type === validTypes[0] ||
    obj.type === validTypes[1] ||
    obj.type === validTypes[2] ||
    obj.type === validTypes[3] ||
    obj.type === validTypes[4] ? obj.type : undefined);

    this.value = obj.value;
    this.broken = false;
  }

  isValid() {
    if(this.name == undefined || this.type == undefined || this.value == undefined) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = Part;
