View = function () {
  UAM.EventEmitter.call(this);
  this.addActions();
}

utils.inherits(UAM.EventEmitter, View);

View.prototype.addActions = function () {
  that = this;
  document.getElementById("addButton").addEventListener('click', function () {
    that.addTask();
  });
  document.querySelector("#list").addEventListener('click', function () {
    that.markDoneTask(event.target);
  });
};

View.prototype.addTask = function () {
  todo = document.querySelector("#newtodo").value;
  if (todo) {
    this.emit('addItem');
    document.querySelector("#newtodo").value = '';
  }
};

View.prototype.markDoneTask = function (elem) {
  elem.className = 'done';
  this.emit('setDone',elem.innerHTML);
};

View.prototype.updateStats = function (stats) {
  document.getElementById('totalTasks').innerHTML = stats.all;
  document.getElementById('doneTasks').innerHTML = stats.done;
}

View.prototype.updateList = function (todos) {

  var list = document.getElementById('list'), text = '';

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  for( var i = 0; i < todos.length; i++ ){
    text = document.createElement('li');
    text.innerHTML = todos[i].todo + '';
    if (todos[i].done === 1) text.className = 'done';
    document.querySelector("#list").appendChild(text);
    text = '';
  }

};







