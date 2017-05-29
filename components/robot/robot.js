const movement = require('../movement/movement');

const robot = function(){
  this.isPlaced = false;
  this.currentPos = [0,0,'N'];
};

robot.prototype.init = function(){
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
  if(movement.moveIsValid(x,y) && movement.directionIsValid(f)){
    this.currentPos = [x,y,f];
    this.isPlaced = true;
    return `Rob has been placed at ${x},${y},${f}`;
  }
  else if(movement.moveIsValid(x,y)){
    return 'Invalid direction';
  }
  else{
    return 'Invalid location';
  }
};

robot.prototype.move = () => {
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

  const current = this.currentPos[2];

  let newDirection = "";
  switch(current){
    case "N":
      newDirection = "E";
      break;
    case "E":
      newDirection = "S";
      break;
    case "S":
      newDirection = "W";
      break;
    case "W":
      newDirection = "N";
      break;
    default:
  }
  this.currentPos[2] =  newDirection;
};

// Turns the robot to the left
robot.prototype.left = () => {

  const current = this.currentPos[2];

  let newDirection = "";
  switch(current){
    case "N":
      newDirection = "W";
      break;
    case "E":
      newDirection = "N";
      break;
    case "S":
      newDirection = "E";
      break;
    case "W":
      newDirection = "S";
      break;
    default:
  }
  this.currentPos[2] =  newDirection;
};
module.exports = new robot();