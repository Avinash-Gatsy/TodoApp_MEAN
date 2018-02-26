var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
    //setup middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    //api to get all todos of a person
    app.get('/api/todos/:uname', function (req, res) {
        //find the todos of that person from MongoDB
        Todos.find({ username: req.params.uname }, function (err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });
    //api to get a single todo by id
    app.get('/api/todo/:id', function (req, res) {
        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    });
    //post a new todo or update the existing one 
    app.post('/api/todo',function(req,res){
        //bosy-parser will help to convert json in req to js obj
        if(req.body.id){
            //if the req is to update the existing todo
            Todos.findByIdAndUpdate(req.body.id, 
                {
                    todo: req.body.todo,
                    isDone: req.body.isDone,
                    hasAttachment: req.body.hasAttachment
                },function(err,todo){
                    if(err) throw err;
                    res.send('successfully updated');
                });
        } else {
            //create a new todo
            var newTodo = Todos({
                username:'Avinash',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            //save the new todo to mongo
            newTodo.save(function(err){
                res.send('successfully saved');
            });
        }
    });
    app.delete('/api/todo',function(req,res){
        Todos.findByIdAndRemove(res.body.id,function(err){
            if(err) throw err;
            res.send('deletion successful');
        });
    });
};