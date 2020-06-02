const mongoose = require('mongoose');
const Task = require('../models/todoListModel');


module.exports.listAllTasks = function (req, res) {
  Task.find({}, function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
}

module.exports.createTask = function (req, res) {
  let new_task = new Task(req.body);
  new_task.save(function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
}


module.exports.readTask = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
}

module.exports.updateTask = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
}

module.exports.deleteTask = function (req, res) {
  Task.deleteOne({ _id: req.params.taskId }, function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Task Succesfully Deleted" });
    }
  })
}