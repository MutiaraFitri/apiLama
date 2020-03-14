'use strict';

module.exports = function (app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);

    app.route('/users/:user_id')
        .get(todoList.findUsers);

    app.route('/users')
        .post(todoList.createUsers);

    app.route('/users')
        .put(todoList.updateUsers);

    app.route('/users')
        .delete(todoList.deleteUsers);

    //ticket table
    app.route('/tickets')
        .get(todoList.tickets)

    app.route('/users/:id_ticket')
        .get(todoList.findTicket);

    app.route('/tickets')
        .post(todoList.createTicket);

    app.route('/tickets')
        .put(todoList.updateTicket);

    app.route('/tickets')
        .delete(todoList.deleteTicket);

    //technician table
    app.route('/technician')
        .get(todoList.technician)

    app.route('/technician/:id_technician')
        .get(todoList.findTechnician);

    app.route('/technician/:id_technician')
        .post(todoList.createTechnician);

    app.route('/technician/:id_technician')
        .put(todoList.updateTechnician);

    app.route('/technician/:id_technician')
        .delete(todoList.deleteTechnician);
};