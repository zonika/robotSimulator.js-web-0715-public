'use strict';

function Robot() {
  this.bearing = "north";
  this.coordinates = [0,0];
}

Robot.prototype.orient = function (direction) {
  if (direction == "east" || direction == "south" || direction == "west" || direction == "north"){
    this.bearing = direction;
  }else{
    throw new Error('Invalid Robot Bearing');
  }
};

Robot.prototype.turnRight = function () {
  switch (this.bearing){
    case 'north':
      this.bearing = 'east';
      break;
    case 'east':
      this.bearing = 'south';
      break;
    case 'south':
      this.bearing = 'west';
      break;
    case 'west':
      this.bearing = 'north';
      break;
  }
};

Robot.prototype.turnLeft = function () {
  switch (this.bearing){
    case 'north':
      this.bearing = 'west';
      break;
    case 'east':
      this.bearing = 'north';
      break;
    case 'south':
      this.bearing = 'east';
      break;
    case 'west':
      this.bearing = 'south';
      break;
  }
};

Robot.prototype.at = function(c1,c2){
  this.coordinates = [c1,c2];
}

Robot.prototype.advance = function () {
  switch (this.bearing){
    case 'north':
      this.coordinates[1] = this.coordinates[1]+1;
      break;
    case 'east':
      this.coordinates[0] = this.coordinates[0]+1;
      break;
    case 'south':
      this.coordinates[1] = this.coordinates[1]-1;
      break;
    case 'west':
      this.coordinates[0] = this.coordinates[0]-1;
      break;
  }
};

Robot.prototype.instructions = function (dir) {
  var instruct = [];
  var l = 0;
  while(l<dir.length){
    switch (dir[l]){
      case 'L':
        this.turnLeft();
        instruct.push('turnLeft');
        break;
      case 'R':
        this.turnRight();
        instruct.push('turnRight');
        break;
      case 'A':
        this.advance();
        instruct.push('advance');
        break;
    }
    l++;
  }
  return instruct;
};

Robot.prototype.place = function (args) {
  this.orient(args["direction"]);
  this.at(args["x"],args["y"]);
};

Robot.prototype.evaluate = function (instructions) {
  this.instructions(instructions);
};
