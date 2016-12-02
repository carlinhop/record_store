var assert = require("assert");
var Record = require("../Record");
var Store = require("../Store");

describe("Store", function(){
  var store1;

  before(function(){
    store1 = new Store("Gozadera Records", "Caracas");
  });

  it("should exist", function(){
    assert(store1);
  });

  it("should have a name", function(){
    assert.equal("Gozadera Records", store1.name);
  });

  it("should have a city", function(){
    assert.equal("Caracas", store1.city);
  });

  it("should have an inventory", function(){
    assert.deepEqual([],store1.inventory);
  });

  


});