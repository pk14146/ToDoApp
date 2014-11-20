var Controller = function (view, model) {
  addItem = function () {
    model.addTodo(todo);
  };
  updateList = function () {
    view.updateList(model.getData());
  };
  updateStats = function () {
    view.updateStats(model.getStats());
  };
  setDone = function (todo) {
    model.setDone(todo);
  }

  model.on("updateList", updateList);
  model.on("updateStats", updateStats);
  view.on("setDone", setDone);
  view.on("addItem", addItem);
};





