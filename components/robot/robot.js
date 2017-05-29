const movement = require('../movement/movement');

const robot = function(){
  this.isPlaced = false;
  this.currentPos = [0,0,'N'];
};

robot.prototype.init = function(){
  this.name = "rob";
};

// Report the current Position of the Robot
robot.prototype.report = () => {
  if(this.isPlaced) {
    return `current position: ${this.currentPos[0]},${this.currentPos[1]},${this.currentPos[2]}`;
  }
  else {
    return "Rob is not placed on the board";
  }
};

// Place the robot, note this can be done even if the robot is already placed
robot.prototype.place = (x,y,f) =>{
  if(movement.moveIsValid(x,y)){
    this.currentPos = [x,y,f];
    this.isPlaced = true;
    return `Rob has been placed at ${x},${y},${f}`;
  }
  else{
    return 'Invalid location';
  }
};

robot.prototype.move = () => {
  //the movement component deals with the logic,
  // it will return either the new position or the old position, so we can just
  // assign whatever is returned to this.currentPos
  this.currentPos = movement.moveRobot(this.currentPos);
};

module.exports = new robot();