//Test Case for Assignment4.
const expect = require("chai").expect;
const sinon = require('sinon');
const readline = require("readline");
const index = require("../index");

describe("Test the createInterface method of readline", function() {
  it("should be called only once", function() {
    let spyCreateInterface = sinon.spy(readline, 'createInterface');

    index.exec();
    readline.createInterface.restore();
    sinon.assert.calledOnce(spyCreateInterface);
  });
});
describe("Test the on() method of readline interface for line event", function() {
  it("should be called", function() {
    var stub = sinon.stub(readline.Interface.prototype, 'on');

    index.exec();
    sinon.assert.called(stub);
    readline.Interface.prototype.on.restore();
    sinon.assert.calledWith(stub, "line");
  });
});

describe('Assignment5 - Test code for correct output', function(){
  it('Test whether the output of headers data is array or not', function(done){
    expect(Array.isArray(index.headers)).to.deep.equal(true);
    done();
  });
   
  it('Test whether the output of data is array or not', function(done){
    expect(Array.isArray(index.data)).to.deep.equal(true);
    done();
  });
});