var assert = require("assert");
var Record = require("../Record");
describe("Record", function(){

  var record1;

  before(function(){
    record1 = new Record("Rawayanaland", "Rawayana", "10");
  });

  it("should exist", function(){
    assert(record1);
  });

  it("should have a title", function(){
    assert.equal("Rawayanaland",record1.title);
  });

  it("should have an artist", function(){
    assert.equal("Rawayana",record1.artist);
  });

  it("should have a price", function(){
    assert.equal(10,record1.price);
  });


});