
const robot = require('./robot');

test('robot is not place on init', () => {
  robot.init();
  expect(robot.report()).toEqual('Rob is not placed on the board');
});