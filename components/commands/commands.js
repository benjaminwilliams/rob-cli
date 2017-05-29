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
      this.log(robot.place(args.x, args.y, args.f));
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