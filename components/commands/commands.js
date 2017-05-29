const vorpal = require('vorpal')();
const robot = require('../robot/robot');

exports.init = function(){
  vorpal
    .command('REPORT', 'Outputs the current position of Rob')
    .action(function(args, callback){
      this.log(robot.report());
      callback();
    });
  vorpal
    .command('PLACE', 'Places Rob onto the board')
    .action(function(args, callback){
      this.log(robot.place());
      callback();
    });
  vorpal
    .delimiter('rob$')
    .show();
};