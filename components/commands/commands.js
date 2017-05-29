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
    .command('PLACE [x],[y],[f]', 'Places Rob onto the board')
    .alias('place')
    .action(function(args, callback){
      this.log(robot.place(args.x, args.y, args.f));
      callback();
    });
  vorpal
    .command('MOVE', 'Move rob in the direction it is facing')
    .alias('move')
    .action(function(args, callback){
      robot.move();
      callback();
    });
  vorpal
    .delimiter('rob$')
    .show();
};