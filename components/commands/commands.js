const vorpal = require('vorpal')();
const robot = require('../robot/robot');

exports.init = function(){
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
      let x;
      let y;
      let f;
      if(args.x.length > 2){
        // Splits the first argument into the correct values if no space between the commas
        const argArray = args.x.split(",");
        x = argArray[0];
        y = argArray[1];
        f = argArray[2];
      }
      else {
        // remove the comma if needed, otherwise just pass throgh the value
        x = args.x.toString().substr(-1) === "," ? args.x.substring(0, args.x.length - 1) : args.x; // remove comma if added
        y = args.y.toString().substr(-1) === "," ? args.y.substring(0, args.y.length - 1) : args.y; // remove comma if added
        f = args.f;
      }
      this.log(robot.place(x, y, f));
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