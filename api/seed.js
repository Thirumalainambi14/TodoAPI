const mongoose = require('mongoose');
const Task = require('./models/todoListModel');

module.exports = () => {
  const seedData = [
    {
      name: 'MongoDB Insights',
      status: 'ongoing'
    },
    {
      name: 'Nodejs Insights',
      status: 'completed'
    },
    {
      name: 'Javascript Insights',
      status: 'ongoing'
    },
    {
      name: 'HTML/CSS Insights'
    }
  ];

  Task.create(seedData).then((err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    return data;
  })

}