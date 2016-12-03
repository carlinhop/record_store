var assert = require("assert");
var Record = require("../Record");
var Store = require("../Store");

describe("Store", function(){
  var store1;
  var record1;
  var record2;
  var record3;


  before(function(){
    store1 = new Store("Gozadera Records", "Caracas");
    record1 = new Record("Rawayanaland", "Rawayana", 10);
    record2 = new Record("Rawayanaland", "Rawayana", 10);
    record3 = new Record("Arepa 3000", "Amigos Invisibles", 19);
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

  it("should have a record in the inventory", function(){
    store1.inventory.push(record1);
    assert.equal("Rawayanaland",store1.inventory[0].title);
  });

  it("should have a bank account", function(){
    assert.equal(0,store1.cash);
  });

  it("should have a show inventory method", function(){
    store1.inventory.push(record2);
    store1.inventory.push(record3);
    result = new Map();
    result.set("Rawayanaland", 2);
    result.set("Arepa 3000", 1);
    assert.deepEqual(result, store1.showInventory());
  });


  it("should sell records", function(){
    store1.sell(record1);
    result = new Map();
    result.set("Rawayanaland", 1);
    result.set("Arepa 3000", 1);
    assert.equal(10,store1.cash);
    assert.deepEqual(result, store1.showInventory());
  });













});