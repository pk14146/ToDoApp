Model = function () {
  UAM.EventEmitter.call(this);
  this.toDoArray = new Array();
  this.stats = {
    all: 0,
    done: 0
  }
};

utils.inherits(UAM.EventEmitter, Model);

Model.prototype.notifyController = function () {
  this.emit("updateList");
  this.emit("updateStats");
};

Model.prototype.addTodo = function ( todo ) {
  this.toDoArray.push({todo:todo, done: 0});
  this.refreshStats();
  this.notifyController();
};

Model.prototype.setDone = function ( todo ) {
  index = utils.getObjectIndex(this.toDoArray,todo,'todo');
  this.toDoArray[index].done = 1;
  this.refreshStats();
  this.emit("updateStats");
};

Model.prototype.getData = function(){
  return this.toDoArray;
};

Model.prototype.getStats = function(){
  return this.stats;
};

Model.prototype.refreshStats = function(){
  this.stats.all = this.toDoArray.length;
  this.stats.done = utils.getObjectCount(this.toDoArray,1,'done');
};





