
const robot = require('./robot');


describe('robot', () => {
  it('robot is not place on init', () => {
    robot.init();
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });

  it('robot can be placed', () => {
    robot.init();
    expect(robot.place(0,0,"N")).toEqual('Rob has been placed at 0,0,N');
    expect(robot.report()).toEqual('current position: 0,0,N');
  });
  it('robot can not be placed in an invalid location', () => {
    robot.init();
    expect(robot.place(6,6,"N")).toEqual('Invalid location');
    expect(robot.report()).toEqual('current position: 0,0,N');
  });

  it('robot can move after being placed', () => {
    robot.init();
    robot.place(0,0,'N');
    robot.move();
    expect(robot.report()).toEqual('current position: 0,1,N');
  });
});