const todoList = require('../controllers/todoListController');

module.exports = function (app) {

  //todolist routes
  app.route('/tasks')
    .get(todoList.listAllTasks)
    .post(todoList.createTask);

  app.route('/tasks/:taskId')
    .get(todoList.readTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);
}