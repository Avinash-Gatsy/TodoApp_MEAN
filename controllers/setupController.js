var Todos = require('../models/todoModel');

module.exports = function (app) {
    app.get('/api/setupTodos', function (req, res) {
        // setup seed data
        var starterTodos = [{
            username: 'Avinash',
            todo: 'Complete Js Data Structures',
            isDone: false,
            hasAttachment: false
        }, {
            username: 'Avinash',
            todo: 'Complete Js Design Patterns',
            isDone: false,
            hasAttachment: false
        }, {
            username: 'Avinash',
            todo: 'Complete HTML, CSS topics',
            isDone: false,
            hasAttachment: false
        }, {
            username: 'Avinash',
            todo: 'Angular',
            isDone: false,
            hasAttachment: false
        }];
        Todos.create(starterTodos, function (err, result) {
            if(err) throw err;
            res.send(result);
        });
    });
};