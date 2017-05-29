const commands = require('./commands');

describe('commands', ()=>{

  it('should allow comma separated place without spaces ', ()=>{
    expect(commands.place({x: "1,1,NORTH"})).toEqual([1, 1, "NORTH"]);
  });
  it('should allow comma separated place with spaces ', ()=>{
    expect(commands.place({x: "1,", y: "1,", f: "NORTH"})).toEqual([1, 1, "NORTH"]);
  });
  it('should allow space separated place ', ()=>{
    expect(commands.place({x: "1", y: "1", f: "NORTH"})).toEqual([1, 1, "NORTH"]);
  });
  it('should not allow only 1 arguments ', ()=>{
    expect(commands.place({x: "1"})).toEqual(false);
  });
  it('should not allow comma seperated with no coordinates ', ()=>{
    expect(commands.place({x: "1,2"})).toEqual(false);
    expect(commands.place({x: "1,2,"})).toEqual(false);
  });
  it('should not allow only 2 arguments ', ()=>{
    expect(commands.place({x: "1", y: "1"})).toEqual(false);
  });
});

