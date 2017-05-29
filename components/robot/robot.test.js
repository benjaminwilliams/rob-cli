
const robot = require('./robot');


describe('robot', () => {
  it('robot is not placed on init', () => {
    robot.init();
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });

  it('robot can be placed', () => {
    robot.init();
    expect(robot.place(0,0,"N")).toEqual('Rob has been placed at 0,0,N');
    expect(robot.report()).toEqual('current position: 0,0,N');
  });
  it('robot can not be placed in an invalid x, y location', () => {
    robot.init();
    expect(robot.place(6,6,"N")).toEqual('Invalid location');
    expect(robot.report()).toEqual('current position: 0,0,N');
  });
  it('robot can not be placed in an invalid f direction', () => {
    robot.init();
    expect(robot.place(0,0,"B")).toEqual('Invalid direction');
    expect(robot.report()).toEqual('current position: 0,0,N');
  });
  it('robot can move after being placed', () => {
    robot.init();
    robot.place(0,0,'N');
    robot.move();
    expect(robot.report()).toEqual('current position: 0,1,N');
  });
  it('robot wont move if not placed', () => {
    robot.init();
    robot.move();
    expect(robot.report()).toEqual('Rob is not placed on the board');
  });
  it('robot can turn right after being placed', () => {
    robot.init();
    robot.place(0,0,'N');
    robot.right();
    expect(robot.report()).toEqual('current position: 0,0,E');
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
    robot.place(0,0,'N');
    robot.left();
    expect(robot.report()).toEqual('current position: 0,0,W');
  });
});