const vorpal = require('vorpal')();
const robot = require('../robot/robot');


const commands = function(){};


commands.prototype.place = (args) => {
  // Here we try to deal with the possible inputs a user could use to place
  // 1. PLACE X,Y,F
  // 2. PLACE X, Y, F
  // 3. PLACE X Y F
  let x;
  let y;
  let f;

  //if using PLACE X,Y,F (option 1)
  if(args.x.length > 2){
    // Splits the first argument into the correct values if no space between the commas
    const argArray = args.x.split(",");
    if(argArray.length === 3 && argArray[0] && argArray[1] && argArray[2]) { // only return valid place if all 3 coords are filled in
      x = parseInt(argArray[0],10);
      y = parseInt(argArray[1],10);
      f = argArray[2];
      return [x, y, f];
    }
    else{
      // return error
      return false;
    }
  }
  // User is using spaces,
  else {
    x = args.x || false;
    y = args.y || false;
    f = args.f || false;

  }
  // There must have all 3 arguments
  if(x && y && f){
    // remove the comma if needed, otherwise just pass through the value
    x = args.x.toString().substr(-1) === "," ? args.x.substring(0, args.x.length - 1) : args.x; // remove comma if added
    y = args.y.toString().substr(-1) === "," ? args.y.substring(0, args.y.length - 1) : args.y; // remove comma if added
    f = args.f;
    x = parseInt(x, 10);
    y = parseInt(y, 10);
    return[x, y, f];
  }
  else{
    return false;
  }

};


// Creates this list of valid commands
commands.prototype.init = function(){
  const self = this;

  vorpal
    .command('REPORT', 'Outputs the current position of Rob')
    .alias('report')
    .action(function(args, callback){
      this.log(robot.report());
      callback();
    });
  vorpal
    .command('PLACE [x],[y],[f]', 'Places Rob onto the board, use the syntax PLACE X Y F')
    .alias('place')
    .action(function(args, callback){

      const coords = self.place(args);

      if(coords){
        this.log(robot.place(coords[0],coords[1],coords[2]));
      }
      else{
        this.log('invalid command');
      }
      callback();
    });
  vorpal
    .command('MOVE', 'Move Rob in the direction it is facing')
    .alias('move')
    .action(function(args, callback){
      const move = robot.move();
      if(move) {
        this.log(robot.move());
      }
      callback();
    });
  vorpal
    .command('LEFT', 'Rotates Rob to the left (anticlockwise)')
    .alias('left')
    .action(function(args, callback){
      const left = robot.left();
      if(left){
        this.log(left);
      }
      callback();
    });
  vorpal
    .command('RIGHT', 'Rotates Rob to the right (clockwise)')
    .alias('right')
    .action(function(args, callback){
      const right = robot.right();
      if(right){
        this.log(right);
      }
      callback();
    });
  vorpal
    .delimiter('rob$')
    .show();
};

module.exports = new commands();
