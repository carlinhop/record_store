
var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.cash = 0;
};



Store.prototype.showInventory = function(){
  //Ask teachers about this: Using maps it works using objects it does not.
  var result = new Map();
  this.inventory.map(function(record){
    var count= 0;
    this.inventory.reduce(function(record1, record2){
        if(record2.name == record.name){
          count +=1;
        }
    },0);
    result.set(record.title, count);
  }.bind(this));
  return result;
};


module.exports = Store;