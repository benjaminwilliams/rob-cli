const movement = require('../movement/movement');

const robot = function(){
};

robot.prototype.init = () => {
  this.isPlaced = false;
  this.currentPos = [0,0,'NORTH'];
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
  f = f.toUpperCase(); // start by making direction all uppercase
  if(movement.moveIsValid(x,y) && movement.directionIsValid(f)){
    this.currentPos = [x,y,f];
    this.isPlaced = true;
    return `Rob has been placed at ${x},${y},${f}`;
  }
  else if(movement.moveIsValid(x,y)){
    return 'Invalid direction, use NORTH, EAST, SOUTH or WEST';
  }
  else{
    return 'Invalid location';
  }
};

robot.prototype.move = () => {

  if(!this.isPlaced){
    return 'Rob has not been placed on the board';
  }

  const oldPos = this.currentPos;

  //the movement component deals with the logic,
  // it will return either the new position or the old position, so we can just
  // assign whatever is returned to this.currentPos
  this.currentPos = movement.moveRobot(this.currentPos);

  // provide feeback to the user if Rob can not move
  if(oldPos === this.currentPos){
    return 'Can not move Rob';
  }
};

// Turns the robot to the right
robot.prototype.right = () => {

  if(!this.isPlaced){
    return 'Rob has not been placed on the board';
  }

  const current = this.currentPos[2];

  let newDirection = "";
  switch(current){
    case "NORTH":
      newDirection = "EAST";
      break;
    case "EAST":
      newDirection = "SOUTH";
      break;
    case "SOUTH":
      newDirection = "WEST";
      break;
    case "WEST":
      newDirection = "NORTH";
      break;
    default:
  }
  this.currentPos[2] =  newDirection;
};

// Turns the robot to the left
robot.prototype.left = () => {

  if(!this.isPlaced){
    return 'Rob has not been placed on the board';
  }

  const current = this.currentPos[2];

  let newDirection = "";
  switch(current){
    case "NORTH":
      newDirection = "WEST";
      break;
    case "EAST":
      newDirection = "NORTH";
      break;
    case "SOUTH":
      newDirection = "EAST";
      break;
    case "WEST":
      newDirection = "SOUTH";
      break;
    default:
  }
  this.currentPos[2] =  newDirection;
};

module.exports = new robot();