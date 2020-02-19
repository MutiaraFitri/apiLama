'use strict';

module.exports = function (app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/tickets')
        .get(todoList.tickets);
    app.route('/users')
        .get(todoList.users);
        
    app.route('/users/:user_id')
        .get(todoList.findUsers);

    app.route('/tickets')
        .post(todoList.createTicket);
    app.route('/users')
        .post(todoList.createUsers);

    app.route('/users')
        .put(todoList.updateUsers);

    app.route('/users')
        .delete(todoList.deleteUsers);
};