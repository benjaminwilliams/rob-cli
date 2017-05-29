

const movement = {
  directionIsValid: function(f){
    const dir = f.toUpperCase();
    return (dir === "NORTH" || dir === "EAST" || dir === "SOUTH" || dir === "WEST");
  },
  moveIsValid: function(x,y) {
    return x >= 0 && x < 5 && y >= 0 && y < 5;
  },
  moveRobot: function(currentPos) {
    let x = currentPos[0];
    let y = currentPos[1];
    const f = currentPos[2];
    let newPos;
    switch (f) {
      case "NORTH":
        y = y + 1;
        break;
      case "EAST":
        x = x + 1;
        break;
      case "SOUTH":
        y = y - 1;
        break;
      case "WEST":
        x = x - 1;
        break;
      default:

    }


    if (this.moveIsValid(x, y)) {
      newPos = [x, y, f];
    }
    else {
      newPos = currentPos;
    }
    return newPos;
  }
};

module.exports = movement;
