const movement = require('./movement');

describe('movement', ()=>{
  it('should allow valid moves', ()=>{
    expect(movement.moveIsValid(0,0)).toEqual(true);
    expect(movement.moveIsValid(1,1)).toEqual(true);
    expect(movement.moveIsValid(2,2)).toEqual(true);
    expect(movement.moveIsValid(3,2)).toEqual(true);
    expect(movement.moveIsValid(4,4)).toEqual(true);
  });
  it('should NOT allow invalid moves', ()=>{
    expect(movement.moveIsValid(-1,-1)).toEqual(false);
    expect(movement.moveIsValid('a','a')).toEqual(false);
    expect(movement.moveIsValid(5,5)).toEqual(false);
    expect(movement.moveIsValid(100,100)).toEqual(false);
  });
  it('should move north correctly', ()=>{
    expect(movement.moveRobot([0,0,'NORTH'])).toEqual([0,1,'NORTH']);
    expect(movement.moveRobot([1,1,'NORTH'])).toEqual([1,2,'NORTH']);
    expect(movement.moveRobot([3,3,'NORTH'])).toEqual([3,4,'NORTH']);
  });
  it('should move north correctly', ()=>{
    expect(movement.moveRobot([2,2,'NORTH'])).toEqual([2,3,'NORTH']);
  });
  it('should move east correctly', ()=>{
    expect(movement.moveRobot([2,2,'EAST'])).toEqual([3,2,'EAST']);
  });
  it('should move south correctly', ()=>{
    expect(movement.moveRobot([2,2,'SOUTH'])).toEqual([2,1,'SOUTH']);
  });

  it('should move west correctly', ()=>{
    expect(movement.moveRobot([2,2,"WEST"])).toEqual([1,2,'WEST']);
  });
  it('should return the same position if not a valid move', ()=>{
    expect(movement.moveRobot([5,5,'NORTH'])).toEqual([5,5,'NORTH']);
    expect(movement.moveRobot([1,5,'NORTH'])).toEqual([1,5,'NORTH']);
    expect(movement.moveRobot([0,0,'SOUTH'])).toEqual([0,0,'SOUTH']);
    expect(movement.moveRobot([0,0,'WEST'])).toEqual([0,0,'WEST']);
  });
  it('should return input if invalid', ()=>{
    expect(movement.moveRobot('test')).toEqual('test');
  });

});
