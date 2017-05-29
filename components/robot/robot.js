

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
    return "current position: " + this.currentPos;
  }
  else {
    return "Rob is not placed on the board";
  }
};

robot.prototype.place = () =>{

};

module.exports = new robot();