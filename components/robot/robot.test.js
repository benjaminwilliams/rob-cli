
const robot = require('./robot');


describe('robot', () => {
  it('robot is not placed on init', () => {
    robot.init();
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });
  it('robot can be placed', () => {
    robot.init();
    expect(robot.place(0,0,"NORTH")).toEqual('Rob has been placed at 0,0,NORTH');
    expect(robot.report()).toEqual('current position: 0,0,NORTH');
  });
  it('robot can not be placed in an invalid x, y location', () => {
    robot.init();
    expect(robot.place(6,6,"NORTH")).toEqual('Invalid location');
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });
  it('robot can not be placed in an invalid f direction', () => {
    robot.init();
    expect(robot.place(0,0,"INVALID")).toEqual('Invalid direction, use NORTH, EAST, SOUTH or WEST');
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });
  it('robot can move after being placed', () => {
    robot.init();
    robot.place(0,0,'NORTH');
    robot.move();
    expect(robot.report()).toEqual('current position: 0,1,NORTH');
  });
  it('robot wont move if not placed', () => {
    robot.init();
    robot.move();
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });
  it('robot can turn right after being placed', () => {
    robot.init();
    robot.place(0,0,'NORTH');
    robot.right();
    expect(robot.report()).toEqual('current position: 0,0,EAST');
  });
  it('robot wont turn right if not placed', () => {
    robot.init();
    robot.right();
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });
  it('robot wont turn left if not placed', () => {
    robot.init();
    robot.left();
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });
  it('robot can turn left after being placed', () => {
    robot.init();
    robot.place(0,0,'NORTH');
    robot.left();
    expect(robot.report()).toEqual('current position: 0,0,WEST');
  });
});