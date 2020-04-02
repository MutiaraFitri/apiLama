'use strict';

module.exports = function (app) {
    var controller = require('./controller');

    app.route('/')
        .get(controller.index);

    app.route('/users')
        .get(controller.users);

    app.route('/users/:user_id')
        .get(controller.findUsers);

    app.route('/users')
        .post(controller.createUsers);

    app.route('/users')
        .put(controller.updateUsers);

    app.route('/users')
        .delete(controller.deleteUsers);

    //ticket table
    app.route('/tickets')
        .get(controller.tickets)

    app.route('/users/:id_ticket')
        .get(controller.findTicket);

    app.route('/tickets')
        .post(controller.createTicket);

    app.route('/tickets')
        .put(controller.updateTicket);

    app.route('/tickets')
        .delete(controller.deleteTicket);

    //technician table
    app.route('/technician')
        .get(controller.technician)

<<<<<<< HEAD
    app.route('/technician/:id_technician')
        .get(todoList.findTechnician);

    app.route('/technician/:id_technician')
        .post(todoList.createTechnician);

    app.route('/technician/:id_technician')
        .put(todoList.updateTechnician);

    app.route('/technician/:id_technician')
        .delete(todoList.deleteTechnician);
=======
    app.route('/users/:technician')
        .get(controller.findTechnician);

    app.route('/technician')
        .post(controller.createTechnician);

    app.route('/technician')
        .put(controller.updateTechnician);

    app.route('/technician')
        .delete(controller.deleteTechnician);

    app.route('/login')
        .post(controller.login);

>>>>>>> 5652219935fe20f1af7f29ec809fd22fc42f6757
};